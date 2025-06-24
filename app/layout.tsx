import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
  description:
    "Transform your business with our comprehensive digital solutions. We combine strategic thinking with cutting-edge technology to drive growth and innovation.",
  keywords: ["digital transformation", "business consulting", "web development", "technology solutions", "innovation"],
  authors: [{ name: "Nexus Shift" }],
  creator: "Nexus Shift",
  publisher: "Nexus Shift",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://nexusshift.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
    description:
      "Transform your business with our comprehensive digital solutions. We combine strategic thinking with cutting-edge technology to drive growth and innovation.",
    url: "/",
    siteName: "Nexus Shift",
    images: [
      {
        url: "/nexus-shift-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Shift - Digital Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
    description:
      "Transform your business with our comprehensive digital solutions. We combine strategic thinking with cutting-edge technology to drive growth and innovation.",
    images: ["/nexus-shift-logo.png"],
    creator: "@nexusshift",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
