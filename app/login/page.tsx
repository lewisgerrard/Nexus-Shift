import type { Metadata } from "next"
import { LoginForm } from "@/app/portal/components/login-form"

export const metadata: Metadata = {
  title: "Login - Nexus Shift Portal",
  description: "Access your Nexus Shift client portal",
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img className="mx-auto h-16 w-auto" src="/nexus-shift-logo.png" alt="Nexus Shift" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">Access your Nexus Shift client portal</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
