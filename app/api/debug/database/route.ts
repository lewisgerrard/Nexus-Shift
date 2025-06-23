import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "Debug API is working",
    timestamp: new Date().toISOString(),
    hasDatabase: process.env.DATABASE_URL ? true : false,
    hasPostgres: process.env.POSTGRES_URL ? true : false,
    nodeEnv: process.env.NODE_ENV,
  })
}
