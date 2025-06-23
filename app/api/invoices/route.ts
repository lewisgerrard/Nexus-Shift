import { NextResponse } from "next/server"

// Mock data for invoices
const mockInvoices = [
  {
    id: 1,
    invoice_number: "INV-2024-001",
    client_name: "Acme Corporation",
    amount: 2500.0,
    status: "paid",
    due_date: "2024-02-15",
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    invoice_number: "INV-2024-002",
    client_name: "Tech Solutions Ltd",
    amount: 1800.0,
    status: "pending",
    due_date: "2024-02-20",
    created_at: "2024-01-20T14:20:00Z",
  },
  {
    id: 3,
    invoice_number: "INV-2024-003",
    client_name: "Digital Innovations",
    amount: 3200.0,
    status: "overdue",
    due_date: "2024-01-30",
    created_at: "2024-01-05T09:15:00Z",
  },
  {
    id: 4,
    invoice_number: "INV-2024-004",
    client_name: "Creative Agency",
    amount: 1500.0,
    status: "draft",
    due_date: "2024-03-01",
    created_at: "2024-01-25T16:45:00Z",
  },
]

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return NextResponse.json(mockInvoices)
  } catch (error) {
    console.error("Error fetching invoices:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch invoices",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
