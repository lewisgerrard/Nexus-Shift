import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      // Initialize performance monitoring
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          // Measure Core Web Vitals
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation && process.env.NODE_ENV === 'development') {
            console.log('Page Load Time:', navigation.loadEventEnd - navigation.navigationStart, 'ms');
          }
        });
      }
    `,
          }}
        />
      </body>
    </html>
  )
}
