import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Clock, Building, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

// Demo data for dashboard overview
const stats = {
  totalClients: 5,
  activeClients: 3,
  pendingClients: 1,
  totalCompanies: 5,
}

const recentActivity = [
  {
    id: 1,
    action: "New client added",
    client: "Sarah Johnson - TechStart Solutions",
    time: "2 hours ago",
  },
  {
    id: 2,
    action: "Client status updated",
    client: "Michael Chen - Green Earth Consulting",
    time: "1 day ago",
  },
  {
    id: 3,
    action: "Meeting scheduled",
    client: "Emily Rodriguez - Artisan Bakery Co.",
    time: "2 days ago",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's an overview of your client management.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalClients}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.activeClients}</div>
            <p className="text-xs text-muted-foreground">60% of total clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.pendingClients}</div>
            <p className="text-xs text-muted-foreground">Awaiting follow-up</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Companies</CardTitle>
            <Building className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalCompanies}</div>
            <p className="text-xs text-muted-foreground">Across various industries</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="/portal/dashboard/clients"
              className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <Users className="h-8 w-8 text-secondary mr-4" />
              <div>
                <h3 className="font-semibold text-primary">Manage Clients</h3>
                <p className="text-sm text-muted-foreground">View and manage all your clients</p>
              </div>
            </Link>
            <div className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
              <Calendar className="h-8 w-8 text-secondary mr-4" />
              <div>
                <h3 className="font-semibold text-primary">Schedule Meeting</h3>
                <p className="text-sm text-muted-foreground">Book a meeting with a client</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.client}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
