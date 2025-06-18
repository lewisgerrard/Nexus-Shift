import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroHome() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90 dark:from-primary dark:via-primary/95 dark:to-primary/90">
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
              <div className="relative"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
