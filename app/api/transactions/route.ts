import { NextResponse } from "next/server"

// Mock data for transactions
const mockTransactions = [
  {
    id: 1,
    description: "Website Development - Acme Corp",
    amount: 2500.0,
    type: "income",
    category: "Web Development",
    date: "2024-01-15",
    client_name: "Acme Corporation",
  },
  {
    id: 2,
    description: "Domain Registration",
    amount: -45.0,
    type: "expense",
    category: "Infrastructure",
    date: "2024-01-12",
    client_name: null,
  },
  {
    id: 3,
    description: "App Development - Tech Solutions",
    amount: 1800.0,
    type: "income",
    category: "App Development",
    date: "2024-01-10",
    client_name: "Tech Solutions Ltd",
  },
  {
    id: 4,
    description: "Software License",
    amount: -120.0,
    type: "expense",
    category: "Software",
    date: "2024-01-08",
    client_name: null,
  },
  {
    id: 5,
    description: "Consultation - Digital Innovations",
    amount: 800.0,
    type: "income",
    category: "Consulting",
    date: "2024-01-05",
    client_name: "Digital Innovations",
  },
]

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return NextResponse.json(mockTransactions)
  } catch (error) {
    console.error("Error fetching transactions:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch transactions",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
