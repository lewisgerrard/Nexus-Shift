"use client"

import { useState, useEffect } from "react"
import { Users, UserCheck, Clock, Building, AlertCircle, RefreshCw, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AddClientDialog } from "../components/add-client-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

function getStatusColor(status: string) {
  switch (status?.toLowerCase()) {
    case "active":
      return "bg-secondary text-primary"
    case "pending":
      return "bg-primary text-white"
    case "inactive":
      return "bg-gray-200 text-gray-800"
    default:
      return "bg-gray-200 text-gray-800"
  }
}

function getSizeColor(size: string) {
  switch (size?.toLowerCase()) {
    case "micro (1–10 employees)":
      return "bg-secondary/20 text-primary border border-secondary"
    case "small (11–50 employees)":
      return "bg-primary/20 text-primary border border-primary"
    case "medium (51–250 employees)":
      return "bg-secondary text-primary"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ClientsPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
        console.log("✅ Successfully loaded clients from database:", data.clients.length)
      } else {
        setError(data.error)
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
      <div className="min-h-screen bg-white">
        <div className="bg-primary px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Clients</h1>
            <p className="text-secondary text-lg">Loading your client data...</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center">
                <RefreshCw className="h-8 w-8 animate-spin text-secondary mr-4" />
                <p className="text-lg text-primary">Connecting to database...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error) {
    const isTableMissing = error.includes("does not exist")

    return (
      <div className="min-h-screen bg-white">
        <div className="bg-primary px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Clients</h1>
            <p className="text-secondary text-lg">Database setup required</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className={isTableMissing ? "bg-secondary text-primary" : "bg-red-500 text-white"}>
              <div className="flex items-center">
                {isTableMissing ? <CheckCircle className="h-6 w-6 mr-3" /> : <AlertCircle className="h-6 w-6 mr-3" />}
                <CardTitle className="text-xl font-bold">
                  {isTableMissing ? "Database Connected - Setup Required" : "Database Connection Issue"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="bg-white p-8">
              {isTableMissing ? (
                <div>
                  <p className="text-lg text-primary mb-6">
                    Great! Your database connection is working, but the clients table doesn't exist yet.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-primary mb-4">🚀 Database Setup Required:</h4>
                    <div className="space-y-4">
                      <div className="bg-secondary/10 p-4 rounded border border-secondary">
                        <p className="font-semibold text-primary mb-2">Next Steps:</p>
                        <ol className="text-primary space-y-2 list-decimal list-inside">
                          <li>Run the database setup scripts to create tables</li>
                          <li>Add sample data to test the system</li>
                          <li>Start managing your clients</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-red-600 mb-6">{error}</p>
              )}
              <Button onClick={fetchClients} className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                <RefreshCw className="h-4 w-4 mr-2" />
                {isTableMissing ? "Test Connection" : "Retry Connection"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const totalClients = clients.length
  const activeClients = clients.filter((client) => client.status === "active").length
  const pendingClients = clients.filter((client) => client.status === "pending").length

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Clients</h1>
            <p className="text-secondary text-lg">Manage your client relationships</p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-secondary/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-secondary mr-2" />
              <span className="text-secondary font-semibold">Database Connected - {clients.length} clients loaded</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Total Clients</CardTitle>
                <Users className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-primary">{totalClients}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-primary text-white pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Active</CardTitle>
                <UserCheck className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-secondary">{activeClients}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Pending</CardTitle>
                <Clock className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-primary">{pendingClients}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-primary text-white pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Companies</CardTitle>
                <Building className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-secondary">{totalClients}</div>
            </CardContent>
          </Card>
        </div>

        {/* Client Management Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-primary text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Client Management</CardTitle>
              <AddClientDialog />
            </div>
          </CardHeader>
          <CardContent className="bg-white p-0">
            <div className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b-2 border-gray-200">
                    <TableHead className="font-bold text-primary py-4">Name</TableHead>
                    <TableHead className="font-bold text-primary py-4">Size</TableHead>
                    <TableHead className="font-bold text-primary py-4">Address</TableHead>
                    <TableHead className="font-bold text-primary py-4">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-16">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-8 w-8 text-gray-400" />
                          </div>
                          <p className="text-lg text-gray-600 mb-2">No clients found</p>
                          <p className="text-gray-500">Add your first client to get started</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    clients.map((client) => (
                      <TableRow
                        key={client.id}
                        className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                      >
                        <TableCell className="font-semibold text-primary py-4">
                          <Link
                            href={`/portal/dashboard/clients/${client.id}`}
                            className="block w-full hover:text-secondary transition-colors"
                          >
                            {client.name || `Client ${client.id}`}
                          </Link>
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge className={`${getSizeColor(client.size)} font-medium`}>
                            {client.size || "Unknown"}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-xs py-4">
                          <div className="truncate text-gray-700" title={client.address}>
                            {client.address || "No address"}
                          </div>
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge className={`${getStatusColor(client.status)} font-medium`}>
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
    </div>
  )
}
