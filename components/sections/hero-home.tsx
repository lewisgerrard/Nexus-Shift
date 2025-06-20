import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroHome() {
  return (
    <section className="py-12 md:py-20 bg-primary">
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
              <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
                <Link href="/contact">
                  Start Your Shift
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 backdrop-blur-sm">
                    {/* Main Tech Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {/* Database Icon */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-secondary rounded border-2 border-secondary/50">
                          <div className="w-full h-2 bg-secondary/30 mt-1"></div>
                          <div className="w-full h-2 bg-secondary/30 mt-1"></div>
                        </div>
                      </div>

                      {/* Network Nodes */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center relative">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-secondary/60 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-secondary/60 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-px h-4 bg-secondary/40 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                      </div>

                      {/* Analytics Chart */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-end justify-center space-x-1">
                        <div className="w-2 h-4 bg-secondary/60 rounded-t"></div>
                        <div className="w-2 h-6 bg-secondary rounded-t"></div>
                        <div className="w-2 h-3 bg-secondary/60 rounded-t"></div>
                        <div className="w-2 h-5 bg-secondary/80 rounded-t"></div>
                      </div>

                      {/* Process Flow */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          <div className="w-4 h-px bg-secondary"></div>
                          <div className="w-3 h-3 bg-secondary/60 rounded-full"></div>
                        </div>
                      </div>

                      {/* AI/ML Brain */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-6 h-6 border-2 border-secondary rounded-full"></div>
                          <div className="absolute top-1 left-1 w-1 h-1 bg-secondary rounded-full"></div>
                          <div className="absolute top-2 right-1 w-1 h-1 bg-secondary rounded-full"></div>
                          <div className="absolute bottom-1 left-2 w-1 h-1 bg-secondary rounded-full"></div>
                        </div>
                      </div>

                      {/* Systems Integration */}
                      <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-2 h-2 bg-secondary rounded"></div>
                          <div className="w-2 h-2 bg-secondary/60 rounded"></div>
                          <div className="w-2 h-2 bg-secondary/60 rounded"></div>
                          <div className="w-2 h-2 bg-secondary rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>

                    {/* Tech Labels */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full">Innovate</span>
                      <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full">Digitise</span>
                      <span className="px-3 py-1 bg-secondary/30 text-white text-xs rounded-full">Structure</span>
                    </div>
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
