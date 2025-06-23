"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Software", value: 450, color: "#0088FE" },
  { name: "Marketing", value: 200, color: "#00C49F" },
  { name: "Office", value: 150, color: "#FFBB28" },
  { name: "Equipment", value: 300, color: "#FF8042" },
]

export function SpendingChart() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`£${value}`, "Amount"]} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
