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

    // Get table structure to understand what columns we have
    console.log("🔍 Checking table structure...")
    const tableStructure = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position
    `

    console.log("📊 Table structure:", tableStructure)

    // Check what columns are available
    const columnNames = tableStructure.map((col) => col.column_name)
    const hasNewStructure = columnNames.includes("name") && columnNames.includes("size")
    const hasOldStructure = columnNames.includes("contact_name") && columnNames.includes("client_type")

    console.log("Available columns:", columnNames)
    console.log("Has new structure (name, size):", hasNewStructure)
    console.log("Has old structure (contact_name, client_type):", hasOldStructure)

    // Fetch clients with flexible column selection
    let clients
    if (hasNewStructure) {
      // Use new 4-field structure
      console.log("📊 Using new 4-field structure")
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
      console.log("📊 Using old structure, mapping to new format")
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
      console.log("📊 Using fallback query")
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

    console.log(`✅ Successfully fetched ${clients.length} clients`)

    return NextResponse.json({
      success: true,
      clients,
      error: null,
      debug: {
        tableStructure: hasNewStructure ? "new" : hasOldStructure ? "old" : "mixed",
        columnCount: columnNames.length,
        availableColumns: columnNames,
      },
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

    // Check table structure first
    const tableStructure = await sql`
      SELECT column_name, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'clients'
    `

    const columns = tableStructure.reduce((acc, col) => {
      acc[col.column_name] = col.is_nullable === "YES"
      return acc
    }, {})

    console.log("Available columns:", Object.keys(columns))

    // Use the appropriate insertion strategy
    if (columns.name && columns.size) {
      // New structure exists
      console.log("Using new structure (name, size)")
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
      console.log("Using old structure compatibility")
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

    console.log("✅ Client added successfully")

    return NextResponse.json({
      success: true,
      message: "Client added successfully",
    })
  } catch (error) {
    console.error("❌ Error adding client:", error)

    // Provide helpful error messages
    if (error.message.includes("not-null constraint")) {
      return NextResponse.json({
        success: false,
        message: "Database schema needs to be updated. Please run the migration script.",
        debug: {
          error: error.message,
          suggestion: "Run script 07-fix-clients-table-structure.sql to update the database schema",
        },
      })
    }

    return NextResponse.json({
      success: false,
      message: `Failed to add client: ${error.message}`,
    })
  }
}
