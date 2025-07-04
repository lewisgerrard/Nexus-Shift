"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, DollarSign, TrendingUp, Building2, Code } from "lucide-react"

interface AboutBlockProps {
  onStartConversation: () => void
}

export function AboutBlock({ onStartConversation }: AboutBlockProps) {
  return (
    <section id="about" className="py-12 md:py-20 bg-white dark:bg-background-dark">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-secondary text-primary dark:bg-secondary dark:text-primary"
          >
            About Nexus Shift
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-text-light sm:text-5xl md:text-6xl dark:text-text-dark">
            Clarity through <span className="text-secondary">structure</span>
          </h1>
          <p className="text-xl text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            Founded by a systems engineer with a passion for problem-solving, we approach every project with the mindset
            of an architect — understanding the foundations before ever laying down digital bricks.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                Who We Are
              </h2>
              <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                At Nexus Shift, we believe in clarity through structure. Our founder brings a unique background as a
                systems engineer with experience across digital consultancy, tech, and process design.
              </p>
              <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                We understand the importance of merging technical engineering precision with user-first design
                principles. This combination allows us to build solutions that are not only technically sound but also
                intuitive and effective for end users.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/5 rounded-2xl p-12 shadow-xl dark:from-primary/20 dark:via-secondary/30 dark:to-primary/10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Code className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-secondary/30 to-primary/30 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Our Mission</h3>
              <p className="text-text-light/70 dark:text-text-dark/70">
                To help ambitious small-to-medium enterprises unlock transformative growth by aligning their goals with
                efficient, scalable digital systems.
              </p>
            </div>
          </Card>

          <Card className="border-0 shadow-lg p-8 dark:bg-surface-dark">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Our Vision</h3>
              <p className="text-text-light/70 dark:text-text-dark/70">
                A future where even small businesses operate with the intelligence, structure, and digital confidence of
                enterprise-level organisations.
              </p>
            </div>
          </Card>
        </div>

        {/* Why Nexus Shift */}
        <div className="max-w-4xl mx-auto space-y-12 mb-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Why "Nexus Shift"?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Nexus</h3>
              <p className="text-text-light/70 dark:text-text-dark/70">
                We sit at the intersection (the nexus) of people, process, and technology. This convergence point allows
                us to understand how these three critical elements work together to create successful digital
                transformations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Shift</h3>
              <p className="text-text-light/70 dark:text-text-dark/70">
                We help businesses shift into a smarter, more structured future. This isn't just about adopting new
                technology — it's about fundamentally changing how you operate for sustainable growth.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 p-8 rounded-2xl border-l-4 border-secondary dark:from-primary/20 dark:via-secondary/20 dark:to-primary/10">
            <p className="text-xl font-semibold text-text-light italic dark:text-text-dark">
              We're a consultancy that sits at the intersection of strategic insight and hands-on technical build.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Our Values
          </h2>
          <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            These principles guide every project we undertake and every relationship we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Clarity</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                In communication, structure, and outcomes. We believe transparency leads to better results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Affordability</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                Always delivering value that makes commercial sense for growing businesses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Strategic Design</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                Ensuring every product and service is aligned with a clear business goal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center p-6 dark:bg-surface-dark">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Measurable Impact</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                From better decision-making to improved operations — results you can measure.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Ready to work with a team that gets it?
          </h2>
          <p className="text-lg text-text-light/70 max-w-2xl mx-auto dark:text-text-dark/70">
            Let's discuss how our structured approach can help your business achieve its digital transformation goals.
          </p>
          <Button size="lg" className="text-lg px-8" onClick={onStartConversation}>
            Start the Conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
