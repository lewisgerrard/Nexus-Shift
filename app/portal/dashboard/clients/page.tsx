import { Plus, Users, UserCheck, Clock, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientsTable } from "../components/clients-table"
import { AddClientDialog } from "../components/add-client-dialog"
import { Button } from "@/components/ui/button"

// Demo client data
const demoClients = [
  {
    id: 1,
    contact_name: "John Smith",
    company_name: "Tech Corp",
    email: "john@techcorp.com",
    phone: "+1-555-0101",
    address: "123 Tech Street, Silicon Valley, CA",
    client_type: "Enterprise",
    status: "active",
    notes: "Looking for e-commerce solution",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    contact_name: "Sarah Johnson",
    company_name: "StartupCo",
    email: "sarah@startup.com",
    phone: "+1-555-0102",
    address: "456 Innovation Ave, Austin, TX",
    client_type: "Startup",
    status: "active",
    notes: "iOS and Android app development",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    contact_name: "Mike Davis",
    company_name: "Business Solutions",
    email: "mike@business.com",
    phone: "+1-555-0103",
    address: "789 Business Blvd, New York, NY",
    client_type: "SMB",
    status: "pending",
    notes: "Digital transformation project",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    contact_name: "Emily Chen",
    company_name: "Design Studio",
    email: "emily@designstudio.com",
    phone: "+1-555-0104",
    address: "321 Creative Lane, Portland, OR",
    client_type: "Agency",
    status: "active",
    notes: "Brand identity and website redesign",
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    contact_name: "Robert Wilson",
    company_name: "Manufacturing Inc",
    email: "robert@manufacturing.com",
    phone: "+1-555-0105",
    address: "654 Industrial Way, Detroit, MI",
    client_type: "Enterprise",
    status: "inactive",
    notes: "Legacy system modernization",
    created_at: new Date().toISOString(),
  },
]

export default function ClientsPage() {
  const totalClients = demoClients.length
  const activeClients = demoClients.filter((client) => client.status === "active").length
  const pendingClients = demoClients.filter((client) => client.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Clients</h1>
        <p className="text-muted-foreground mt-2">Manage your client relationships</p>
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
          <ClientsTable clients={demoClients} />
        </CardContent>
      </Card>
    </div>
  )
}
