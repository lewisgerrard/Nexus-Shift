"use client"

import { LoginForm } from "./components/login-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PortalPage() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Check if user is already logged in
    try {
      const session = localStorage.getItem("portal-session")
      if (session) {
        const sessionData = JSON.parse(session)
        if (sessionData?.loggedIn) {
          router.replace("/portal/dashboard")
        }
      }
    } catch (error) {
      // Clear invalid session
      localStorage.removeItem("portal-session")
    }
  }, [mounted, router])

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mx-auto"></div>
              <p className="mt-4 text-slate-600">Loading portal...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Portal Access</h1>
            <p className="text-slate-600">Sign in to manage your clients</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
