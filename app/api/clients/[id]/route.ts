import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const clientId = Number.parseInt(params.id)

    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL_UNPOOLED

    if (!databaseUrl) {
      return NextResponse.json({ error: "Database connection not configured" }, { status: 500 })
    }

    const sql = neon(databaseUrl)

    const result = await sql`
      SELECT 
        id,
        company_name,
        contact_name,
        email,
        phone,
        client_type,
        status,
        notes,
        created_at
      FROM clients 
      WHERE id = ${clientId}
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error fetching client:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch client",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const clientId = Number.parseInt(params.id)

    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL_UNPOOLED

    if (!databaseUrl) {
      return NextResponse.json({ error: "Database connection not configured" }, { status: 500 })
    }

    const sql = neon(databaseUrl)

    const result = await sql`
      UPDATE clients 
      SET 
        company_name = ${body.company_name},
        contact_name = ${body.contact_name},
        email = ${body.email},
        phone = ${body.phone || ""},
        client_type = ${body.client_type || "Individual"},
        status = ${body.status || "Active"},
        notes = ${body.notes || ""}
      WHERE id = ${clientId}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    console.log("✅ Client updated successfully in Neon database:", result[0])

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error updating client:", error)
    return NextResponse.json(
      {
        error: "Failed to update client",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const clientId = Number.parseInt(params.id)

    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL_UNPOOLED

    if (!databaseUrl) {
      return NextResponse.json({ error: "Database connection not configured" }, { status: 500 })
    }

    const sql = neon(databaseUrl)

    const result = await sql`
      DELETE FROM clients 
      WHERE id = ${clientId}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    console.log("✅ Client deleted successfully from Neon database")

    return NextResponse.json({ message: "Client deleted successfully" })
  } catch (error) {
    console.error("Error deleting client:", error)
    return NextResponse.json(
      {
        error: "Failed to delete client",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
