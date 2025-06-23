import type React from "react"
export interface ServiceCardProps {
  icon: React.ReactNode
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
    icon: React.ReactNode
    title: string
    description: string
  }>
  badge: string
  link: string
  visual: React.ReactNode
}

export interface TestimonialCardProps {
  quote: string
  author: string
}

export interface NavigationItem {
  name: string
  href: string
}
