"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface Transaction {
  id: string
  amount: number
  merchant: string
  date: string
  type: "income" | "expense"
  category: string
}

export function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setTransactions([
      {
        id: "1",
        amount: 2500,
        merchant: "Chester Referees Payment",
        date: "2024-01-15",
        type: "income",
        category: "Client Payment",
      },
      {
        id: "2",
        amount: -89.99,
        merchant: "Adobe Creative Cloud",
        date: "2024-01-14",
        type: "expense",
        category: "Software",
      },
      {
        id: "3",
        amount: 1800,
        merchant: "Diva Fitness Payment",
        date: "2024-01-13",
        type: "income",
        category: "Client Payment",
      },
      { id: "4", amount: -150, merchant: "AWS Services", date: "2024-01-12", type: "expense", category: "Hosting" },
      {
        id: "5",
        amount: 3200,
        merchant: "Manchester Builders Payment",
        date: "2024-01-11",
        type: "income",
        category: "Client Payment",
      },
      { id: "6", amount: -45, merchant: "Office Supplies", date: "2024-01-10", type: "expense", category: "Office" },
      { id: "7", amount: -200, merchant: "Google Ads", date: "2024-01-09", type: "expense", category: "Marketing" },
      {
        id: "8",
        amount: 2800,
        merchant: "Yorkshire Construction",
        date: "2024-01-08",
        type: "income",
        category: "Client Payment",
      },
      { id: "9", amount: -75, merchant: "Domain Renewal", date: "2024-01-07", type: "expense", category: "Software" },
      { id: "10", amount: 1500, merchant: "Consultation Fee", date: "2024-01-06", type: "income", category: "Service" },
    ])
  }, [])

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    transaction.type === "income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-primary">{transaction.merchant}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "income" ? "+" : ""}£{Math.abs(transaction.amount).toLocaleString()}
                </p>
                <Badge variant="outline" className="text-xs">
                  {transaction.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
