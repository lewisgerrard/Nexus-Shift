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
      }}
    >
      {children}
    </ConfigProvider>
  )
}
