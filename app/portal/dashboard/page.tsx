import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Plus, BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard - Nexus Shift Portal",
  description: "Nexus Shift client management dashboard",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-secondary text-lg">Welcome back to your Nexus Shift portal</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Total Clients</CardTitle>
                <Users className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <p className="text-sm text-gray-600">No clients yet</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-primary text-white pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Active Projects</CardTitle>
                <BarChart3 className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <p className="text-sm text-gray-600">No active projects</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">This Month</CardTitle>
                <TrendingUp className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <p className="text-sm text-gray-600">New this month</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-primary text-white pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
                <Plus className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="bg-white pt-6">
              <Link href="/portal/dashboard/clients">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold h-10">
                  Manage Clients
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="bg-white p-8">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 text-lg">No recent activity</p>
                <p className="text-gray-500 text-sm mt-2">Your client interactions will appear here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary">
              <CardTitle className="text-xl font-bold">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="bg-white p-6 space-y-4">
              <Link href="/portal/dashboard/clients">
                <Button
                  variant="outline"
                  className="w-full justify-start h-12 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Users className="mr-3 h-5 w-5" />
                  View All Clients
                </Button>
              </Link>

              <Button
                variant="outline"
                className="w-full justify-start h-12 border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-200"
                disabled
              >
                <Plus className="mr-3 h-5 w-5" />
                Add New Project
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start h-12 border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-200"
                disabled
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
