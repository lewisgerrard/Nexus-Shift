"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, FileText, TrendingUp } from "lucide-react"

interface Stats {
  totalClients: number
  revenueMTD: number
  unpaidInvoices: number
  totalRevenue: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalClients: 0,
    revenueMTD: 0,
    unpaidInvoices: 0,
    totalRevenue: 0,
  })

  useEffect(() => {
    // In a real app, this would fetch from your API
    setStats({
      totalClients: 5,
      revenueMTD: 4800,
      unpaidInvoices: 2,
      totalRevenue: 12300,
    })
  }, [])

  const statCards = [
    {
      title: "Total Clients",
      value: stats.totalClients.toString(),
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Revenue MTD",
      value: `£${stats.revenueMTD.toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Unpaid Invoices",
      value: stats.unpaidInvoices.toString(),
      icon: FileText,
      color: "text-orange-600",
    },
    {
      title: "Total Revenue",
      value: `£${stats.totalRevenue.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-secondary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
