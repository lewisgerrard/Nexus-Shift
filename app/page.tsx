import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Target, Award, CheckCircle, ArrowRight, Zap, Globe, Code } from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary/20 dark:from-primary dark:via-primary/90 dark:to-secondary/20">
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
                  We help innovative SMEs scale effectively by aligning their operations with digital systems,
                  AI-powered tools, and structured business thinking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
                  <Link href="/contact">
                    Start Your Shift
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
                  asChild
                >
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

      {/* Key Services Overview */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-secondary/10 via-accent/5 to-primary/10 dark:from-secondary/20 dark:via-accent/10 dark:to-primary/20">
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
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all bg-gradient-to-br from-white to-primary/5 flex flex-col h-full dark:bg-surface-dark dark:from-surface-dark dark:to-primary/10">
              <CardHeader className="flex-grow-0 h-48">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2 dark:text-text-dark">Digital Transformation Consultancy</CardTitle>
                <CardDescription className="flex-grow dark:text-text-dark/70">
                  Optimise your business processes with a strategy-first approach.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col">
                <ul className="space-y-2 text-sm text-text-light/70 mb-4 flex-grow dark:text-text-dark/70">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Operational audits and process mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Digital tooling recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalable growth roadmaps
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#consultancy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl hover:border-secondary/40 transition-all bg-gradient-to-br from-white to-secondary/5 flex flex-col h-full dark:bg-surface-dark dark:from-surface-dark dark:to-secondary/10">
              <CardHeader className="flex-grow-0 h-48">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="mb-2 dark:text-text-dark">Website Production</CardTitle>
                <CardDescription className="flex-grow dark:text-text-dark/70">
                  Craft high-impact, conversion-optimised websites.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col">
                <ul className="space-y-2 text-sm text-text-light/70 mb-4 flex-grow dark:text-text-dark/70">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast, secure, and SEO-ready
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conversion-focused design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easily maintainable
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#website">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl hover:border-secondary/40 transition-all bg-gradient-to-br from-white to-secondary/5 flex flex-col h-full dark:bg-surface-dark dark:from-surface-dark dark:to-secondary/10">
              <CardHeader className="flex-grow-0 h-48">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mb-2 dark:text-text-dark">Web-Based Applications</CardTitle>
                <CardDescription className="flex-grow dark:text-text-dark/70">
                  Build custom tools that work the way your business does.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col">
                <ul className="space-y-2 text-sm text-text-light/70 mb-4 flex-grow dark:text-text-dark/70">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fully responsive interfaces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Third-party integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security-first development
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#applications">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/5 dark:from-secondary/20 dark:via-primary/10 dark:to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              The Nexus Shift Difference
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Engineer's Mindset</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Grounded in efficiency and accuracy</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Systems Thinking</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Long-term scalable solutions</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Digital-First Delivery</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Supporting sustainable growth</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-secondary/60 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-light dark:text-text-dark">Affordable Packages</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Tailored for SMEs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 md:py-20 bg-gradient-to-l from-primary/10 via-secondary/5 to-primary/5 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/10">
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
            <Card className="border-0 shadow-lg dark:bg-surface-dark">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 mb-4 flex items-center justify-center h-64 dark:from-primary/20 dark:to-secondary/30">
                  <Image
                    src="/images/chester-referees-mockup.png"
                    alt="Chester Referees Association Website Mockup"
                    width={400}
                    height={240}
                    className="w-full h-full object-contain"
                  />
                </div>
                <Badge variant="outline" className="w-fit mb-2">
                  Digital Transformation
                </Badge>
                <CardTitle className="dark:text-text-dark">Chester Referees Association</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  Modernised digital presence with integrated membership platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-text-light/70 mb-4 dark:text-text-dark/70">
                  <li>• Public-facing site for membership promotion</li>
                  <li>• Admin dashboard for user management</li>
                  <li>• Secure booking tools for officials</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/case-studies#chester">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-surface-dark">
              <CardHeader>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/20 rounded-lg p-8 mb-4 flex items-center justify-center h-64 dark:from-secondary/20 dark:to-primary/30">
                  <Image
                    src="/images/diva-fitness-mockup.png"
                    alt="Diva Fitness Website Mockup"
                    width={400}
                    height={240}
                    className="w-full h-full object-contain"
                  />
                </div>
                <Badge variant="outline" className="w-fit mb-2">
                  Website + Application
                </Badge>
                <CardTitle className="dark:text-text-dark">Diva Fitness</CardTitle>
                <CardDescription className="dark:text-text-dark/70">
                  Bold, on-brand site with integrated booking and member tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-text-light/70 mb-4 dark:text-text-dark/70">
                  <li>• Online booking with payment options</li>
                  <li>• Session descriptions and pricing</li>
                  <li>• Member progress tracking platform</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/case-studies#diva">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">See All Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-secondary via-secondary/90 to-primary/30 dark:from-secondary dark:via-secondary/90 dark:to-primary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-white mb-6 dark:text-white">
              "Nexus Shift helped us rebuild from the ground up — visually, operationally, and strategically."
            </blockquote>
            <cite className="text-white/80 dark:text-white/80">— Satisfied Client</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Ready to take your business to the next level?
            </h2>
            <p className="text-lg text-text-light/70 max-w-2xl mx-auto dark:text-text-dark/70">
              Join our growing list of forward-thinking businesses who've already made the shift.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Get in Touch
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
