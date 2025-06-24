"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      try {
        const session = localStorage.getItem("portal-session")
        if (session) {
          const sessionData = JSON.parse(session)
          if (sessionData?.loggedIn) {
            setIsAuthenticated(true)
          } else {
            window.location.href = "/portal"
          }
        } else {
          window.location.href = "/portal"
        }
      } catch (error) {
        localStorage.removeItem("portal-session")
        window.location.href = "/portal"
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("portal-session")
    window.location.href = "/portal"
  }

  if (isLoading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              border: "2px solid #e5e7eb",
              borderTop: "2px solid #1e293b",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <p style={{ marginTop: "1rem", color: "#64748b" }}>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>Dashboard</h1>
          <p style={{ color: "#64748b", marginTop: "0.5rem" }}>Welcome back, Lewis. Here's your client overview.</p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: "0 0 0.5rem 0" }}>
            Total Clients
          </h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>12</p>
          <p style={{ fontSize: "0.75rem", color: "#16a34a", marginTop: "0.25rem" }}>+2 from last month</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: "0 0 0.5rem 0" }}>
            Active Projects
          </h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>8</p>
          <p style={{ fontSize: "0.75rem", color: "#16a34a", marginTop: "0.25rem" }}>+1 from last week</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: "0 0 0.5rem 0" }}>
            Completed
          </h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a", margin: 0 }}>24</p>
          <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.25rem" }}>+4 this month</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b", margin: "0 0 0.5rem 0" }}>Pending</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#eab308", margin: 0 }}>3</p>
          <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.25rem" }}>-1 from yesterday</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b", marginBottom: "1rem" }}>
            Recent Activity
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#16a34a", borderRadius: "50%" }}></div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  TechCorp website launched
                </p>
                <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>2 hours ago</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#3b82f6", borderRadius: "50%" }}></div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  New client onboarded: RetailPlus
                </p>
                <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>1 day ago</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#eab308", borderRadius: "50%" }}></div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  HealthCare Inc. milestone reached
                </p>
                <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b", marginBottom: "1rem" }}>
            Quick Actions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="/portal/dashboard/clients"
              style={{
                display: "block",
                padding: "0.75rem",
                backgroundColor: "#f8fafc",
                borderRadius: "0.375rem",
                textDecoration: "none",
                color: "#1e293b",
                border: "1px solid #e2e8f0",
              }}
            >
              <p style={{ fontSize: "0.875rem", fontWeight: "500", margin: "0 0 0.25rem 0" }}>Manage Clients</p>
              <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>View and manage all clients</p>
            </a>
            <button
              style={{
                width: "100%",
                textAlign: "left",
                padding: "0.75rem",
                backgroundColor: "#f8fafc",
                borderRadius: "0.375rem",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "0.875rem", fontWeight: "500", margin: "0 0 0.25rem 0" }}>Schedule Meeting</p>
              <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>Book a meeting with a client</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
