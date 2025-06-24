"use server"

// Demo data as fallback
const demoClients = [
  {
    id: 1,
    contact_name: "John Smith",
    company_name: "Tech Corp",
    email: "john@techcorp.com",
    phone: "+1-555-0101",
    address: "123 Tech Street, Silicon Valley, CA",
    client_type: "Enterprise",
    status: "active",
    notes: "Looking for e-commerce solution",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    contact_name: "Sarah Johnson",
    company_name: "StartupCo",
    email: "sarah@startup.com",
    phone: "+1-555-0102",
    address: "456 Innovation Ave, Austin, TX",
    client_type: "Startup",
    status: "active",
    notes: "iOS and Android app development",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    contact_name: "Mike Davis",
    company_name: "Business Solutions",
    email: "mike@business.com",
    phone: "+1-555-0103",
    address: "789 Business Blvd, New York, NY",
    client_type: "SMB",
    status: "pending",
    notes: "Digital transformation project",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    contact_name: "Emily Chen",
    company_name: "Design Studio",
    email: "emily@designstudio.com",
    phone: "+1-555-0104",
    address: "321 Creative Lane, Portland, OR",
    client_type: "Agency",
    status: "active",
    notes: "Brand identity and website redesign",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    contact_name: "Robert Wilson",
    company_name: "Manufacturing Inc",
    email: "robert@manufacturing.com",
    phone: "+1-555-0105",
    address: "654 Industrial Way, Detroit, MI",
    client_type: "Enterprise",
    status: "inactive",
    notes: "Legacy system modernization",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// Demo contacts data
const demoContacts = [
  {
    id: 1,
    client_id: 1,
    first_name: "John",
    last_name: "Smith",
    role: "CEO",
    email: "john@techcorp.com",
    phone: "+1-555-0101",
  },
  {
    id: 2,
    client_id: 1,
    first_name: "Jane",
    last_name: "Doe",
    role: "CTO",
    email: "jane@techcorp.com",
    phone: "+1-555-0102",
  },
  {
    id: 3,
    client_id: 2,
    first_name: "Sarah",
    last_name: "Johnson",
    role: "Founder",
    email: "sarah@startup.com",
    phone: "+1-555-0103",
  },
  {
    id: 4,
    client_id: 3,
    first_name: "Mike",
    last_name: "Davis",
    role: "Operations Manager",
    email: "mike@business.com",
    phone: "+1-555-0104",
  },
  {
    id: 5,
    client_id: 4,
    first_name: "Emily",
    last_name: "Chen",
    role: "Creative Director",
    email: "emily@designstudio.com",
    phone: "+1-555-0105",
  },
]

export async function getClients() {
  try {
    // Check if database environment variables are available
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      console.log("No database URL found, using demo data")
      return demoClients
    }

    // Try to import and use Neon
    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    const clients = await sql`
      SELECT 
        id,
        contact_name,
        company_name,
        email,
        phone,
        address,
        client_type,
        status,
        notes,
        created_at,
        updated_at
      FROM clients 
      ORDER BY created_at DESC
    `

    console.log(`Fetched ${clients.length} clients from database`)
    return clients
  } catch (error) {
    console.error("Database connection failed, using demo data:", error)
    return demoClients
  }
}

export async function addClient(formData: FormData) {
  const contactName = formData.get("contactName") as string
  const companyName = formData.get("companyName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string
  const clientType = formData.get("clientType") as string
  const notes = formData.get("notes") as string

  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Client added successfully (demo mode - database not connected)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      INSERT INTO clients (contact_name, company_name, email, phone, address, client_type, status, notes)
      VALUES (${contactName}, ${companyName}, ${email}, ${phone}, ${address}, ${clientType}, 'active', ${notes})
    `
    return { success: true, message: "Client added successfully" }
  } catch (error) {
    console.error("Error adding client:", error)
    return { success: false, message: "Failed to add client. Please try again." }
  }
}

export async function updateClient(clientId: number, formData: FormData) {
  const contactName = formData.get("contactName") as string
  const companyName = formData.get("companyName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string
  const clientType = formData.get("clientType") as string
  const status = formData.get("status") as string
  const notes = formData.get("notes") as string

  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Client updated successfully (demo mode - database not connected)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      UPDATE clients 
      SET 
        contact_name = ${contactName},
        company_name = ${companyName},
        email = ${email},
        phone = ${phone},
        address = ${address},
        client_type = ${clientType},
        status = ${status},
        notes = ${notes},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${clientId}
    `
    return { success: true, message: "Client updated successfully" }
  } catch (error) {
    console.error("Error updating client:", error)
    return { success: false, message: "Failed to update client. Please try again." }
  }
}

export async function updateClientStatus(clientId: number, status: string) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Status updated successfully (demo mode)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      UPDATE clients 
      SET status = ${status}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${clientId}
    `
    return { success: true, message: "Status updated successfully" }
  } catch (error) {
    console.error("Error updating client status:", error)
    return { success: false, message: "Failed to update status. Please try again." }
  }
}

export async function deleteClient(clientId: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Client deleted successfully (demo mode)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    // Delete associated contacts first (if any)
    await sql`DELETE FROM contacts WHERE client_id = ${clientId}`

    // Then delete the client
    await sql`DELETE FROM clients WHERE id = ${clientId}`

    return { success: true, message: "Client deleted successfully" }
  } catch (error) {
    console.error("Error deleting client:", error)
    return { success: false, message: "Failed to delete client. Please try again." }
  }
}

export async function getClientById(clientId: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      console.log("No database URL found, using demo data")
      return demoClients.find((client) => client.id === clientId) || null
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    const clients = await sql`
      SELECT 
        id,
        contact_name,
        company_name,
        email,
        phone,
        address,
        client_type,
        status,
        notes,
        created_at,
        updated_at
      FROM clients 
      WHERE id = ${clientId}
    `

    return clients[0] || null
  } catch (error) {
    console.error("Database connection failed, using demo data:", error)
    return demoClients.find((client) => client.id === clientId) || null
  }
}

export async function getContactsByClientId(clientId: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      console.log("No database URL found, using demo data")
      return demoContacts.filter((contact) => contact.client_id === clientId)
    }

    const { neon } = await import("@neondatabase/serverless")
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

    return contacts
  } catch (error) {
    console.error("Database connection failed for contacts, using demo data:", error)
    return demoContacts.filter((contact) => contact.client_id === clientId)
  }
}

// Contact management functions
export async function addContact(clientId: number, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const role = formData.get("role") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Contact added successfully (demo mode - database not connected)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      INSERT INTO contacts (client_id, first_name, last_name, role, email, phone)
      VALUES (${clientId}, ${firstName}, ${lastName}, ${role}, ${email}, ${phone})
    `
    return { success: true, message: "Contact added successfully" }
  } catch (error) {
    console.error("Error adding contact:", error)
    return { success: false, message: "Failed to add contact. Please try again." }
  }
}

export async function updateContact(contactId: number, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const role = formData.get("role") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Contact updated successfully (demo mode - database not connected)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      UPDATE contacts 
      SET 
        first_name = ${firstName},
        last_name = ${lastName},
        role = ${role},
        email = ${email},
        phone = ${phone},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${contactId}
    `
    return { success: true, message: "Contact updated successfully" }
  } catch (error) {
    console.error("Error updating contact:", error)
    return { success: false, message: "Failed to update contact. Please try again." }
  }
}

export async function deleteContact(contactId: number) {
  try {
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    if (!databaseUrl) {
      return { success: true, message: "Contact deleted successfully (demo mode)" }
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      DELETE FROM contacts 
      WHERE id = ${contactId}
    `
    return { success: true, message: "Contact deleted successfully" }
  } catch (error) {
    console.error("Error deleting contact:", error)
    return { success: false, message: "Failed to delete contact. Please try again." }
  }
}
