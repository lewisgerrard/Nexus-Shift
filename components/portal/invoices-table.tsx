"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, FileText } from "lucide-react"

interface Invoice {
  id: number
  invoice_number: string
  client_name: string
  amount: number
  status: string
  due_date: string
  created_at: string
}

export function InvoicesTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      const response = await fetch("/api/invoices")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setInvoices(data)
    } catch (error) {
      console.error("Error fetching invoices:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading invoices...</div>
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-primary">Invoices & Bills</CardTitle>
            <CardDescription className="text-primary/70">Track your income and expenses</CardDescription>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Invoice
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-primary">Invoice #</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Client</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Status</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Due Date</th>
                <th className="text-left py-3 px-4 font-medium text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary/60" />
                      <span className="font-medium text-primary">{invoice.invoice_number}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-primary">{invoice.client_name}</td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-green-600">£{invoice.amount.toLocaleString()}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="secondary"
                      className={
                        invoice.status === "paid"
                          ? "bg-green-100 text-green-800"
                          : invoice.status === "pending"
                            ? "bg-orange-100 text-orange-800"
                            : invoice.status === "overdue"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                      }
                    >
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-primary">{new Date(invoice.due_date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary/10"
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
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
