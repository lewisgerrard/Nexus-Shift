"use client"

import { ProjectCard } from "@/components/ui/project-card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Shield, Zap } from "lucide-react"
import type { ProjectCardProps } from "@/types"

const projects: ProjectCardProps[] = [
  {
    title: "Chester Referees Association",
    description: "Modernised digital presence with integrated membership platform",
    features: [
      "Public-facing site for membership promotion",
      "Admin dashboard for user management",
      "Secure booking tools for officials",
    ],
    results: [
      {
        icon: <Users className="h-8 w-8 text-secondary" />,
        title: "Greater Engagement",
        description: "Increased user participation",
      },
      {
        icon: <Calendar className="h-8 w-8 text-primary" />,
        title: "Reduced Admin",
        description: "Streamlined processes",
      },
    ],
    badge: "Digital Transformation",
    link: "#case-studies",
    visual: (
      <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 flex items-center justify-center h-48">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Diva Fitness",
    description: "Bold, on-brand site with integrated booking and member tracking",
    features: [
      "Online booking with payment options",
      "Session descriptions and pricing",
      "Member progress tracking platform",
    ],
    results: [
      {
        icon: <Shield className="h-8 w-8 text-accent" />,
        title: "Professional Image",
        description: "Enhanced brand credibility",
      },
      {
        icon: <Users className="h-8 w-8 text-secondary" />,
        title: "Streamlined Operations",
        description: "Automated onboarding",
      },
    ],
    badge: "Website + Application",
    link: "#case-studies",
    visual: (
      <div className="bg-gradient-to-br from-secondary/10 to-accent/20 rounded-lg p-8 flex items-center justify-center h-48">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
            <Zap className="h-8 w-8 text-secondary" />
          </div>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
]

interface CaseStudiesSectionProps {
  onViewAllWork: () => void
}

export function CaseStudiesSection({ onViewAllWork }: CaseStudiesSectionProps) {
  return (
    <section
      id="case-studies"
      className="py-12 md:py-20 bg-gradient-to-l from-primary/10 via-secondary/5 to-accent/10 dark:from-primary/20 dark:via-secondary/10 dark:to-accent/20"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Featured Case Studies
          </h2>
          <p className="text-lg text-text-light/70 dark:text-text-dark/70">
            See how we've helped forward-thinking businesses make the shift
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={onViewAllWork}>
            See All Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
