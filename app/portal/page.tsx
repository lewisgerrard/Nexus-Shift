import { DashboardStats } from "@/components/portal/dashboard-stats"
import { RevenueChart } from "@/components/portal/revenue-chart"
import { SpendingChart } from "@/components/portal/spending-chart"
import { RecentTransactions } from "@/components/portal/recent-transactions"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <div className="text-sm text-muted-foreground">Welcome back, Admin</div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <SpendingChart />
      </div>

      <RecentTransactions />
    </div>
  )
}
