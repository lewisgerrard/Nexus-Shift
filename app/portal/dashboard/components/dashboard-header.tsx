"use client"

import { Button } from "@/components/ui/button"
import { LogOut, Users } from "lucide-react"
import { logoutAction } from "../../actions"
import Image from "next/image"

interface DashboardHeaderProps {
  user: {
    name: string
    email: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="bg-primary shadow-lg border-b-4 border-secondary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/nexus-shift-logo.png" alt="Nexus Shift" width={40} height={40} className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-white">Nexus Shift Portal</h1>
              <p className="text-secondary text-sm">Welcome back, {user.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-white/80">
              <Users className="h-4 w-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <form action={logoutAction}>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
