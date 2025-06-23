"use client"

import { ClientsTable } from "@/components/portal/clients-table"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Clients</h1>
        <p className="text-primary/70">Manage your client database</p>
      </div>

      <ClientsTable />
    </div>
  )
}
