"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Mail, Phone, Trash2 } from "lucide-react"
import { updateClientStatus, deleteClient } from "../actions"
import { useTransition } from "react"
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
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleRowClick = (clientId: number, event: React.MouseEvent) => {
    console.log("Row clicked! Client ID:", clientId)
    alert(`Clicked on client ${clientId}`) // Test alert

    try {
      router.push(`/portal/dashboard/clients/${clientId}`)
      console.log("Navigation attempted to:", `/portal/dashboard/clients/${clientId}`)
    } catch (error) {
      console.error("Navigation error:", error)
    }
  }

  const handleStatusChange = (clientId: number, newStatus: string) => {
    startTransition(() => {
      updateClientStatus(clientId, newStatus)
    })
  }

  const handleDelete = (clientId: number) => {
    if (confirm("Are you sure you want to delete this client?")) {
      startTransition(() => {
        deleteClient(clientId)
      })
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
            <th className="text-left py-3 px-4 font-medium text-primary">Contact</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Company</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Type</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Status</th>
            <th className="text-left py-3 px-4 font-medium text-primary">Contact Info</th>
            <th className="text-right py-3 px-4 font-medium text-primary">Actions</th>
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
                <div>
                  <div className="font-medium text-primary">{client.contact_name}</div>
                  {client.notes && <div className="text-sm text-gray-500 mt-1">{client.notes}</div>}
                </div>
              </td>
              <td className="py-4 px-4 text-gray-900">{client.company_name}</td>
              <td className="py-4 px-4">
                <Badge variant="outline" className="border-secondary text-secondary">
                  {client.client_type}
                </Badge>
              </td>
              <td className="py-4 px-4">
                <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
              </td>
              <td className="py-4 px-4">
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-3 w-3 mr-2" />
                    {client.email}
                  </div>
                  {client.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-3 w-3 mr-2" />
                      {client.phone}
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" disabled={isPending}>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleStatusChange(client.id, "active")}>
                      Mark as Active
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStatusChange(client.id, "pending")}>
                      Mark as Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStatusChange(client.id, "inactive")}>
                      Mark as Inactive
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(client.id)} className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
