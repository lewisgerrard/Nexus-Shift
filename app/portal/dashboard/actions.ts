"use server"

import { neon } from "@neondatabase/serverless"

export async function getClients() {
  try {
    // Check if database environment variables are available
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    console.log("Database URL exists:", !!databaseUrl)

    if (!databaseUrl) {
      console.log("No database URL found")
      return { success: false, clients: [], error: "No database URL configured" }
    }

    const sql = neon(databaseUrl)

    console.log("Attempting to connect to database...")

    // First, let's check if the table exists
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      );
    `

    console.log("Table exists check:", tableCheck)

    if (!tableCheck[0]?.exists) {
      console.log("Clients table does not exist")
      return { success: false, clients: [], error: "Clients table does not exist" }
    }

    // Get table structure to understand what columns we have
    const tableStructure = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position;
    `

    console.log("Table structure:", tableStructure)

    // Check what columns are available
    const columnNames = tableStructure.map((col) => col.column_name)
    const hasNewStructure = columnNames.includes("name") && columnNames.includes("size")
    const hasOldStructure = columnNames.includes("contact_name") && columnNames.includes("client_type")

    console.log("Available columns:", columnNames)
    console.log("Has new structure (name, size):", hasNewStructure)
    console.log("Has old structure (contact_name, client_type):", hasOldStructure)

    // Try to get clients with flexible column selection
    let clients
    if (hasNewStructure) {
      // Use new 4-field structure
      console.log("Using new 4-field structure")
      clients = await sql`
        SELECT 
          id,
          name,
          size,
          address,
          status,
          created_at,
          updated_at
        FROM clients 
        ORDER BY created_at DESC
      `
    } else if (hasOldStructure) {
      // Use old structure but map to new format
      console.log("Using old structure, mapping to new format")
      clients = await sql`
        SELECT 
          id,
          COALESCE(company_name, contact_name, 'Unnamed Client') as name,
          COALESCE(client_type, 'Unknown') as size,
          COALESCE(address, '') as address,
          COALESCE(status, 'pending') as status,
          created_at,
          updated_at
        FROM clients 
        ORDER BY created_at DESC
      `
    } else {
      // Fallback - get whatever columns exist
      console.log("Using fallback query")
      clients = await sql`
        SELECT * FROM clients 
        ORDER BY created_at DESC
      `

      // Map the data to expected format
      clients = clients.map((client) => ({
        id: client.id,
        name: client.name || client.company_name || client.contact_name || "Unnamed Client",
        size: client.size || client.client_type || "Unknown",
        address: client.address || "",
        status: client.status || "pending",
        created_at: client.created_at,
        updated_at: client.updated_at,
      }))
    }

    console.log(`Successfully fetched ${clients.length} clients from database`)
    if (clients.length > 0) {
      console.log("Sample client data:", clients[0])
    }

    return { success: true, clients, error: null }
  } catch (error) {
    console.error("Database connection failed:", error)
    return { success: false, clients: [], error: error.message }
  }
}

export async function addClient(formData: FormData) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    // Get form data for the 4-field structure
    const name = formData.get("name") as string
    const size = formData.get("size") as string
    const address = formData.get("address") as string
    const status = formData.get("status") as string

    console.log("Adding client with data:", { name, size, address, status })

    // Validate required fields
    if (!name || !size || !status) {
      return { success: false, message: "Name, size, and status are required" }
    }

    // Check what columns exist in the table
    const tableStructure = await sql`
      SELECT column_name, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'clients'
    `

    const columns = tableStructure.reduce((acc, col) => {
      acc[col.column_name] = col.is_nullable === "YES"
      return acc
    }, {})

    console.log("Available columns:", Object.keys(columns))

    // Determine the best insertion strategy based on available columns
    if (columns.name && columns.size) {
      // New structure exists - use it
      console.log("Using new structure (name, size)")
      await sql`
        INSERT INTO clients (
          name, 
          size, 
          address, 
          status,
          created_at,
          updated_at
        ) VALUES (
          ${name}, 
          ${size}, 
          ${address || ""}, 
          ${status},
          NOW(),
          NOW()
        )
      `
    } else {
      // Old structure - populate all required fields
      console.log("Using old structure compatibility mode")

      // Provide values for all potentially required old columns
      const insertData = {
        contact_name: name,
        company_name: name, // Use same name for both
        email: "", // Empty string for non-required field
        phone: "", // Empty string for non-required field
        address: address || "",
        client_type: size,
        status: status,
      }

      await sql`
        INSERT INTO clients (
          contact_name,
          company_name,
          email,
          phone,
          address,
          client_type,
          status,
          created_at,
          updated_at
        ) VALUES (
          ${insertData.contact_name},
          ${insertData.company_name},
          ${insertData.email},
          ${insertData.phone},
          ${insertData.address},
          ${insertData.client_type},
          ${insertData.status},
          NOW(),
          NOW()
        )
      `
    }

    console.log("Client added successfully")
    return { success: true, message: "Client added successfully" }
  } catch (error) {
    console.error("Error adding client:", error)

    // Provide more specific error messages
    if (error.message.includes("not-null constraint")) {
      return {
        success: false,
        message: "Database schema mismatch. Please run the latest migration script to update the table structure.",
      }
    }

    return { success: false, message: `Failed to add client: ${error.message}` }
  }
}

