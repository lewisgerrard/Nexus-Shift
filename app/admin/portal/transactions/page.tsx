"use client"

import { TransactionsTable } from "@/components/portal/transactions-table"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Bank Transactions</h1>
        <p className="text-primary/70">View your bank transaction history</p>
      </div>

      <TransactionsTable />
    </div>
  )
}
