import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Globe, Code, Layers, ArrowRight } from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-secondary/80 to-primary/30 dark:from-secondary dark:via-secondary/80 dark:to-primary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-primary text-white dark:bg-primary dark:text-white">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
              We don't just deliver websites — we design <span className="text-accent">intelligent systems</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto dark:text-white/90">
              Our services are customised based on where your business is in its digital journey, from initial strategy
              to full-scale implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Transformation Consultancy */}
      <section id="consultancy" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Digital Transformation Consultancy
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  We work alongside your leadership to identify inefficiencies, streamline operations, and prepare your
                  business for scale.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Operational audits and process mapping
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Recommendations for digital tooling and automation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">Roadmaps for scalable growth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Implementation and training support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-0 shadow-xl p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  Perfect for businesses that:
                </h3>
                <ul className="space-y-3 text-text-light/70 dark:text-text-dark/70">
                  <li>• Feel overwhelmed by manual processes</li>
                  <li>• Want to scale but lack the systems</li>
                  <li>• Need strategic guidance on digital tools</li>
                  <li>• Want to future-proof their operations</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Production */}
      <section
        id="website"
        className="py-12 md:py-20 bg-gradient-to-l from-accent/20 via-secondary/10 to-primary/20 dark:from-accent/30 dark:via-secondary/20 dark:to-primary/30"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Card className="border-0 shadow-xl p-8 order-2 lg:order-1 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Our websites are:</h3>
                <ul className="space-y-3 text-text-light/70 dark:text-text-dark/70">
                  <li>• Fast, secure, and SEO-ready</li>
                  <li>• Visually aligned with your brand</li>
                  <li>• Structured to drive conversions</li>
                  <li>• Easily maintainable and scalable</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Website Production
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  From wireframe to launch, we design and build websites that work as hard as you do.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Our Process:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">Wireframing and UX planning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">SEO optimisation from day one</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Custom WordPress, Webflow, or headless builds
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">Post-launch maintenance packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web-Based Applications */}
      <section id="applications" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                  Web-Based Applications
                </h2>
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                  Tailored platforms built around your workflows. Whether you need a member portal, training dashboard,
                  or custom CRM, we deliver solutions that fit your business perfectly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">We Specialise In:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">Scalable apps for internal teams</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Member dashboards and client portals
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Appointment systems, CRMs, booking tools
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-text-light/70 dark:text-text-dark/70">
                      Integration with existing systems (Stripe, Google Calendar)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-0 shadow-xl p-8 dark:bg-surface-dark">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">What You Get:</h3>
                <ul className="space-y-3 text-text-light/70 dark:text-text-dark/70">
                  <li>• Fully responsive, user-friendly interfaces</li>
                  <li>• Integration with 3rd-party tools and APIs</li>
                  <li>• Scalable architecture for long-term use</li>
                  <li>• Security-first coding and deployment</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Solutions */}
      <section
        id="combined"
        className="py-12 md:py-20 bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 dark:from-primary/30 dark:via-accent/25 dark:to-secondary/30"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                Combined Solutions
              </h2>
              <p className="text-xl text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
                Looking for a complete solution? Our end-to-end service combines all three — strategy, website, and
                custom tools — into one powerful digital ecosystem.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
                <CardContent className="text-center space-y-4">
                  <h3 className="font-semibold text-text-light dark:text-text-dark">Strategy + Website</h3>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                    Strategic consultation followed by a website that supports your business goals
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
                <CardContent className="text-center space-y-4">
                  <h3 className="font-semibold text-text-light dark:text-text-dark">Website + Application</h3>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                    Public-facing website with integrated custom tools for your operations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg p-6 dark:bg-surface-dark">
                <CardContent className="text-center space-y-4">
                  <h3 className="font-semibold text-text-light dark:text-text-dark">Full Ecosystem</h3>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                    Complete digital transformation with ongoing optimisation and training
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Not sure what fits your business needs best?
            </h2>
            <p className="text-lg text-text-light/70 max-w-2xl mx-auto dark:text-text-dark/70">
              Let's map it out together. We'll help you understand exactly what your business needs to reach the next
              level.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Contact Us for a Free Discovery Call
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
