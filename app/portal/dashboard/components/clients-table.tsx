"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface Client {
  id: number
  contact_name: string
  company_name: string
  email: string
  phone: string
  address: string
  client_type: string
  status: string
  notes: string
  created_at: string
}

interface ClientsTableProps {
  clients: Client[]
}

export function ClientsTable({ clients }: ClientsTableProps) {
  console.log("ClientsTable received clients:", clients)
  const router = useRouter()

  const handleRowClick = (clientId: number, event: React.MouseEvent) => {
    console.log("Row clicked! Client ID:", clientId)

    try {
      router.push(`/portal/dashboard/clients/${clientId}`)
      console.log("Navigation attempted to:", `/portal/dashboard/clients/${clientId}`)
    } catch (error) {
      console.error("Navigation error:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No clients found. Add your first client to get started.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-primary">Name</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Type</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={(e) => handleRowClick(client.id, e)}
              style={{ cursor: "pointer" }}
            >
              <td className="py-4 px-4">
                <div className="font-medium text-primary">{client.company_name || client.contact_name}</div>
              </td>
              <td className="py-4 px-4">
                <Badge variant="outline" className="border-secondary text-secondary">
                  {client.client_type}
                </Badge>
              </td>
              <td className="py-4 px-4">
                <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
