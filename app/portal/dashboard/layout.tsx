import type React from "react"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/auth")
  }

  return (
    <section>
      {/* Include shared UI here e.g. a header or side nav */}
      <nav>Dashboard Nav</nav>

      {children}
    </section>
  )
}

async function getSession() {
  // Simulate a session check.  Replace with your actual session logic.
  return { user: { name: "Test User" } }
}
