import { InvoicesTable } from "@/components/portal/invoices-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function InvoicesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Invoices & Bills</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Record
        </Button>
      </div>

      <InvoicesTable />
    </div>
  )
}
