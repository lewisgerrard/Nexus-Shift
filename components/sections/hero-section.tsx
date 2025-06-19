"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Globe, Building2, Target, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  onGetStarted: () => void
  onLearnMore: () => void
}

export function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/80 to-secondary/30 dark:from-primary dark:via-primary/90 dark:to-secondary/20"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="w-fit bg-secondary text-primary dark:bg-secondary dark:text-primary"
              >
                Digital Transformation, Engineered for Growth
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
                Where digital transformation meets
                <span className="text-secondary"> structured thinking</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl dark:text-white/90">
                We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered
                tools, and structured business thinking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" onClick={onGetStarted}>
                Start Your Shift
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
                onClick={onLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/20 rounded-2xl p-12 shadow-2xl dark:from-secondary/20 dark:via-accent/30 dark:to-primary/20">
                <div className="grid grid-cols-3 gap-8 opacity-20">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-14 h-14 bg-white/25 rounded-lg flex items-center justify-center">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-18 h-18 bg-white/35 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-9 w-9 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                    <ArrowRight className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
