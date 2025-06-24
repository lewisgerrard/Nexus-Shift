import type React from "react"
import type { ReactNode } from "react"

export interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  link: string
  borderColor: string
  bgGradient: string
}

export interface ProjectCardProps {
  title: string
  description: string
  features: string[]
  results: Array<{
    icon: ReactNode
    title: string
    description: string
  }>
  badge: string
  link: string
  visual: ReactNode
}

export interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  delay: string
}

export interface ServiceOption {
  value: string
  label: string
}
