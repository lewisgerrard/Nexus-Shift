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

    // Get client using the correct structure
    const result = await sql`
      SELECT 
        id,
        name,
        size,
        COALESCE(address, '') as address,
        status,
        created_at,
        updated_at
      FROM clients 
      WHERE id = ${clientId}
    `

    const client = result[0]

    if (!client) {
      return NextResponse.json({
        success: false,
        error: "Client not found",
      })
    }

    console.log("API returning client:", client)

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
