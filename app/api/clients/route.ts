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
  ]

  // Log all environment variables for debugging
  console.log("🔍 Environment Variables Check:")
  possibleUrls.forEach((url, index) => {
    const varNames = [
      "DATABASE_URL",
      "POSTGRES_URL",
      "NEON_DATABASE_URL",
      "POSTGRES_PRISMA_URL",
      "DATABASE_URL_UNPOOLED",
      "POSTGRES_URL_NON_POOLING",
      "POSTGRES_URL_NO_SSL",
    ]
    console.log(
      `${varNames[index]}:`,
      url ? `EXISTS (${url.length} chars, starts with: ${url.substring(0, 20)}...)` : "MISSING",
    )
  })

  // Return the first non-null URL
  for (let i = 0; i < possibleUrls.length; i++) {
    const url = possibleUrls[i]
    if (url) {
      console.log(
        `✅ Using database URL from ${["DATABASE_URL", "POSTGRES_URL", "NEON_DATABASE_URL", "POSTGRES_PRISMA_URL", "DATABASE_URL_UNPOOLED", "POSTGRES_URL_NON_POOLING", "POSTGRES_URL_NO_SSL"][i]}:`,
        url.substring(0, 30) + "...",
      )
      return url
    }
  }

  return null
}

export async function GET() {
  console.log("🚀 API /clients GET request started")
  console.log("🌍 Environment:", process.env.NODE_ENV)
  console.log("📊 Total environment variables:", Object.keys(process.env).length)

  const databaseUrl = getDatabaseUrl()

  if (!databaseUrl) {
    console.error("❌ No database URL found in any environment variable")

    // Get detailed environment info for debugging
    const allEnvVars = Object.keys(process.env)
    const databaseRelatedVars = allEnvVars.filter(
      (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON"),
    )

    return NextResponse.json({
      success: false,
      clients: [],
      error: "No database URL found in any environment variable",
      debug: {
        totalEnvVars: allEnvVars.length,
        databaseRelatedVars,
        checkedVariables: [
          "DATABASE_URL",
          "POSTGRES_URL",
          "NEON_DATABASE_URL",
          "POSTGRES_PRISMA_URL",
          "DATABASE_URL_UNPOOLED",
          "POSTGRES_URL_NON_POOLING",
        ],
        suggestion: "Add DATABASE_URL to Vercel environment variables and redeploy",
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
    const connectionTest = await sql`SELECT 1 as test, NOW() as timestamp`
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
        debug: {
          connectionWorking: true,
          tableExists: false,
          suggestion: "Run the database setup scripts to create the clients table",
        },
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
      debug: {
        errorType: error.name,
        errorMessage: error.message,
        suggestion: "Check if your DATABASE_URL is correct and your Neon database is active",
      },
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
