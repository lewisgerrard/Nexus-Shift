"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react"

interface Transaction {
  id: number
  amount: number
  merchant_name: string
  date: string
  category: string
  subcategory: string
  company_name?: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  useEffect(() => {
    fetchTransactions()
  }, [])

  useEffect(() => {
    filterTransactions()
  }, [transactions, searchTerm, categoryFilter])

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/api/transactions")
      if (!response.ok) {
        throw new Error("Failed to fetch transactions")
      }
      const data = await response.json()
      setTransactions(data)
    } catch (error) {
      console.error("Error fetching transactions:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterTransactions = () => {
    let filtered = transactions

    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.merchant_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (t.company_name && t.company_name.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((t) => t.category.toLowerCase() === categoryFilter.toLowerCase())
    }

    setFilteredTransactions(filtered)
  }

  if (loading) {
    return <div className="text-center py-8">Loading transactions...</div>
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">Bank Transactions</CardTitle>
        <CardDescription className="text-primary/70">View and filter your bank transaction history</CardDescription>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40 w-4 h-4" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-primary/20 focus:border-secondary"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-48 border-primary/20 focus:border-secondary">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-primary">Date</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Merchant</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Category</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Client</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-primary">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${transaction.amount > 0 ? "bg-green-100" : "bg-red-100"}`}>
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <p className="font-medium text-primary">{transaction.merchant_name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                      {transaction.amount > 0 ? "+" : ""}£{Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {transaction.category}
                    </Badge>
                    {transaction.subcategory && (
                      <p className="text-xs text-primary/70 mt-1">{transaction.subcategory}</p>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {transaction.company_name ? (
                      <Badge className="bg-primary/10 text-primary">{transaction.company_name}</Badge>
                    ) : (
                      <span className="text-primary/40">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
