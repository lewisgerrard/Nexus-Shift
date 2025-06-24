"use client"

import { useState, useEffect } from "react"
import { Plus, Users, UserCheck, Clock, Building, RefreshCw } from "lucide-react"
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
  const [usingDemoData, setUsingDemoData] = useState(false)
  const [debugInfo, setDebugInfo] = useState(null)

  // Demo data fallback
  const demoClients = [
    {
      id: 1,
      contact_name: "John Smith",
      company_name: "Tech Corp",
      client_type: "Enterprise",
      status: "active",
    },
    {
      id: 2,
      contact_name: "Sarah Johnson",
      company_name: "StartupCo",
      client_type: "Startup",
      status: "active",
    },
    {
      id: 3,
      contact_name: "Mike Davis",
      company_name: "Business Solutions",
      client_type: "SMB",
      status: "pending",
    },
  ]

  const fetchClients = async () => {
    setLoading(true)
    try {
      console.log("Fetching clients from API...")
      const response = await fetch("/api/clients", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      console.log("API Response status:", response.status)
      const data = await response.json()
      console.log("API Response data:", data)

      if (data.success) {
        setClients(data.clients)
        setUsingDemoData(false)
        setError(null)
        console.log("✅ Using real database data:", data.clients.length, "clients")
      } else {
        setClients(demoClients)
        setUsingDemoData(true)
        setError(data.error)
        console.log("⚠️ Using demo data due to error:", data.error)
      }

      setDebugInfo(data.debug)
    } catch (err) {
      console.error("Failed to fetch clients:", err)
      setClients(demoClients)
      setUsingDemoData(true)
      setError("Failed to connect to API: " + err.message)
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
          <p className="text-muted-foreground mt-2">Loading client data...</p>
        </div>

        {/* Loading skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-12 animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          </CardContent>
        </Card>
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Clients</h1>
            <p className="text-muted-foreground mt-2">Manage your client relationships</p>
          </div>
          <Button onClick={fetchClients} variant="outline" size="sm" disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {usingDemoData && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800 font-medium">❌ Database Connection Failed - Using Demo Data</p>
            {error && <p className="text-xs text-red-700 mt-1">Error: {error}</p>}
            {debugInfo && (
              <details className="mt-2">
                <summary className="text-xs text-red-600 cursor-pointer">Debug Information</summary>
                <pre className="text-xs text-red-600 mt-1 bg-red-100 p-2 rounded overflow-auto">
                  {JSON.stringify(debugInfo, null, 2)}
                </pre>
              </details>
            )}
            <p className="text-xs text-red-600 mt-2">
              Check the browser console and Vercel function logs for detailed debugging information.
            </p>
          </div>
        )}

        {!usingDemoData && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800 font-medium">✅ Connected to Database</p>
            <p className="text-xs text-green-700 mt-1">Showing {clients.length} real clients from your database</p>
            {debugInfo && (
              <p className="text-xs text-green-600 mt-1">
                Records in DB: {debugInfo.recordCount} | Connection:{" "}
                {debugInfo.connectionWorking ? "Working" : "Failed"}
              </p>
            )}
          </div>
        )}
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
                {clients.map((client) => (
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
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
