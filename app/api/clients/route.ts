import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if database environment variables are available
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL

    console.log("API: Database URL exists:", !!databaseUrl)

    if (!databaseUrl) {
      console.log("API: No database URL found")
      return NextResponse.json({
        success: false,
        clients: [],
        error: "No database URL configured",
      })
    }

    // Try to import and use Neon
    const { neon } = await import("@neondatabase/serverless")
    const sql = neon(databaseUrl)

    console.log("API: Attempting to connect to database...")

    // First, let's check if the table exists
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'clients'
      );
    `

    console.log("API: Table exists check:", tableCheck)

    if (!tableCheck[0]?.exists) {
      console.log("API: Clients table does not exist")
      return NextResponse.json({
        success: false,
        clients: [],
        error: "Clients table does not exist",
      })
    }

    // Get table structure
    const tableStructure = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'clients' 
      ORDER BY ordinal_position;
    `

    console.log("API: Table structure:", tableStructure)

    // Try to get clients
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

    console.log(`API: Successfully fetched ${clients.length} clients from database`)
    if (clients.length > 0) {
      console.log("API: Sample client data:", clients[0])
    }

    return NextResponse.json({
      success: true,
      clients,
      error: null,
    })
  } catch (error) {
    console.error("API: Database connection failed:", error)
    return NextResponse.json({
      success: false,
      clients: [],
      error: error.message,
    })
  }
}
