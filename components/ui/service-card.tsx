"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { ServiceCardProps } from "@/types"

export function ServiceCard({ icon, title, description, features, link, borderColor, bgGradient }: ServiceCardProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Card
      className={`border-2 ${borderColor} shadow-lg hover:shadow-xl hover:border-opacity-60 transition-all ${bgGradient} flex flex-col h-full dark:bg-surface-dark`}
    >
      <CardHeader className="flex-grow-0 h-48">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="mb-2 dark:text-text-dark">{title}</CardTitle>
        <CardDescription className="flex-grow dark:text-text-dark/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <ul className="space-y-2 text-sm text-text-light/70 mb-4 flex-grow dark:text-text-dark/70">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" size="sm" onClick={() => scrollToSection(link)}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
