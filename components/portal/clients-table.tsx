"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Edit, Trash2 } from "lucide-react"

interface Client {
  id: number
  company_name: string
  contact_name: string
  email: string
  phone: string
  client_type: string
  status: string
  notes: string
  created_at?: string
}

export function ClientsTable() {
  const router = useRouter()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/clients")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setClients(data)
    } catch (error) {
      console.error("Error fetching clients:", error)
      setError("Failed to load clients from database")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClient = async (clientId: number) => {
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setClients(clients.filter((c) => c.id !== clientId))
      } else {
        console.error("Failed to delete client")
      }
    } catch (error) {
      console.error("Error deleting client:", error)
    }
  }

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary mx-auto"></div>
            <p className="mt-4 text-primary/70">Loading clients from database...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
            <Button onClick={fetchClients} className="mt-4 bg-secondary hover:bg-secondary/90 text-primary">
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-primary">Client Database</CardTitle>
            <CardDescription className="text-primary/70">
              {clients.length === 0
                ? "No clients found"
                : `Managing ${clients.length} client${clients.length !== 1 ? "s" : ""}`}
            </CardDescription>
          </div>
          <Button
            onClick={() => router.push("/admin/portal/clients/add")}
            className="bg-secondary hover:bg-secondary/90 text-primary"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {clients.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-primary/70 mb-4">No clients in database yet</p>
            <Button
              onClick={() => router.push("/admin/portal/clients/add")}
              className="bg-secondary hover:bg-secondary/90 text-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Client
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-primary">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">Contact</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-primary">{client.company_name}</p>
                        <p className="text-sm text-primary/70">{client.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-primary">{client.contact_name}</p>
                        <p className="text-sm text-primary/70">{client.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {client.client_type}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={client.status === "active" ? "default" : "secondary"}
                        className={client.status === "active" ? "bg-green-100 text-green-800" : ""}
                      >
                        {client.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/portal/clients/edit/${client.id}`)}
                          className="border-secondary text-secondary hover:bg-secondary/10"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Client</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {client.company_name}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteClient(client.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
