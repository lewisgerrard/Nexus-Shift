import { TransactionsTable } from "@/components/portal/transactions-table"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Bank Transactions</h1>
        <Button className="bg-secondary hover:bg-secondary/90 text-white">
          <RefreshCw className="w-4 h-4 mr-2" />
          Sync with Plaid
        </Button>
      </div>

      <TransactionsTable />
    </div>
  )
}
