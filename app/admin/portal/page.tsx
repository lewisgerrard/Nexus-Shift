import { DashboardStats } from "@/components/portal/dashboard-stats"
import { RevenueChart } from "@/components/portal/revenue-chart"
import { SpendingChart } from "@/components/portal/spending-chart"
import { RecentTransactions } from "@/components/portal/recent-transactions"

export default function PortalDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your Nexus Shift admin portal</p>
      </div>

      <DashboardStats />

      <div className="grid lg:grid-cols-2 gap-6">
        <RevenueChart />
        <SpendingChart />
      </div>

      <RecentTransactions />
    </div>
  )
}
