"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple demo authentication
      if (email === "lewis.gerrard@outlook.com" && password === "password") {
        // Set session in localStorage
        const sessionData = {
          email: "lewis.gerrard@outlook.com",
          name: "Lewis Gerrard",
          loggedIn: true,
          timestamp: Date.now(),
        }

        localStorage.setItem("portal-session", JSON.stringify(sessionData))

        // Navigate to dashboard
        router.replace("/portal/dashboard")
      } else {
        setError("Invalid credentials. Please try again.")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-slate-700">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
            placeholder="Enter your password"
          />
        </div>

        {error && <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">{error}</div>}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Signing in...
            </div>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <p className="text-sm text-slate-600 text-center mb-2">Demo Credentials:</p>
        <div className="text-center space-y-1">
          <p className="text-xs font-mono text-slate-700">lewis.gerrard@outlook.com</p>
          <p className="text-xs font-mono text-slate-700">password</p>
        </div>
      </div>
    </div>
  )
}
