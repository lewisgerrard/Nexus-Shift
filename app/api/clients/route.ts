import { NextResponse } from "next/server"

function getDatabaseUrl() {
  const possibleUrls = [
    process.env.DATABASE_URL,
    process.env.POSTGRES_URL,
    process.env.NEON_DATABASE_URL,
    process.env.POSTGRES_PRISMA_URL,
    process.env.DATABASE_URL_UNPOOLED,
    process.env.POSTGRES_URL_NON_POOLING,
    process.env.POSTGRES_URL_NO_SSL,
  ]

  for (const url of possibleUrls) {
    if (url) return url
  }
  return null
}

export async function GET() {
  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    return NextResponse.json({
      success: false,
      clients: [],
      error: "No database URL found in environment variables",
    })
  }

  try {
    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    // Test connection
    await sql`SELECT 1 as test`

    // Check if clients table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      ) as exists
    `

    if (!tableExists[0]?.exists) {
      return NextResponse.json({
        success: false,
        clients: [],
        error: "Clients table does not exist. Please run the database setup scripts.",
      })
    }

    // Get table structure
    const tableStructure = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position
    `

    const columnNames = tableStructure.map((col) => col.column_name)
    const hasNewStructure = columnNames.includes("name") && columnNames.includes("size")
    const hasOldStructure = columnNames.includes("contact_name") && columnNames.includes("client_type")

    // Fetch clients with flexible column selection
    let clients
    if (hasNewStructure) {
      // Use new 4-field structure
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
      const rawClients = await sql`
        SELECT * FROM clients 
        ORDER BY created_at DESC
      `

      // Map the data to expected format
      clients = rawClients.map((client) => ({
        id: client.id,
        name: client.name || client.company_name || client.contact_name || "Unnamed Client",
        size: client.size || client.client_type || "Unknown",
        address: client.address || "",
        status: client.status || "pending",
        created_at: client.created_at,
        updated_at: client.updated_at,
      }))
    }

    return NextResponse.json({
      success: true,
      clients,
      error: null,
    })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({
      success: false,
      clients: [],
      error: `Database connection failed: ${error.message}`,
    })
  }
}

export async function POST(request: Request) {
  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    return NextResponse.json({
      success: false,
      message: "Database URL not configured",
    })
  }

  try {
    const body = await request.json()
    const { name, size, address, status } = body

    // Validate required fields
    if (!name || !size || !status) {
      return NextResponse.json({
        success: false,
        message: "Name, size, and status are required",
      })
    }

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    // Check table structure
    const tableStructure = await sql`
      SELECT column_name, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'clients'
    `

    const columns = tableStructure.reduce((acc, col) => {
      acc[col.column_name] = col.is_nullable === "YES"
      return acc
    }, {})

    // Use the appropriate insertion strategy
    if (columns.name && columns.size) {
      // New structure exists
      await sql`
        INSERT INTO clients (
          name, 
          size, 
          address, 
          status
        ) VALUES (
          ${name}, 
          ${size}, 
          ${address || ""}, 
          ${status}
        )
      `
    } else {
      // Old structure - provide all required fields
      await sql`
        INSERT INTO clients (
          contact_name, 
          company_name, 
          email,
          phone,
          address, 
          client_type, 
          status
        ) VALUES (
          ${name}, 
          ${name}, 
          ${""}, 
          ${""}, 
          ${address || ""}, 
          ${size}, 
          ${status}
        )
      `
    }

    return NextResponse.json({
      success: true,
      message: "Client added successfully",
    })
  } catch (error) {
    console.error("Error adding client:", error)

    if (error.message.includes("not-null constraint")) {
      return NextResponse.json({
        success: false,
        message: "Database schema needs to be updated. Please run the migration script.",
      })
    }

    return NextResponse.json({
      success: false,
      message: `Failed to add client: ${error.message}`,
    })
  }
}
