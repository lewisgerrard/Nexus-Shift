"use client"

import type * as React from "react"
import { BarChart3, Users, Settings, Home, FileText, Calendar, Mail } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

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
    {
      title: "Projects",
      url: "/portal/dashboard/projects",
      icon: FileText,
    },
    {
      title: "Analytics",
      url: "/portal/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Calendar",
      url: "/portal/dashboard/calendar",
      icon: Calendar,
    },
    {
      title: "Messages",
      url: "/portal/dashboard/messages",
      icon: Mail,
    },
    {
      title: "Settings",
      url: "/portal/dashboard/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <Image src="/nexus-shift-logo.png" alt="Nexus Shift" width={32} height={32} className="h-8 w-8" />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Nexus Shift</span>
            <span className="truncate text-xs text-muted-foreground">Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 text-xs text-muted-foreground">© 2024 Nexus Shift</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
