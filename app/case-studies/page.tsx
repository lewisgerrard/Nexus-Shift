import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Calendar, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-accent/30 dark:from-primary dark:via-primary/90 dark:to-accent/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-secondary text-primary dark:bg-secondary dark:text-primary"
            >
              Case Studies
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
              Real results for <span className="text-secondary">real businesses</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto dark:text-white/90">
              Take a look at how we've helped SMEs create infrastructure for growth, credibility, and operational
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Chester Referees Association */}
      <section id="chester" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Digital Transformation
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Chester Referees Association
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  We modernised CRA's digital presence with a new website and an integrated membership platform,
                  creating a comprehensive digital hub for football officials.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Challenge</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">
                    Chester Referees Association needed to improve their online presence and create a digital hub for
                    members while reducing administrative burden on volunteers.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">What We Delivered</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Public-facing site to promote membership and events
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Admin dashboard for managing users and roles
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Secure log-in and booking tools for officials
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Result</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-0 shadow-sm p-4 dark:bg-surface-dark">
                      <CardContent className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-secondary" />
                        <div>
                          <div className="font-semibold text-text-light dark:text-text-dark">Greater Engagement</div>
                          <div className="text-sm text-text-light/70 dark:text-text-dark/70">
                            Increased user participation
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm p-4 dark:bg-surface-dark">
                      <CardContent className="flex items-center space-x-3">
                        <Calendar className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-semibold text-text-light dark:text-text-dark">Reduced Admin</div>
                          <div className="text-sm text-text-light/70 dark:text-text-dark/70">Streamlined processes</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-12 shadow-xl dark:from-primary/20 dark:to-secondary/30">
                <div className="grid grid-cols-2 gap-8 h-96">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-primary/30 rounded w-3/4"></div>
                      <div className="h-3 bg-secondary/30 rounded w-1/2"></div>
                      <div className="h-3 bg-accent/30 rounded w-2/3"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-primary/40 rounded"></div>
                      <div className="w-8 h-8 bg-secondary/40 rounded"></div>
                      <div className="w-8 h-8 bg-accent/40 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center shadow-lg">
                      <Calendar className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diva Fitness */}
      <section
        id="diva"
        className="py-12 md:py-20 bg-gradient-to-l from-secondary/10 via-accent/5 to-primary/10 dark:from-secondary/20 dark:via-accent/10 dark:to-primary/20"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/20 rounded-2xl p-12 shadow-xl dark:from-secondary/20 dark:to-accent/30">
                <div className="grid grid-cols-2 gap-8 h-96">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Shield className="h-10 w-10 text-secondary" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-secondary/30 rounded w-full"></div>
                      <div className="h-3 bg-accent/30 rounded w-3/4"></div>
                      <div className="h-3 bg-primary/30 rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-secondary/20 rounded"></div>
                      <div className="h-12 bg-accent/20 rounded"></div>
                      <div className="h-12 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Website + Application
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Diva Fitness
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  We built a bold, on-brand site for a fitness studio offering both personal training and membership
                  access, complete with integrated booking and tracking systems.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Challenge</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">
                    Diva Fitness needed a professional website that reflected their personal training brand while
                    automating bookings and membership tracking.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">What We Delivered</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Online booking system with staged payment options
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Session descriptions and pricing tables
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-text-light/70 dark:text-text-dark/70">
                        Member access for client progress tracking
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">The Result</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-0 shadow-sm p-4 dark:bg-surface-dark">
                      <CardContent className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-accent" />
                        <div>
                          <div className="font-semibold text-text-light dark:text-text-dark">Professional Image</div>
                          <div className="text-sm text-text-light/70 dark:text-text-dark/70">
                            Enhanced brand credibility
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm p-4 dark:bg-surface-dark">
                      <CardContent className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-secondary" />
                        <div>
                          <div className="font-semibold text-text-light dark:text-text-dark">
                            Streamlined Operations
                          </div>
                          <div className="text-sm text-text-light/70 dark:text-text-dark/70">Automated onboarding</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-text-light/70 dark:text-text-dark/70">
              We're currently working on new tools for coaches, consultants, and creative professionals. Check back soon
              to see how we're helping more businesses transform their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
