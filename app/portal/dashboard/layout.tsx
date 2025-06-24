"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      try {
        const session = localStorage.getItem("portal-session")
        if (session) {
          const parsedSession = JSON.parse(session)
          if (parsedSession.loggedIn) {
            setIsAuthenticated(true)
          } else {
            router.replace("/portal")
          }
        } else {
          router.replace("/portal")
        }
      } catch (error) {
        console.error("Auth check error:", error)
        router.replace("/portal")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return <div className="min-h-screen bg-background">{children}</div>
}
