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
      hasCorrectHost: value ? value.includes("ep-muddy-math-abgrfi5g") : false,
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
      preview: value ? `${value.substring(0, 50)}...` : null,
      isValidPostgresUrl: value ? value.startsWith("postgresql://") || value.startsWith("postgres://") : false,
      hasCorrectHost: value ? value.includes("ep-muddy-math-abgrfi5g") : false,
      fullValue: value || null, // Include full value for debugging
    }
  })

  // Check if DATABASE_URL specifically exists and what it contains
  const databaseUrl = process.env.DATABASE_URL
  const databaseUrlAnalysis = {
    exists: !!databaseUrl,
    value: databaseUrl || null,
    length: databaseUrl ? databaseUrl.length : 0,
    isValid: databaseUrl ? databaseUrl.startsWith("postgresql://") || databaseUrl.startsWith("postgres://") : false,
    hasCorrectHost: databaseUrl ? databaseUrl.includes("ep-muddy-math-abgrfi5g") : false,
    components: databaseUrl
      ? {
          protocol: databaseUrl.split("://")[0],
          hasCredentials: databaseUrl.includes("@"),
          hasHost: databaseUrl.includes("ep-muddy-math-abgrfi5g"),
          hasDatabase: databaseUrl.includes("/neondb"),
          hasSSL: databaseUrl.includes("sslmode=require"),
        }
      : null,
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV,
    totalEnvVars: allEnvVars.length,
    databaseRelatedVars: databaseRelatedVars.length,
    databaseVarNames: databaseRelatedVars,
    envVarDetails,
    targetVarStatus,
    databaseUrlAnalysis,
    recommendations: {
      hasAnyDatabaseUrl: Object.values(targetVarStatus).some((status) => status.exists),
      validPostgresUrls: Object.entries(targetVarStatus)
        .filter(([_, status]) => status.exists && status.isValidPostgresUrl)
        .map(([name, _]) => name),
      nextSteps: databaseUrl
        ? "DATABASE_URL exists - checking if it's valid and accessible"
        : "DATABASE_URL not found - check Vercel environment variables and redeploy",
    },
  })
}
