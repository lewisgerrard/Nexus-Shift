import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Palette,
  Code,
  HeadphonesIcon,
  TrendingUp,
  Zap,
  BarChart3,
  ArrowRight,
  Building2,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-accent via-accent/80 to-secondary/30 dark:from-accent dark:via-accent/80 dark:to-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-primary text-white dark:bg-primary dark:text-white">
              Our Approach
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
              We don't just "make websites" — we build <span className="text-secondary">systems that grow</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto dark:text-white/90">
              Our four-phase process ensures every project delivers lasting value and positions your business for
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Our Four-Phase Process
            </h2>
            <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
              Every project follows our proven methodology, ensuring transparency, quality, and results that last.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl dark:text-text-dark">1. Understand</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  We explore your business needs, audience, and infrastructure. We listen first, then diagnose with
                  intent.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl dark:text-text-dark">2. Design</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  Using systems thinking and digital-first UX principles, we design a framework tailored to your goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl dark:text-text-dark">3. Build</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  From websites to apps, we deliver robust, scalable solutions using trusted tools and clean code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl dark:text-text-dark">4. Support</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  We stay with you post-launch — optimising, training, and helping you evolve as your business grows.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Systems Thinking Explained */}
      <section className="py-12 md:py-20 bg-gradient-to-l from-primary/20 via-secondary/10 to-accent/20 dark:from-primary/30 dark:via-secondary/20 dark:to-accent/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Systems Thinking Explained
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  We define systems thinking as viewing your business operations as interconnected networks rather than
                  isolated departments or processes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Why It Matters</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">
                    This approach prevents silos and inefficiencies by ensuring every digital solution we create works
                    harmoniously with your existing operations and future growth plans.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Value to SMEs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-secondary mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Smarter, more informed decision-making
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-secondary mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Easier scaling without operational chaos
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <BarChart3 className="h-5 w-5 text-secondary mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Future-readiness for whatever comes next
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 via-primary/20 to-accent/10 rounded-2xl p-12 shadow-xl dark:from-secondary/20 dark:via-primary/30 dark:to-accent/20">
                <div className="relative">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                    <Zap className="h-10 w-10 text-white" />
                  </div>

                  {/* Connected nodes */}
                  <div className="grid grid-cols-3 gap-8 h-80">
                    <div className="flex flex-col justify-between">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Users className="h-8 w-8 text-secondary" />
                      </div>
                    </div>

                    <div className="flex items-center justify-center">{/* Central space for the main icon */}</div>

                    <div className="flex flex-col justify-between">
                      <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Code className="h-8 w-8 text-accent" />
                      </div>
                      <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 rotate-90">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Technology & Tools
            </h2>
            <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
              We use proven, reliable technologies that deliver results and scale with your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
              <CardHeader>
                <CardTitle className="text-lg dark:text-text-dark">Website Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-light/70 dark:text-text-dark/70">
                  <li>• Webflow</li>
                  <li>• WordPress</li>
                  <li>• Framer</li>
                  <li>• Custom headless builds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
              <CardHeader>
                <CardTitle className="text-lg dark:text-text-dark">Automation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-light/70 dark:text-text-dark/70">
                  <li>• Airtable</li>
                  <li>• Notion</li>
                  <li>• Zapier</li>
                  <li>• Custom API integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
              <CardHeader>
                <CardTitle className="text-lg dark:text-text-dark">Development & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-light/70 dark:text-text-dark/70">
                  <li>• Firebase / Supabase</li>
                  <li>• OpenAI API</li>
                  <li>• Claude integrations</li>
                  <li>• Custom development stacks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits to Clients */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-secondary/20 via-accent/10 to-primary/20 dark:from-secondary/30 dark:via-accent/20 dark:to-primary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              What Clients Gain
            </h2>
            <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
              Working with Nexus Shift means more than just getting a website or app — it means transforming how your
              business operates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Faster Decision-Making</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  With better data flow and clearer processes, your team can make informed decisions quickly and
                  confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Structure That Grows</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Our solutions are built to scale with you, so you won't outgrow your systems as your business expands.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Reduced Duplication</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Eliminate redundant processes and manual work through smart automation and integrated systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Measurable Results</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Track your progress with analytics and dashboards that show real business impact, not just vanity
                  metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Ready to experience the Nexus Shift approach?
            </h2>
            <p className="text-lg text-text-light/70 max-w-2xl mx-auto dark:text-text-dark/70">
              Let's discuss how our structured methodology can help your business achieve sustainable digital
              transformation.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
