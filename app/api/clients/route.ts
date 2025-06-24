import { NextResponse } from "next/server"

// Get database URL with comprehensive fallback priority
function getDatabaseUrl() {
  const possibleUrls = [
    process.env.DATABASE_URL,
    process.env.POSTGRES_URL,
    process.env.NEON_DATABASE_URL,
    process.env.POSTGRES_PRISMA_URL,
    process.env.DATABASE_URL_UNPOOLED,
    process.env.POSTGRES_URL_NON_POOLING,
    process.env.POSTGRES_URL_NO_SSL,
    process.env.NEON_PROJECT_ID ? `postgresql://user:pass@host/db` : null, // placeholder if project ID exists
  ]

  // Log all environment variables for debugging
  console.log("🔍 Environment Variables Check:")
  console.log("DATABASE_URL:", process.env.DATABASE_URL ? "EXISTS" : "MISSING")
  console.log("POSTGRES_URL:", process.env.POSTGRES_URL ? "EXISTS" : "MISSING")
  console.log("NEON_DATABASE_URL:", process.env.NEON_DATABASE_URL ? "EXISTS" : "MISSING")
  console.log("POSTGRES_PRISMA_URL:", process.env.POSTGRES_PRISMA_URL ? "EXISTS" : "MISSING")
  console.log("DATABASE_URL_UNPOOLED:", process.env.DATABASE_URL_UNPOOLED ? "EXISTS" : "MISSING")
  console.log("POSTGRES_URL_NON_POOLING:", process.env.POSTGRES_URL_NON_POOLING ? "EXISTS" : "MISSING")
  console.log("NEON_PROJECT_ID:", process.env.NEON_PROJECT_ID ? "EXISTS" : "MISSING")

  // Return the first non-null URL
  for (const url of possibleUrls) {
    if (url && url !== "postgresql://user:pass@host/db") {
      console.log("✅ Using database URL:", url.substring(0, 30) + "...")
      return url
    }
  }

  return null
}

export async function GET() {
  console.log("🚀 API /clients GET request started")

  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    console.error("❌ No database URL found in any environment variable")
    return NextResponse.json({
      success: false,
      clients: [],
      error: "Database URL not configured. Please check your environment variables in Vercel dashboard.",
      debug: {
        availableEnvVars: Object.keys(process.env).filter(
          (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON"),
        ),
      },
    })
  }

  try {
    console.log("📦 Importing @neondatabase/serverless...")
    const { neon } = await import("@neondatabase/serverless")
    console.log("✅ Successfully imported neon")

    const sql = neon(databaseUrl)
    console.log("🔗 Created SQL connection")

    // Test connection first
    console.log("🧪 Testing database connection...")
    const connectionTest = await sql`SELECT 1 as test`
    console.log("✅ Database connection successful:", connectionTest)

    // Check if clients table exists
    console.log("🔍 Checking if clients table exists...")
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      ) as exists
    `

    if (!tableExists[0]?.exists) {
      console.log("❌ Clients table does not exist")
      return NextResponse.json({
        success: false,
        clients: [],
        error: "Clients table does not exist. Please run the database setup scripts.",
      })
    }

    console.log("✅ Clients table exists")

    // Fetch clients
    console.log("📊 Fetching clients...")
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

    console.log(`✅ Successfully fetched ${clients.length} clients`)

    return NextResponse.json({
      success: true,
      clients,
      error: null,
    })
  } catch (error) {
    console.error("❌ Database error:", error)
    return NextResponse.json({
      success: false,
      clients: [],
      error: `Database connection failed: ${error.message}`,
    })
  }
}

export async function POST(request: Request) {
  console.log("🚀 API /clients POST request started")

  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    console.error("❌ No database URL found for POST request")
    return NextResponse.json({
      success: false,
      message: "Database URL not configured",
    })
  }

  try {
    const body = await request.json()
    console.log("📝 Adding new client:", body)

    const { contactName, companyName, email, phone, address, clientType, status, notes } = body

    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    await sql`
      INSERT INTO clients (
        contact_name, 
        company_name, 
        email, 
        phone, 
        address, 
        client_type, 
        status, 
        notes
      ) VALUES (
        ${contactName}, 
        ${companyName}, 
        ${email}, 
        ${phone || null}, 
        ${address || null}, 
        ${clientType}, 
        ${status || "active"}, 
        ${notes || null}
      )
    `

    console.log("✅ Client added successfully")

    return NextResponse.json({
      success: true,
      message: "Client added successfully",
    })
  } catch (error) {
    console.error("❌ Error adding client:", error)
    return NextResponse.json({
      success: false,
      message: `Failed to add client: ${error.message}`,
    })
  }
}
