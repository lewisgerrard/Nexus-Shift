"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { FloatingElements } from "@/components/ui/floating-elements"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroHome() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-12 md:py-20 bg-primary overflow-hidden">
      <FloatingElements />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={200}>
              <Badge
                variant="secondary"
                className="w-fit bg-secondary text-primary dark:bg-secondary dark:text-primary"
              >
                Digital Transformation, Engineered for Growth
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
                Where digital transformation meets
                <span className="text-secondary"> structured thinking</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-xl text-white/90 max-w-2xl dark:text-white/90">
                We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered
                tools, and structured business thinking.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Shift
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={600}>
            <div className="relative">
              <div
                className="relative bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 backdrop-blur-sm transform transition-all duration-1000"
                style={{
                  transform: `translateY(${scrollY * 0.1}px) rotateX(${scrollY * 0.02}deg)`,
                }}
              >
                {/* Animated Tech Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Database Icon */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="w-8 h-8 bg-secondary rounded border-2 border-secondary/50">
                      <div className="w-full h-2 bg-secondary/30 mt-1 animate-pulse"></div>
                      <div className="w-full h-2 bg-secondary/30 mt-1 animate-pulse delay-100"></div>
                    </div>
                  </div>

                  {/* Network Nodes */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center relative hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-secondary/60 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-secondary/60 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 left-1/2 w-px h-4 bg-secondary/40 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  </div>

                  {/* Analytics Chart */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-end justify-center space-x-1 hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="w-2 h-4 bg-secondary/60 rounded-t animate-bounce delay-100"></div>
                    <div className="w-2 h-6 bg-secondary rounded-t animate-bounce delay-200"></div>
                    <div className="w-2 h-3 bg-secondary/60 rounded-t animate-bounce delay-300"></div>
                    <div className="w-2 h-5 bg-secondary/80 rounded-t animate-bounce delay-400"></div>
                  </div>

                  {/* Process Flow */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <div className="w-4 h-px bg-secondary animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-secondary/60 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>

                  {/* AI/ML Brain */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="relative">
                      <div className="w-6 h-6 border-2 border-secondary rounded-full animate-spin-slow"></div>
                      <div className="absolute top-1 left-1 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
                      <div className="absolute top-2 right-1 w-1 h-1 bg-secondary rounded-full animate-ping delay-100"></div>
                      <div className="absolute bottom-1 left-2 w-1 h-1 bg-secondary rounded-full animate-ping delay-200"></div>
                    </div>
                  </div>

                  {/* Systems Integration */}
                  <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-secondary rounded animate-pulse"></div>
                      <div className="w-2 h-2 bg-secondary/60 rounded animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-secondary/60 rounded animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-secondary rounded animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/20 rounded-full animate-bounce delay-1000"></div>

                {/* Tech Labels */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full hover:bg-secondary/40 transition-colors duration-300 cursor-default">
                    Innovate
                  </span>
                  <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full hover:bg-secondary/40 transition-colors duration-300 cursor-default">
                    Digitise
                  </span>
                  <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full hover:bg-secondary/40 transition-colors duration-300 cursor-default">
                    Structure
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
