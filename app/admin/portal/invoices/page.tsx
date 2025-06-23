"use client"

import { InvoicesTable } from "@/components/portal/invoices-table"

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Invoices & Bills</h1>
        <p className="text-primary/70">Track your income and expenses</p>
      </div>

      <InvoicesTable />
    </div>
  )
}
