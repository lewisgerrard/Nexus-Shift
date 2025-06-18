import { ServiceCard } from "@/components/ui/service-card"
import { Zap, Globe, Code } from "lucide-react"
import type { ServiceCardProps } from "@/types"

const services: ServiceCardProps[] = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Digital Transformation Consultancy",
    description: "Optimise your business processes with a strategy-first approach.",
    features: ["Operational audits and process mapping", "Digital tooling recommendations", "Scalable growth roadmaps"],
    link: "#services",
    borderColor: "border-primary/20 hover:border-primary/40",
    bgGradient: "bg-gradient-to-br from-white to-primary/5",
  },
  {
    icon: <Globe className="h-6 w-6 text-secondary" />,
    title: "Website Production",
    description: "Craft high-impact, conversion-optimised websites.",
    features: ["Fast, secure, and SEO-ready", "Conversion-focused design", "Easily maintainable"],
    link: "#services",
    borderColor: "border-secondary/20 hover:border-secondary/40",
    bgGradient: "bg-gradient-to-br from-white to-secondary/5",
  },
  {
    icon: <Code className="h-6 w-6 text-accent" />,
    title: "Web-Based Applications",
    description: "Build custom tools that work the way your business does.",
    features: ["Fully responsive interfaces", "Third-party integrations", "Security-first development"],
    link: "#services",
    borderColor: "border-accent/20 hover:border-accent/40",
    bgGradient: "bg-gradient-to-br from-white to-accent/5",
  },
]

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-gradient-to-r from-secondary/10 via-accent/5 to-primary/10 dark:from-secondary/20 dark:via-accent/10 dark:to-primary/20"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Three Core Services, One Unified Approach
          </h2>
          <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            We offer three primary services designed to build not only beautiful websites and efficient applications,
            but businesses that are sustainable, scalable, and future-ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
