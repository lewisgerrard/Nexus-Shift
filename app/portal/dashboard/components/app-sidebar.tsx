"use client"

import type * as React from "react"
import { Home, Users, LogOut } from "lucide-react"
import { logoutAction } from "../../actions"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const data = {
  navMain: [
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
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader className="bg-primary border-b border-primary/10">
        <div className="flex items-center gap-3 px-4 py-6">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image src="/nexus-shift-logo.png" alt="Nexus Shift" width={48} height={48} className="h-12 w-12" />
          </div>
          <div className="grid flex-1 text-left">
            <span className="text-lg font-bold text-white">Nexus Shift</span>
            <span className="text-sm text-secondary">Portal</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-primary">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {data.navMain.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`h-12 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-secondary text-primary font-semibold shadow-lg"
                          : "text-white hover:bg-white/10 hover:text-secondary"
                      }`}
                    >
                      <Link href={item.url} className="flex items-center gap-3 px-4">
                        <item.icon className="h-5 w-5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-primary border-t border-primary/10 p-4">
        <form action={logoutAction}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start h-12 text-white hover:bg-white/10 hover:text-secondary transition-all duration-200"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className="text-sm">Logout</span>
          </Button>
        </form>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
