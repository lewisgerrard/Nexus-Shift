import { NextResponse } from "next/server"

export async function GET() {
  // Get all environment variables
  const allEnvVars = Object.keys(process.env)

  // Filter for database-related variables
  const databaseRelatedVars = allEnvVars.filter(
    (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON") || key.includes("DB"),
  )

  // Create detailed info about each database-related variable
  const envVarDetails = {}
  databaseRelatedVars.forEach((key) => {
    const value = process.env[key]
    envVarDetails[key] = {
      exists: !!value,
      length: value ? value.length : 0,
      preview: value ? `${value.substring(0, 30)}...` : null,
      isValidPostgresUrl: value ? value.startsWith("postgresql://") || value.startsWith("postgres://") : false,
    }
  })

  // Check for the specific variables we're looking for
  const targetVars = [
    "DATABASE_URL",
    "POSTGRES_URL",
    "NEON_DATABASE_URL",
    "POSTGRES_PRISMA_URL",
    "DATABASE_URL_UNPOOLED",
    "POSTGRES_URL_NON_POOLING",
  ]

  const targetVarStatus = {}
  targetVars.forEach((varName) => {
    const value = process.env[varName]
    targetVarStatus[varName] = {
      exists: !!value,
      length: value ? value.length : 0,
      preview: value ? `${value.substring(0, 30)}...` : null,
      isValidPostgresUrl: value ? value.startsWith("postgresql://") || value.startsWith("postgres://") : false,
    }
  })

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    totalEnvVars: allEnvVars.length,
    databaseRelatedVars: databaseRelatedVars.length,
    databaseVarNames: databaseRelatedVars,
    envVarDetails,
    targetVarStatus,
    recommendations: {
      hasAnyDatabaseUrl: Object.values(targetVarStatus).some((status) => status.exists),
      validPostgresUrls: Object.entries(targetVarStatus)
        .filter(([_, status]) => status.exists && status.isValidPostgresUrl)
        .map(([name, _]) => name),
      nextSteps: Object.values(targetVarStatus).some((status) => status.exists)
        ? "Environment variables found - check if they're valid PostgreSQL URLs"
        : "No database environment variables found - add DATABASE_URL to Vercel",
    },
  })
}
