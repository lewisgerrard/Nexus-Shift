import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("=== API CLIENTS DEBUG START ===")

    // Check all possible environment variables
    const envVars = {
      DATABASE_URL: process.env.DATABASE_URL,
      POSTGRES_URL: process.env.POSTGRES_URL,
      NEON_DATABASE_URL: process.env.NEON_DATABASE_URL,
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
      DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    }

    console.log("Environment variables check:")
    Object.entries(envVars).forEach(([key, value]) => {
      console.log(`${key}: ${value ? "EXISTS" : "MISSING"}`)
      if (value) {
        console.log(`${key} starts with: ${value.substring(0, 20)}...`)
      }
    })

    // Try to find a working database URL
    const databaseUrl =
      envVars.DATABASE_URL ||
      envVars.POSTGRES_URL ||
      envVars.NEON_DATABASE_URL ||
      envVars.POSTGRES_PRISMA_URL ||
      envVars.DATABASE_URL_UNPOOLED ||
      envVars.POSTGRES_URL_NON_POOLING

    if (!databaseUrl) {
      console.log("❌ No database URL found in any environment variable")
      return NextResponse.json({
        success: false,
        clients: [],
        error: "No database URL configured - check environment variables",
        debug: { envVars: Object.keys(envVars).filter((key) => envVars[key]) },
      })
    }

    console.log("✅ Using database URL:", databaseUrl.substring(0, 30) + "...")

    // Try to import and use Neon
    console.log("Importing @neondatabase/serverless...")
    const { neon } = await import("@neondatabase/serverless")
    console.log("✅ Successfully imported neon")

    const sql = neon(databaseUrl)
    console.log("✅ Created SQL client")

    // Test basic connection
    console.log("Testing basic database connection...")
    const connectionTest = await sql`SELECT NOW() as current_time, version() as db_version`
    console.log("✅ Database connection successful:", connectionTest[0])

    // Check if the table exists
    console.log("Checking if clients table exists...")
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      ) as table_exists;
    `

    console.log("Table exists result:", tableCheck[0])

    if (!tableCheck[0]?.table_exists) {
      console.log("❌ Clients table does not exist")

      // List all tables to see what's available
      const allTables = await sql`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name;
      `
      console.log("Available tables:", allTables)

      return NextResponse.json({
        success: false,
        clients: [],
        error: "Clients table does not exist",
        debug: {
          availableTables: allTables.map((t) => t.table_name),
          connectionWorking: true,
        },
      })
    }

    // Get table structure
    console.log("Getting table structure...")
    const tableStructure = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position;
    `
    console.log("Table structure:", tableStructure)

    // Count records
    console.log("Counting records...")
    const recordCount = await sql`SELECT COUNT(*) as count FROM clients`
    console.log("Record count:", recordCount[0])

    // Try to get clients
    console.log("Fetching clients...")
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

    console.log(`✅ Successfully fetched ${clients.length} clients from database`)
    if (clients.length > 0) {
      console.log("Sample client data:", {
        id: clients[0].id,
        contact_name: clients[0].contact_name,
        company_name: clients[0].company_name,
        client_type: clients[0].client_type,
        status: clients[0].status,
      })
    } else {
      console.log("⚠️ No clients found in database")
    }

    console.log("=== API CLIENTS DEBUG END ===")

    return NextResponse.json({
      success: true,
      clients,
      error: null,
      debug: {
        recordCount: recordCount[0].count,
        tableStructure: tableStructure.length,
        connectionWorking: true,
      },
    })
  } catch (error) {
    console.error("❌ API Error:", error)
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack?.split("\n").slice(0, 5),
    })

    return NextResponse.json({
      success: false,
      clients: [],
      error: error.message,
      debug: {
        errorType: error.name,
        connectionWorking: false,
      },
    })
  }
}
