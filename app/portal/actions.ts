"use server"

import { cookies } from "next/headers"

// Updated demo authentication credentials
const DEMO_ADMIN = {
  email: "lewis.gerrard@outlook.com",
  password: "password",
  name: "Lewis Gerrard",
  id: 1,
}

export async function loginAction(prevState: any, formData: FormData) {
  // Add null check for formData
  if (!formData) {
    return { error: "Form data is required" }
  }

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  try {
    // Simple demo authentication with updated credentials
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const cookieStore = await cookies()
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
        },
      )
      return { success: true }
    } else {
      return { error: "Invalid credentials. Use lewis.gerrard@outlook.com / password" }
    }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "Login failed. Please try again." }
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("portal-session")
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("portal-session")

  if (!session) return null

  try {
    return JSON.parse(session.value)
  } catch {
    return null
  }
}