export async function updateClient(id: number, formData: FormData) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    const name = formData.get("name") as string
    const size = formData.get("size") as string
    const address = formData.get("address") as string
    const status = formData.get("status") as string

    // Check what columns exist in the table
    const tableStructure = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'clients'
    `

    const columnNames = tableStructure.map((col) => col.column_name)
    const hasNewStructure = columnNames.includes("name") && columnNames.includes("size")

    if (hasNewStructure) {
      // Use new 4-field structure
      await sql`
        UPDATE clients SET
          name = ${name},
          size = ${size},
          address = ${address},
          status = ${status},
          updated_at = NOW()
        WHERE id = ${id}
      `
    } else {
      // Fallback to old structure
      await sql`
        UPDATE clients SET
          contact_name = ${name},
          company_name = ${name},
          client_type = ${size},
          address = ${address},
          status = ${status},
          updated_at = NOW()
        WHERE id = ${id}
      `
    }

    return { success: true, message: "Client updated successfully" }
  } catch (error) {
    console.error("Error updating client:", error)
    return { success: false, message: "Failed to update client" }
  }
}

export async function deleteClient(id: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    // Delete associated contacts first
    await sql`DELETE FROM contacts WHERE client_id = ${id}`

    // Then delete the client
    await sql`DELETE FROM clients WHERE id = ${id}`

    return { success: true, message: "Client deleted successfully" }
  } catch (error) {
    console.error("Error deleting client:", error)
    return { success: false, message: "Failed to delete client" }
  }
}

export async function getContactsByClientId(clientId: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, contacts: [], error: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    const contacts = await sql`
      SELECT 
        id,
        client_id,
        first_name,
        last_name,
        role,
        email,
        phone,
        created_at,
        updated_at
      FROM contacts 
      WHERE client_id = ${clientId}
      ORDER BY created_at DESC
    `

    return { success: true, contacts, error: null }
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return { success: false, contacts: [], error: error.message }
  }
}

export async function addContact(formData: FormData) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    const clientId = formData.get("clientId") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const role = formData.get("role") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    await sql`
      INSERT INTO contacts (
        client_id,
        first_name,
        last_name,
        role,
        email,
        phone,
        created_at,
        updated_at
      ) VALUES (
        ${Number.parseInt(clientId)},
        ${firstName},
        ${lastName},
        ${role},
        ${email},
        ${phone},
        NOW(),
        NOW()
      )
    `

    return { success: true, message: "Contact added successfully" }
  } catch (error) {
    console.error("Error adding contact:", error)
    return { success: false, message: "Failed to add contact" }
  }
}

export async function updateContact(id: number, formData: FormData) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const role = formData.get("role") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    await sql`
      UPDATE contacts SET
        first_name = ${firstName},
        last_name = ${lastName},
        role = ${role},
        email = ${email},
        phone = ${phone},
        updated_at = NOW()
      WHERE id = ${id}
    `

    return { success: true, message: "Contact updated successfully" }
  } catch (error) {
    console.error("Error updating contact:", error)
    return { success: false, message: "Failed to update contact" }
  }
}

export async function deleteContact(id: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    const sql = neon(databaseUrl)

    await sql`DELETE FROM contacts WHERE id = ${id}`

    return { success: true, message: "Contact deleted successfully" }
  } catch (error) {
    console.error("Error deleting contact:", error)
    return { success: false, message: "Failed to delete contact" }
  }
}
