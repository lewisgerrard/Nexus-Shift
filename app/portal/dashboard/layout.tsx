import type React from "react"
import type { Metadata } from "next"
import { getSession } from "../actions"
import { redirect } from "next/navigation"
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

  return (
    <div className="min-h-screen bg-white">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
