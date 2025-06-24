"use client"

import { useState, useEffect } from "react"
import { Plus, Users, UserCheck, Clock, Building, AlertCircle, RefreshCw, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AddClientDialog } from "../components/add-client-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

function getStatusColor(status: string) {
  switch (status?.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    case "inactive":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

function getTypeColor(type: string) {
  switch (type?.toLowerCase()) {
    case "enterprise":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "startup":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    case "smb":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "agency":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

export default function ClientsPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [debugInfo, setDebugInfo] = useState(null)

  const fetchClients = async () => {
    setLoading(true)
    try {
      console.log("🔄 Fetching clients from API...")
      const response = await fetch("/api/clients", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })

      console.log("📡 API Response status:", response.status)
      const data = await response.json()
      console.log("📊 API Response data:", data)

      if (data.success) {
        setClients(data.clients)
        setError(null)
        setDebugInfo(null)
        console.log("✅ Successfully loaded clients:", data.clients.length)
      } else {
        setError(data.error)
        setDebugInfo(data.debug)
        setClients([])
        console.log("❌ API returned error:", data.error)
      }
    } catch (err) {
      console.error("❌ Fetch error:", err)
      setError(`Network error: ${err.message}`)
      setClients([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Clients</h1>
          <p className="text-muted-foreground mt-2">Testing database connection...</p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <div className="flex items-center">
              <RefreshCw className="h-4 w-4 animate-spin text-blue-600 mr-2" />
              <p className="text-sm text-blue-800">Connecting to Neon database...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    // Check if it's a table missing error (connection works but no tables)
    const isTableMissing = error.includes("does not exist") || debugInfo?.tableExists === false

    if (isTableMissing) {
      return (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-primary">Clients</h1>
            <div className="mt-4 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">✅ Database Connected - Setup Required</h3>
                  <p className="text-sm text-yellow-700 mb-4">
                    Great! Your database connection is working, but the clients table doesn't exist yet. Let's set up
                    your database tables.
                  </p>

                  <div className="bg-white p-4 rounded border border-yellow-200 mb-4">
                    <h4 className="font-medium text-yellow-800 mb-3">🚀 Database Setup Required:</h4>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                        <p className="text-sm font-medium text-blue-800 mb-2">Next Steps:</p>
                        <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
                          <li>Run the database setup scripts to create tables</li>
                          <li>Add sample data to test the system</li>
                          <li>Start managing your clients</li>
                        </ol>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-200 rounded">
                        <p className="text-sm font-medium text-green-800 mb-2">✅ What's Working:</p>
                        <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
                          <li>Database connection established</li>
                          <li>Environment variables configured</li>
                          <li>Application deployed successfully</li>
                          <li>Ready to create tables</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <Button onClick={fetchClients} size="sm" variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Test Connection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Other errors (connection issues, etc.)
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Clients</h1>
          <div className="mt-4 p-6 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-red-500 mt-0.5 mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Database Connection Issue</h3>
                <p className="text-sm text-red-700 mb-4">{error}</p>

                <div className="flex gap-3 flex-wrap">
                  <Button onClick={fetchClients} size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry Connection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const totalClients = clients.length
  const activeClients = clients.filter((client) => client.status === "active").length
  const pendingClients = clients.filter((client) => client.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Clients</h1>
        <p className="text-muted-foreground mt-2">Manage your client relationships</p>
        <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">✅ Database Connected - {clients.length} clients loaded</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{totalClients}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeClients}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingClients}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Companies</CardTitle>
            <Building className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{totalClients}</div>
          </CardContent>
        </Card>
      </div>

      {/* Client Management Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary">Client Management</CardTitle>
          <AddClientDialog>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </AddClientDialog>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                      No clients found. Add your first client to get started.
                    </TableCell>
                  </TableRow>
                ) : (
                  clients.map((client) => (
                    <TableRow key={client.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Link href={`/portal/dashboard/clients/${client.id}`} className="block w-full">
                          {client.company_name || client.contact_name || `Client ${client.id}`}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getTypeColor(client.client_type)}>
                          {client.client_type || "Unknown"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(client.status)}>
                          {client.status ? client.status.charAt(0).toUpperCase() + client.status.slice(1) : "Unknown"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
