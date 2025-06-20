"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function ParallaxSection({ children, className, speed = 0.5, offset = 0 }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const rate = scrolled * speed
        setScrollY(rate)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{
        transform: `translateY(${scrollY + offset}px)`,
      }}
    >
      {children}
    </div>
  )
}
