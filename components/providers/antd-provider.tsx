"use client"

import type React from "react"

import { ConfigProvider, theme } from "antd"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface AntdProviderProps {
  children: React.ReactNode
}

export function AntdProvider({ children }: AntdProviderProps) {
  const { theme: currentTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Dynamically load Ant Design CSS
    const loadAntdStyles = () => {
      if (typeof document !== "undefined") {
        const existingLink = document.querySelector('link[href*="antd"]')
        if (!existingLink) {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://cdn.jsdelivr.net/npm/antd@5.12.8/dist/reset.css"
          document.head.appendChild(link)
        }
      }
    }

    loadAntdStyles()
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#0B1F3A", // Your primary color
          colorInfo: "#00C2CB", // Your secondary color
          borderRadius: 8,
          fontFamily: "Inter, sans-serif",
        },
        components: {
          Button: {
            colorPrimary: "#0B1F3A",
            algorithm: true,
          },
          Input: {
            colorPrimary: "#0B1F3A",
          },
          Card: {
            colorBorderSecondary: "#f0f0f0",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
