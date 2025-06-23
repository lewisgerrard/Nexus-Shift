import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    // Debug: Log all environment variables that might contain database info
    console.log("Environment check:", {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL: process.env.DATABASE_URL ? "EXISTS" : "MISSING",
      POSTGRES_URL: process.env.POSTGRES_URL ? "EXISTS" : "MISSING",
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL ? "EXISTS" : "MISSING",
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING ? "EXISTS" : "MISSING",
      DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED ? "EXISTS" : "MISSING",
      NEON_PROJECT_ID: process.env.NEON_PROJECT_ID ? "EXISTS" : "MISSING",
      // Log first few characters of any found URLs for debugging
      DATABASE_URL_PREVIEW: process.env.DATABASE_URL?.substring(0, 30) + "...",
      POSTGRES_URL_PREVIEW: process.env.POSTGRES_URL?.substring(0, 30) + "...",
    })

    // Try to get database URL from any available environment variable
    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL_UNPOOLED

    if (!databaseUrl) {
      console.error("❌ No database URL found in any environment variable")
      return NextResponse.json(
        {
          error: "Database connection not configured",
          debug: {
            message: "No DATABASE_URL environment variable found",
            availableEnvVars: Object.keys(process.env).filter(
              (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON"),
            ),
          },
        },
        { status: 500 },
      )
    }

    console.log("✅ Found database URL, attempting connection...")
    console.log("Connection string preview:", databaseUrl.substring(0, 50) + "...")

    // Initialize Neon connection
    const sql = neon(databaseUrl)

    // Test connection with a simple query first
    console.log("Testing database connection...")
    await sql`SELECT 1 as test`
    console.log("✅ Database connection successful")

    // Query clients table
    console.log("Querying clients table...")
    const clients = await sql`
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
      ORDER BY created_at DESC
    `

    console.log(`✅ Successfully retrieved ${clients.length} clients from Neon database`)

    return NextResponse.json(clients)
  } catch (error) {
    console.error("❌ Database error:", error)

    // Provide detailed error information
    return NextResponse.json(
      {
        error: "Database connection failed",
        details: error.message,
        type: error.constructor.name,
        debug: {
          message: "Failed to connect to Neon database",
          projectId: "misty-mountain-18028320",
          suggestion: "Check if DATABASE_URL environment variable is properly set",
        },
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.company_name || !body.contact_name || !body.email) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          required: ["company_name", "contact_name", "email"],
        },
        { status: 400 },
      )
    }

    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.DATABASE_URL_UNPOOLED

    if (!databaseUrl) {
      return NextResponse.json(
        {
          error: "Database connection not configured",
        },
        { status: 500 },
      )
    }

    const sql = neon(databaseUrl)

    console.log("Adding new client to Neon database...")

    const result = await sql`
      INSERT INTO clients (company_name, contact_name, email, phone, client_type, status, notes)
      VALUES (
        ${body.company_name}, 
        ${body.contact_name}, 
        ${body.email}, 
        ${body.phone || ""}, 
        ${body.client_type || "Individual"}, 
        ${body.status || "Active"}, 
        ${body.notes || ""}
      )
      RETURNING *
    `

    console.log("✅ Client added successfully to Neon database:", result[0])

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("❌ Error creating client:", error)
    return NextResponse.json(
      {
        error: "Failed to create client",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
