"use client"

import { Button } from "@/components/ui/button"
import { LogOut, Users } from "lucide-react"
import { logoutAction } from "../../actions"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

interface DashboardHeaderProps {
  user: {
    name: string
    email: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />

      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{user.email}</span>
          </div>
          <form action={logoutAction}>
            <Button type="submit" variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
