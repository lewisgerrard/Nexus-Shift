"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { ProjectCardProps } from "@/types"

export function ProjectCard({ title, description, features, results, badge, link, visual }: ProjectCardProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Card className="border-0 shadow-lg dark:bg-surface-dark">
      <CardHeader>
        <div className="mb-4">{visual}</div>
        <Badge variant="outline" className="w-fit mb-2">
          {badge}
        </Badge>
        <CardTitle className="dark:text-text-dark">{title}</CardTitle>
        <p className="text-text-light/70 dark:text-text-dark/70">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          <h4 className="font-semibold text-text-light dark:text-text-dark">What We Delivered:</h4>
          <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 mb-4">
          <h4 className="font-semibold text-text-light dark:text-text-dark">The Result:</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            {results.map((result, index) => (
              <Card key={index} className="border-0 shadow-sm p-4 dark:bg-background-dark">
                <CardContent className="flex items-center space-x-3">
                  {result.icon}
                  <div>
                    <div className="font-semibold text-text-light dark:text-text-dark">{result.title}</div>
                    <div className="text-sm text-text-light/70 dark:text-text-dark/70">{result.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button variant="outline" size="sm" onClick={() => scrollToSection(link)}>
          View Case Study
        </Button>
      </CardContent>
    </Card>
  )
}
