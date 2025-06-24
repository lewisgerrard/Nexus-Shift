"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const session = localStorage.getItem("portal-session")
        if (session) {
          const data = JSON.parse(session)
          if (data.loggedIn) {
            setIsAuthenticated(true)
          } else {
            window.location.href = "/portal"
          }
        } else {
          window.location.href = "/portal"
        }
      } catch {
        window.location.href = "/portal"
      }
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div>Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: 0 }}>Dashboard</h1>
          <button
            onClick={() => {
              localStorage.removeItem("portal-session")
              window.location.href = "/portal"
            }}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
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
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#666" }}>Total Clients</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>12</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#666" }}>Active Projects</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>8</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#666" }}>Completed</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0, color: "#16a34a" }}>24</p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Quick Actions</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/portal/dashboard/clients"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#1e293b",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.5rem",
              }}
            >
              Manage Clients
            </a>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
