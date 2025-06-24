"use client"

import { useEffect } from "react"

export default function PortalPage() {
  useEffect(() => {
    // Simple redirect to dashboard - no authentication checks here
    window.location.replace("/portal/dashboard")
  }, [])

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Redirecting...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
