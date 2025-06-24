"use server"

import { neon } from "@neondatabase/serverless"

export async function getClients() {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, clients: [], error: "No database URL configured" }
    }

    const sql = neon(databaseUrl)

    // Check if the table exists
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      );
    `

    if (!tableCheck[0]?.exists) {
      return { success: false, clients: [], error: "Clients table does not exist. Please run the database migration." }
    }

    // Verify table structure
    const columns = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      AND table_schema = 'public'
    `

    const columnNames = columns.map((col) => col.column_name)
    const hasCorrectStructure =
      columnNames.includes("name") &&
      columnNames.includes("size") &&
      columnNames.includes("address") &&
      columnNames.includes("status")

    if (!hasCorrectStructure) {
      return {
        success: false,
        clients: [],
        error: "Database schema is incorrect. Please run the latest migration script.",
      }
    }

    // Get clients using the correct structure
    const clients = await sql`
      SELECT 
        id,
        name,
        size,
        COALESCE(address, '') as address,
        status,
        created_at,
        updated_at
      FROM clients 
      ORDER BY created_at DESC
    `

    return { success: true, clients, error: null }
  } catch (error) {
    console.error("Database error:", error)
    return { success: false, clients: [], error: `Database error: ${error.message}` }
  }
}

export async function addClient(formData: FormData) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: false, message: "Database not configured" }
    }

    // Extract and validate form data
    const name = formData.get("name") as string
    const size = formData.get("size") as string
    const address = formData.get("address") as string
    const status = formData.get("status") as string

    console.log("Adding client with data:", { name, size, address, status })

    // Validate required fields
    if (!name?.trim()) {
      return { success: false, message: "Name is required" }
    }
    if (!size?.trim()) {
      return { success: false, message: "Size is required" }
    }
    if (!status?.trim()) {
      return { success: false, message: "Status is required" }
    }

    const sql = neon(databaseUrl)

    // Verify table structure before inserting
    const columns = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      AND table_schema = 'public'
    `

    const columnNames = columns.map((col) => col.column_name)
    console.log("Available columns:", columnNames)

    if (!columnNames.includes("name") || !columnNames.includes("size")) {
      return { success: false, message: "Database schema is incorrect. Please run the migration script." }
    }

    // Insert the new client
    const result = await sql`
      INSERT INTO clients (name, size, address, status, created_at, updated_at) 
      VALUES (${name.trim()}, ${size.trim()}, ${address?.trim() || ""}, ${status.trim()}, NOW(), NOW())
      RETURNING id, name
    `

    console.log("Client added successfully:", result[0])
    return { success: true, message: `Client "${result[0].name}" added successfully!` }
  } catch (error) {
    console.error("Error adding client:", error)
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

    await sql`
      UPDATE clients SET
        name = ${name},
        size = ${size},
        address = ${address || ""},
        status = ${status},
        updated_at = NOW()
      WHERE id = ${id}
    `

    return { success: true, message: "Client updated successfully" }
  } catch (error) {
    console.error("Error updating client:", error)
    return { success: false, message: `Failed to update client: ${error.message}` }
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
    const result = await sql`DELETE FROM clients WHERE id = ${id} RETURNING name`

    return { success: true, message: `Client "${result[0]?.name || "Unknown"}" deleted successfully` }
  } catch (error) {
    console.error("Error deleting client:", error)
    return { success: false, message: `Failed to delete client: ${error.message}` }
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
        COALESCE(role, '') as role,
        COALESCE(email, '') as email,
        COALESCE(phone, '') as phone,
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
        ${role || ""},
        ${email || ""},
        ${phone || ""},
        NOW(),
        NOW()
      )
    `

    return { success: true, message: "Contact added successfully" }
  } catch (error) {
    console.error("Error adding contact:", error)
    return { success: false, message: `Failed to add contact: ${error.message}` }
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
        role = ${role || ""},
        email = ${email || ""},
        phone = ${phone || ""},
        updated_at = NOW()
      WHERE id = ${id}
    `

    return { success: true, message: "Contact updated successfully" }
  } catch (error) {
    console.error("Error updating contact:", error)
    return { success: false, message: `Failed to update contact: ${error.message}` }
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
    return { success: false, message: `Failed to delete contact: ${error.message}` }
  }
}
