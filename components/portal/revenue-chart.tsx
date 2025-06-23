"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 2500, expenses: 800 },
  { month: "Feb", revenue: 4800, expenses: 1200 },
  { month: "Mar", revenue: 3200, expenses: 900 },
  { month: "Apr", revenue: 5100, expenses: 1100 },
  { month: "May", revenue: 3800, expenses: 950 },
  { month: "Jun", revenue: 4200, expenses: 1050 },
]

export function RevenueChart() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">Revenue vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value, name) => [`£${value}`, name === "revenue" ? "Revenue" : "Expenses"]} />
            <Bar dataKey="revenue" fill="hsl(var(--secondary))" />
            <Bar dataKey="expenses" fill="hsl(var(--muted-foreground))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
