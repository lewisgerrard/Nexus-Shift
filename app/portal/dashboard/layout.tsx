"use client"

import type React from "react"
import { Home, Users, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const navigation = [
  {
    title: "Dashboard",
    url: "/portal/dashboard",
    icon: Home,
  },
  {
    title: "Clients",
    url: "/portal/dashboard/clients",
    icon: Users,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div className="w-64 bg-primary flex flex-col shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary shadow-sm">
              <span className="text-base font-bold">NS</span>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Nexus Shift</h2>
              <p className="text-sm text-white/70">Client Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.url
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-secondary text-primary shadow-sm"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-secondary text-primary text-sm font-semibold">LG</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Lewis Gerrard</p>
              <p className="text-xs text-white/60">Administrator</p>
            </div>
          </div>
          <Link
            href="/portal"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-primary border-b flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-white">
              {navigation.find((item) => item.url === pathname)?.title || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/90 font-medium">Welcome back, Lewis</span>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-secondary text-primary text-sm font-semibold">LG</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
