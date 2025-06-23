import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
  description:
    "We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered tools, and structured business thinking.",
  keywords: "digital transformation, web development, business automation, SME solutions",
  authors: [{ name: "Nexus Shift" }],
  creator: "Nexus Shift",
  publisher: "Nexus Shift",
  openGraph: {
    title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
    description:
      "We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered tools, and structured business thinking.",
    url: "https://nexusshift.co.uk",
    siteName: "Nexus Shift",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Shift - Digital Transformation Meets Structured Thinking",
    description:
      "We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered tools, and structured business thinking.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
