"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Database, Cpu, Network, GitBranch, Layers, Code } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden px-4 py-12"
    >
      {/* Mobile-First Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,194,203,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,194,203,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "grid-move 15s linear infinite",
          }}
        ></div>
      </div>

      {/* Continuous Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-5 w-8 h-8 border border-secondary/20 rounded-lg rotate-45 animate-spin opacity-30"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute top-20 right-5 w-6 h-6 border border-secondary/30 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-5 w-4 h-4 bg-secondary/10 rounded rotate-12 animate-bounce opacity-35"></div>
        <div
          className="absolute bottom-10 right-10 w-10 h-10 border border-secondary/15 rounded rotate-45 animate-spin opacity-25"
          style={{ animationDuration: "25s" }}
        ></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Mobile-First Badge */}
          <Badge
            variant="secondary"
            className="bg-secondary/20 text-secondary border border-secondary/30 backdrop-blur-sm text-xs sm:text-sm px-3 py-1"
          >
            <Cpu className="w-3 h-3 mr-1" />
            Structured Digital Solutions
          </Badge>

          {/* Mobile-First Hero Title */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Structured, modern digital solutions to help your business
              <span className="block text-secondary animate-bounce mt-2"> work smarter</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From sole traders to SMEs, we design and build websites, web-based applications, and integrated tools that
              improve engagement, reduce admin burdens, and streamline processes.
            </p>
          </div>

          {/* Mobile-First CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-secondary hover:bg-secondary/90 text-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#contact")}
            >
              <Zap className="w-4 h-4 mr-2" />
              Start Your Shift
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#about")}
            >
              <Database className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Mobile-First Tech Showcase */}
          <div className="mt-12 relative">
            <div className="bg-secondary/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-secondary/20 shadow-2xl max-w-4xl mx-auto">
              {/* Mobile-First Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mb-6">
                {[
                  { icon: Database, delay: "0s" },
                  { icon: Network, delay: "0.5s" },
                  { icon: Code, delay: "1s" },
                  { icon: GitBranch, delay: "1.5s" },
                  { icon: Cpu, delay: "2s" },
                  { icon: Layers, delay: "2.5s" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary/20 rounded-lg p-3 sm:p-4 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 transform hover:scale-110 group relative"
                    style={{ animationDelay: item.delay }}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary group-hover:animate-pulse" />
                    <div
                      className="absolute top-1 right-1 w-1 h-1 bg-secondary/60 rounded-full animate-ping"
                      style={{ animationDelay: item.delay }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/20 rounded-full animate-ping"></div>

              {/* Mobile-First Tech Labels */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["Innovate", "Digitise", "Structure"].map((label, index) => (
                  <span
                    key={label}
                    className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full border border-secondary/40 animate-pulse"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
