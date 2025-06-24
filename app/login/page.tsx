"use client"

import { LoginForm } from "./components/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-background rounded-2xl shadow-xl border border-border p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/nexus-shift-logo.png"
                alt="Nexus Shift Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Portal Access</h1>
            <p className="text-muted-foreground">Sign in to manage your clients</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
