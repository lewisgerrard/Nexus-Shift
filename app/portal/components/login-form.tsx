"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple client-side validation
      if (email === "lewis.gerrard@outlook.com" && password === "password") {
        // Set session in localStorage
        localStorage.setItem(
          "portal-session",
          JSON.stringify({
            email: "lewis.gerrard@outlook.com",
            name: "Lewis Gerrard",
            loggedIn: true,
            timestamp: Date.now(),
          }),
        )

        // Use replace to avoid back button issues
        window.location.replace("/portal/dashboard")
      } else {
        setError("Invalid credentials. Use lewis.gerrard@outlook.com / password")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background border-border focus:border-secondary focus:ring-secondary"
          placeholder="lewis.gerrard@outlook.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-background border-border focus:border-secondary focus:ring-secondary"
          placeholder="password"
        />
      </div>

      {error && (
        <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
            Signing in...
          </div>
        ) : (
          "Sign In"
        )}
      </Button>

      <div className="text-center text-sm text-muted-foreground mt-4">
        <p>Demo credentials:</p>
        <p className="font-mono text-xs">lewis.gerrard@outlook.com / password</p>
      </div>
    </form>
  )
}
