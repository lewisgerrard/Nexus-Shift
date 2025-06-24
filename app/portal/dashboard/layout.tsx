import type React from "react"
import type { Metadata } from "next"
import { getSession } from "../actions"
import { redirect } from "next/navigation"
import { DashboardHeader } from "./components/dashboard-header"
import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "Dashboard - Nexus Shift Portal",
  description: "Manage your clients and projects with Nexus Shift",
  icons: {
    icon: "/nexus-shift-logo.png",
    shortcut: "/nexus-shift-logo.png",
    apple: "/nexus-shift-logo.png",
  },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/auth")
  }

  const user = {
    name: session.name || "Admin User",
    email: session.email || "admin@nexusshift.com",
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader user={user} />
        <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
