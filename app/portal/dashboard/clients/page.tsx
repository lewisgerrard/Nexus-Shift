"use client"

import { useState, useEffect } from "react"
import {
  Plus,
  Users,
  UserCheck,
  Clock,
  Building,
  AlertCircle,
  RefreshCw,
  Settings,
  ExternalLink,
  Copy,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
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
  const [envDebug, setEnvDebug] = useState(null)
  const [copied, setCopied] = useState(false)

  // Your exact Neon connection string
  const correctConnectionString =
    "postgresql://neondb_owner:npg_rZlI2tQLed0G@ep-muddy-math-abgrfi5g-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fetchEnvironmentDebug = async () => {
    try {
      const response = await fetch("/api/debug")
      const data = await response.json()
      setEnvDebug(data)
      console.log("🔍 Environment Debug:", data)
    } catch (err) {
      console.error("Failed to fetch environment debug:", err)
    }
  }

  const fetchClients = async () => {
    setLoading(true)
    try {
      console.log("🔄 Fetching clients from API...")
      const response = await fetch("/api/clients", {
        cache: "no-store",
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
    fetchEnvironmentDebug()
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

                <div className="bg-white p-4 rounded border border-red-200 mb-4">
                  <h4 className="font-medium text-red-800 mb-3">🔍 Troubleshooting DATABASE_URL in Vercel:</h4>

                  <div className="space-y-4">
                    {envDebug?.databaseUrlAnalysis?.exists ? (
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                          <p className="text-sm font-medium text-yellow-800">DATABASE_URL Found But Not Working</p>
                        </div>
                        <div className="text-xs text-yellow-700 space-y-1">
                          <p>
                            <strong>Current value:</strong> {envDebug.databaseUrlAnalysis.value}
                          </p>
                          <p>
                            <strong>Length:</strong> {envDebug.databaseUrlAnalysis.length} characters
                          </p>
                          <p>
                            <strong>Valid format:</strong> {envDebug.databaseUrlAnalysis.isValid ? "✅ Yes" : "❌ No"}
                          </p>
                          <p>
                            <strong>Correct host:</strong>{" "}
                            {envDebug.databaseUrlAnalysis.hasCorrectHost ? "✅ Yes" : "❌ No"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-red-50 border border-red-200 rounded">
                        <div className="flex items-center mb-2">
                          <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                          <p className="text-sm font-medium text-red-800">DATABASE_URL Not Found in Runtime</p>
                        </div>
                        <p className="text-xs text-red-700">
                          Even though it exists in Vercel, it's not available to the application.
                        </p>
                      </div>
                    )}

                    <div className="p-4 bg-green-50 border border-green-200 rounded">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <p className="text-sm font-medium text-green-800">Correct DATABASE_URL Value:</p>
                      </div>
                      <div className="p-3 bg-white border border-green-200 rounded">
                        <div className="flex items-start justify-between gap-2">
                          <code className="text-xs text-green-800 break-all font-mono leading-relaxed flex-1">
                            {correctConnectionString}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(correctConnectionString)}
                            className="flex-shrink-0 h-8 px-3"
                          >
                            <Copy className="h-3 w-3 mr-1" />
                            {copied ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                        <p className="text-sm font-medium text-blue-800 mb-3">🔧 Fix Steps:</p>
                        <ol className="text-xs text-blue-700 space-y-2 list-decimal list-inside">
                          <li>Go to Vercel Dashboard</li>
                          <li>Your Project → Settings → Environment Variables</li>
                          <li>Find the DATABASE_URL variable</li>
                          <li>Click "Edit" or delete and recreate</li>
                          <li>Ensure the value matches exactly (copy from above)</li>
                          <li>Save the variable</li>
                          <li>
                            <strong>Redeploy the application</strong>
                          </li>
                        </ol>
                        <Button asChild size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-full">
                          <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Open Vercel Dashboard
                          </a>
                        </Button>
                      </div>

                      <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                        <p className="text-sm font-medium text-orange-800 mb-3">⚠️ Common Issues:</p>
                        <ul className="text-xs text-orange-700 space-y-1 list-disc list-inside">
                          <li>Environment variable not redeployed</li>
                          <li>Typo in variable name (must be exactly "DATABASE_URL")</li>
                          <li>Extra spaces in the connection string</li>
                          <li>Wrong environment (Production vs Preview)</li>
                          <li>Cached deployment not using new variables</li>
                        </ul>
                        <div className="mt-3 p-2 bg-orange-100 rounded">
                          <p className="text-xs text-orange-700">
                            <strong>Most likely:</strong> Need to redeploy after changing environment variables
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {envDebug && (
                  <details className="mb-4">
                    <summary className="text-sm text-red-600 cursor-pointer hover:text-red-800 font-medium">
                      🔍 Detailed Environment Debug ({envDebug.totalEnvVars} total vars)
                    </summary>
                    <div className="mt-2 p-3 bg-red-100 rounded text-xs">
                      <div className="mb-2">
                        <strong>Node Environment:</strong> {envDebug.nodeEnv}
                      </div>
                      <div className="mb-2">
                        <strong>Database variables found:</strong> {envDebug.databaseRelatedVars}
                      </div>
                      <div className="mb-2">
                        <strong>DATABASE_URL Analysis:</strong>
                      </div>
                      <pre className="text-red-700 text-xs overflow-x-auto mb-2">
                        {JSON.stringify(envDebug.databaseUrlAnalysis, null, 2)}
                      </pre>
                      <div className="mb-2">
                        <strong>All Target Variables:</strong>
                      </div>
                      <pre className="text-red-700 text-xs overflow-x-auto">
                        {JSON.stringify(envDebug.targetVarStatus, null, 2)}
                      </pre>
                    </div>
                  </details>
                )}

                <div className="flex gap-3 flex-wrap">
                  <Button onClick={fetchClients} size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Test Connection
                  </Button>

                  <Button onClick={fetchEnvironmentDebug} size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Check Environment
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
