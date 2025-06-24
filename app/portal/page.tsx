"use client"

import { useEffect, useState } from "react"

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("portal-session")
      if (session) {
        try {
          const sessionData = JSON.parse(session)
          if (sessionData.loggedIn) {
            setIsAuthenticated(true)
            // Redirect to dashboard
            window.location.replace("/portal/dashboard")
          } else {
            // Not logged in, redirect to login
            window.location.replace("/login")
          }
        } catch (e) {
          localStorage.removeItem("portal-session")
          window.location.replace("/login")
        }
      } else {
        // No session, redirect to login
        window.location.replace("/login")
      }
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // This should not render as we redirect above
  return null
}
