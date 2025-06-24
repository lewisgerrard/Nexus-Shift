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
      return { success: false, clients: [], error: "Clients table does not exist" }
    }

    // Get clients using the new simplified structure
    const clients = await sql`
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

    // Extract form data
    const name = formData.get("name") as string
    const size = formData.get("size") as string
    const address = formData.get("address") as string
    const status = formData.get("status") as string

    // Validate required fields
    const errors = []
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required")
    }
    if (!size || typeof size !== "string" || size.trim().length === 0) {
      errors.push("Size is required")
    }
    if (!status || typeof status !== "string" || status.trim().length === 0) {
      errors.push("Status is required")
    }

    if (errors.length > 0) {
      return {
        success: false,
        message: `Validation failed: ${errors.join(", ")}`,
      }
    }

    const sql = neon(databaseUrl)

    // Insert using the new simplified structure
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

    return { success: true, message: "Client added successfully" }
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

    // Update using the new simplified structure
    await sql`
      UPDATE clients SET
        name = ${name},
        size = ${size},
        address = ${address},
        status = ${status},
        updated_at = NOW()
      WHERE id = ${id}
    `

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
