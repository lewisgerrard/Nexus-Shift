import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

const DEMO_ADMIN = {
  email: "lewis.gerrard@outlook.com",
  password: "password",
  name: "Lewis Gerrard",
  id: 1,
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Simple demo authentication
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const cookieStore = await cookies()

      // Set the session cookie
      cookieStore.set(
        "portal-session",
        JSON.stringify({
          userId: DEMO_ADMIN.id,
          email: DEMO_ADMIN.email,
          name: DEMO_ADMIN.name,
        }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: "/",
        },
      )

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: "Invalid credentials. Use lewis.gerrard@outlook.com / password" },
        { status: 401 },
      )
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 })
  }
}
