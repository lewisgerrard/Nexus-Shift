"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementsProps {
  className?: string
}

export function FloatingElements({ className }: FloatingElementsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Floating circles that follow mouse */}
      <div
        className="absolute w-4 h-4 bg-secondary/20 rounded-full transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x * 0.02 + 100,
          top: mousePosition.y * 0.02 + 100,
        }}
      />
      <div
        className="absolute w-6 h-6 bg-primary/10 rounded-full transition-all duration-1500 ease-out"
        style={{
          left: mousePosition.x * 0.01 + 200,
          top: mousePosition.y * 0.01 + 200,
        }}
      />
      <div
        className="absolute w-3 h-3 bg-accent/30 rounded-full transition-all duration-800 ease-out"
        style={{
          left: mousePosition.x * 0.03 + 300,
          top: mousePosition.y * 0.03 + 150,
        }}
      />
    </div>
  )
}
