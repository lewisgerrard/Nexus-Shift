"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Wait a moment for the page to fully load
    const timer = setTimeout(() => {
      console.log("Dashboard: Starting authentication check...")

      try {
        const session = localStorage.getItem("portal-session")
        console.log("Dashboard: Raw session:", session)

        if (!session) {
          console.log("Dashboard: No session found, redirecting to login")
          window.location.href = "/portal"
          return
        }

        const sessionData = JSON.parse(session)
        console.log("Dashboard: Parsed session:", sessionData)

        if (!sessionData || sessionData.loggedIn !== true) {
          console.log("Dashboard: Invalid session, redirecting to login")
          localStorage.removeItem("portal-session")
          window.location.href = "/portal"
          return
        }

        console.log("Dashboard: Authentication successful")
        setIsAuthenticated(true)
        setUserName(sessionData.name || "User")
        setIsLoading(false)
      } catch (error) {
        console.error("Dashboard: Session parsing error:", error)
        localStorage.removeItem("portal-session")
        window.location.href = "/portal"
      }
    }, 500) // Wait 500ms for localStorage to be ready

    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    console.log("Logging out...")
    localStorage.removeItem("portal-session")
    window.location.href = "/portal"
  }

  if (isLoading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              border: "3px solid #e5e7eb",
              borderTop: "3px solid #1e293b",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <p style={{ marginTop: "1rem", color: "#64748b", fontSize: "1.1rem" }}>Loading dashboard...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#64748b", fontSize: "1.1rem" }}>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>Dashboard</h1>
          <p style={{ color: "#64748b", marginTop: "0.5rem", fontSize: "1.1rem" }}>
            Welcome back, {userName}! Here's your client overview.
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "500",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "600", color: "#64748b", margin: "0 0 0.75rem 0" }}>
            Total Clients
          </h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>12</p>
          <p style={{ fontSize: "0.875rem", color: "#16a34a", marginTop: "0.5rem" }}>↗ +2 from last month</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "600", color: "#64748b", margin: "0 0 0.75rem 0" }}>
            Active Projects
          </h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b", margin: 0 }}>8</p>
          <p style={{ fontSize: "0.875rem", color: "#16a34a", marginTop: "0.5rem" }}>↗ +1 from last week</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "600", color: "#64748b", margin: "0 0 0.75rem 0" }}>
            Completed
          </h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#16a34a", margin: 0 }}>24</p>
          <p style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "0.5rem" }}>+4 this month</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "0.875rem", fontWeight: "600", color: "#64748b", margin: "0 0 0.75rem 0" }}>
            Pending
          </h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#eab308", margin: 0 }}>3</p>
          <p style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "0.5rem" }}>-1 from yesterday</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e293b", marginBottom: "1.5rem" }}>
            Recent Activity
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#16a34a", borderRadius: "50%" }}
              ></div>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  TechCorp website launched successfully
                </p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>2 hours ago</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#3b82f6", borderRadius: "50%" }}
              ></div>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  New client onboarded: RetailPlus
                </p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>1 day ago</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#eab308", borderRadius: "50%" }}
              ></div>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1e293b", margin: 0 }}>
                  HealthCare Inc. milestone reached
                </p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e293b", marginBottom: "1.5rem" }}>
            Quick Actions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a
              href="/portal/dashboard/clients"
              style={{
                display: "block",
                padding: "1rem",
                backgroundColor: "#f8fafc",
                borderRadius: "0.5rem",
                textDecoration: "none",
                color: "#1e293b",
                border: "1px solid #e2e8f0",
                transition: "all 0.2s",
              }}
            >
              <p style={{ fontSize: "1rem", fontWeight: "600", margin: "0 0 0.25rem 0" }}>Manage Clients</p>
              <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>View and manage all clients</p>
            </a>
            <button
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem",
                backgroundColor: "#f8fafc",
                borderRadius: "0.5rem",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <p style={{ fontSize: "1rem", fontWeight: "600", margin: "0 0 0.25rem 0" }}>Schedule Meeting</p>
              <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>Book a meeting with a client</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
