"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/ui/cta"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Building2, Target, Award, CheckCircle, ArrowRight, Zap, Globe, Code } from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"
import { HeroHome } from "@/components/sections/hero-home"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      <HeroHome />

      {/* Key Services Overview */}
      <section className="py-12 md:py-20 bg-surface-light dark:bg-background-dark relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                Three Core Services, One Unified Approach
              </h2>
              <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
                We offer three primary services designed to build not only beautiful websites and efficient
                applications, but businesses that are sustainable, scalable, and future-ready.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal direction="up" delay={300}>
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 bg-primary flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
                <CardHeader className="flex-grow-0 h-56">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="mb-4 text-white">Digital Transformation</CardTitle>
                  <CardDescription className="flex-grow text-white/70">
                    Streamline your business operations through strategic digital integration. We analyze your
                    processes, identify inefficiencies, and implement tailored solutions that reduce costs and drive
                    sustainable growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col">
                  <ul className="space-y-2 text-sm text-white/70 mb-4 flex-grow">
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Operational audits and process mapping
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Digital tooling recommendations
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scalable growth roadmaps
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/services#consultancy">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 bg-primary flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
                <CardHeader className="flex-grow-0 h-56">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="mb-4 text-white">Website Production</CardTitle>
                  <CardDescription className="flex-grow text-white/70">
                    Create powerful digital experiences that convert visitors into customers. Our websites combine
                    stunning design with technical excellence, featuring fast performance and conversion-focused user
                    journeys.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col">
                  <ul className="space-y-2 text-sm text-white/70 mb-4 flex-grow">
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fast, secure, and SEO-ready
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Conversion-focused design
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Easily maintainable
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/services#website">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={700}>
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 bg-primary flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
                <CardHeader className="flex-grow-0 h-56">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="mb-4 text-white">Web-Based Applications</CardTitle>
                  <CardDescription className="flex-grow text-white/70">
                    Develop custom software solutions that align with your unique business requirements. We build
                    scalable applications that automate processes, improve efficiency, and grow with your business.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col">
                  <ul className="space-y-2 text-sm text-white/70 mb-4 flex-grow">
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fully responsive interfaces
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Third-party integrations
                    </li>
                    <li className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Security-first development
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/services#applications">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Nexus Shift Difference</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center space-y-4 group cursor-default">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                  Engineer's Mindset
                </h3>
                <p className="text-sm text-white/70">Grounded in efficiency and accuracy</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="text-center space-y-4 group cursor-default">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                  Systems Thinking
                </h3>
                <p className="text-sm text-white/70">Long-term scalable solutions</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={700}>
              <div className="text-center space-y-4 group cursor-default">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                  Digital-First Delivery
                </h3>
                <p className="text-sm text-white/70">Supporting sustainable growth</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={900}>
              <div className="text-center space-y-4 group cursor-default">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                  Affordable Packages
                </h3>
                <p className="text-sm text-white/70">Tailored for SMEs</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 md:py-20 bg-surface-light dark:bg-background-dark relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                Featured Case Studies
              </h2>
              <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                See how we've helped forward-thinking businesses make the shift
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal direction="left" delay={400}>
              <Card className="border-0 shadow-lg bg-primary dark:bg-primary transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                <CardHeader>
                  <div className="bg-accent rounded-lg p-8 mb-4 flex items-center justify-center h-64 overflow-hidden">
                    <Image
                      src="/images/chester-referees-mockup.png"
                      alt="Chester Referees Association Website Mockup"
                      width={400}
                      height={240}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <Badge className="w-fit mb-2 bg-secondary text-primary border-0">Digital Transformation</Badge>
                  <CardTitle className="text-white dark:text-white group-hover:text-secondary transition-colors duration-300">
                    Chester Referees Association
                  </CardTitle>
                  <CardDescription className="text-white/70 dark:text-white/70">
                    Modernised digital presence with integrated membership platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white/70 mb-4 dark:text-white/70">
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Public-facing site for membership promotion
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Admin dashboard for user management
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Secure booking tools for officials
                    </li>
                  </ul>
                  <CTA href="/case-studies#chester">View Case Study</CTA>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600}>
              <Card className="border-0 shadow-lg bg-primary dark:bg-primary transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                <CardHeader>
                  <div className="bg-accent rounded-lg p-8 mb-4 flex items-center justify-center h-64 overflow-hidden">
                    <Image
                      src="/images/diva-fitness-mockup.png"
                      alt="Diva Fitness Website Mockup"
                      width={400}
                      height={240}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <Badge className="w-fit mb-2 bg-secondary text-primary border-0">Website + Application</Badge>
                  <CardTitle className="text-white dark:text-white group-hover:text-secondary transition-colors duration-300">
                    Diva Fitness
                  </CardTitle>
                  <CardDescription className="text-white/70 dark:text-white/70">
                    Bold, on-brand site with integrated booking and member tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white/70 mb-4 dark:text-white/70">
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Online booking with payment options
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Session descriptions and pricing
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200">
                      • Member progress tracking platform
                    </li>
                  </ul>
                  <CTA href="/case-studies#diva">View Case Study</CTA>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={800}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/case-studies">See All Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to take your business to the next level?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Join our growing list of forward-thinking businesses who've already made the shift.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
