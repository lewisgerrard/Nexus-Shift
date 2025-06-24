import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const clientId = Number.parseInt(params.id)

  if (isNaN(clientId)) {
    return NextResponse.json({
      success: false,
      error: "Invalid client ID",
    })
  }

  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    return NextResponse.json({
      success: false,
      error: "Database URL not configured",
    })
  }

  try {
    const sql = neon(databaseUrl)

    // Get table structure to understand what columns we have
    const tableStructure = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position
    `

    const columnNames = tableStructure.map((col) => col.column_name)
    const hasNewStructure = columnNames.includes("name") && columnNames.includes("size")
    const hasOldStructure = columnNames.includes("contact_name") && columnNames.includes("client_type")

    let client
    if (hasNewStructure) {
      // Use new 4-field structure
      const result = await sql`
        SELECT 
          id,
          name,
          size,
          address,
          status,
          created_at,
          updated_at
        FROM clients 
        WHERE id = ${clientId}
      `
      client = result[0]
    } else if (hasOldStructure) {
      // Use old structure but map to new format
      const result = await sql`
        SELECT 
          id,
          COALESCE(company_name, contact_name, 'Unnamed Client') as name,
          COALESCE(client_type, 'Unknown') as size,
          COALESCE(address, '') as address,
          COALESCE(status, 'pending') as status,
          created_at,
          updated_at
        FROM clients 
        WHERE id = ${clientId}
      `
      client = result[0]
    } else {
      // Fallback
      const result = await sql`
        SELECT * FROM clients 
        WHERE id = ${clientId}
      `
      const rawClient = result[0]

      if (rawClient) {
        client = {
          id: rawClient.id,
          name: rawClient.name || rawClient.company_name || rawClient.contact_name || "Unnamed Client",
          size: rawClient.size || rawClient.client_type || "Unknown",
          address: rawClient.address || "",
          status: rawClient.status || "pending",
          created_at: rawClient.created_at,
          updated_at: rawClient.updated_at,
        }
      }
    }

    if (!client) {
      return NextResponse.json({
        success: false,
        error: "Client not found",
      })
    }

    return NextResponse.json({
      success: true,
      client,
    })
  } catch (error) {
    console.error("Error fetching client:", error)
    return NextResponse.json({
      success: false,
      error: `Failed to fetch client: ${error.message}`,
    })
  }
}
