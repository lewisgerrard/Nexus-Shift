import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

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
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8 lg:p-12 shadow-xl dark:from-primary/20 dark:to-secondary/30">
                <div className="flex items-center justify-center h-96">
                  <div className="relative">
                    <Image
                      src="/images/chester-referees-mockup.png"
                      alt="Chester Referees Association Website Mockup"
                      width={600}
                      height={400}
                      className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
                    />
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
              <div className="bg-gradient-to-br from-secondary/5 via-accent/10 to-primary/5 rounded-2xl p-8 lg:p-12 shadow-xl dark:from-secondary/10 dark:via-accent/15 dark:to-primary/10">
                {/* Desktop view - Enhanced 3D collage layout */}
                <div
                  className="hidden md:block relative h-96 lg:h-[36rem] xl:h-[40rem]"
                  style={{ perspective: "1200px" }}
                >
                  {/* Premium background surface with depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-25 to-blue-50 rounded-3xl opacity-80 dark:from-gray-800 dark:via-purple-900/30 dark:to-blue-900/30"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-white/40 via-purple-50/60 to-blue-50/40 rounded-2xl backdrop-blur-sm dark:from-gray-700/40 dark:via-purple-800/30 dark:to-blue-800/30"></div>

                  {/* Laptop mockup - 3/4 view angle */}
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{
                      transform: "translate(-50%, -60%) rotateX(25deg) rotateY(-25deg) rotateZ(2deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="w-80 lg:w-96 xl:w-[28rem] h-48 lg:h-56 xl:h-64 bg-gray-900 rounded-t-2xl p-3 lg:p-4"
                      style={{
                        boxShadow:
                          "0 40px 80px -20px rgba(0, 0, 0, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                        <Image
                          src="/images/diva-fitness-website.jpg"
                          alt="Diva Fitness Website Desktop"
                          width={448}
                          height={256}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* Enhanced screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="w-80 lg:w-96 xl:w-[28rem] h-4 lg:h-5 bg-gray-700 rounded-b-2xl -mt-1 relative shadow-2xl">
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 lg:w-10 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                    {/* Enhanced laptop reflection */}
                    <div
                      className="absolute top-full left-0 w-full h-12 bg-gradient-to-b from-gray-900/30 to-transparent rounded-b-2xl opacity-40"
                      style={{ transform: "rotateX(90deg) translateZ(-6px)" }}
                    ></div>
                  </div>

                  {/* Left mobile mockup - Enhanced inward tilt */}
                  <div
                    className="absolute left-4 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 z-30"
                    style={{
                      transform: "translateY(-40%) rotateX(15deg) rotateY(25deg) rotateZ(-8deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="w-32 lg:w-36 xl:w-40 h-64 lg:h-72 xl:h-80 bg-black rounded-[2.5rem] p-1"
                      style={{
                        boxShadow:
                          "0 35px 70px -15px rgba(0, 0, 0, 0.6), 0 15px 30px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))",
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative">
                        {/* iPhone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 lg:w-12 h-3 lg:h-4 bg-black rounded-b-2xl z-10"></div>
                        <Image
                          src="/images/diva-fitness-mobile-1.png"
                          alt="Diva Fitness Mobile View 1"
                          width={160}
                          height={320}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* Enhanced screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-white/15 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    {/* Enhanced mobile reflection */}
                    <div
                      className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-black/25 to-transparent rounded-b-[2.5rem] opacity-50"
                      style={{ transform: "rotateX(90deg) translateZ(-4px)" }}
                    ></div>
                  </div>

                  {/* Right mobile mockup - Enhanced inward tilt */}
                  <div
                    className="absolute right-4 lg:right-8 xl:right-12 top-1/2 transform -translate-y-1/2 z-30"
                    style={{
                      transform: "translateY(-40%) rotateX(15deg) rotateY(-25deg) rotateZ(8deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="w-32 lg:w-36 xl:w-40 h-64 lg:h-72 xl:h-80 bg-black rounded-[2.5rem] p-1"
                      style={{
                        boxShadow:
                          "0 35px 70px -15px rgba(0, 0, 0, 0.6), 0 15px 30px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))",
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative">
                        {/* iPhone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 lg:w-12 h-3 lg:h-4 bg-black rounded-b-2xl z-10"></div>
                        <Image
                          src="/images/diva-fitness-mobile-2.png"
                          alt="Diva Fitness Mobile View 2"
                          width={160}
                          height={320}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* Enhanced screen reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-white/15 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    {/* Enhanced mobile reflection */}
                    <div
                      className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-black/25 to-transparent rounded-b-[2.5rem] opacity-50"
                      style={{ transform: "rotateX(90deg) translateZ(-4px)" }}
                    ></div>
                  </div>

                  {/* Enhanced ambient lighting and depth */}
                  <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-gray-900/10 to-transparent rounded-full blur-3xl opacity-40"></div>
                </div>

                {/* Mobile view - swipeable carousel */}
                <div className="md:hidden">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 p-8">
                      {/* Laptop slide */}
                      <div className="flex-none snap-center">
                        <div className="flex justify-center">
                          <div className="w-80 h-48 bg-gray-900 rounded-t-xl p-3 shadow-xl transform rotate-1">
                            <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                              <Image
                                src="/images/diva-fitness-website.jpg"
                                alt="Diva Fitness Website Desktop"
                                width={320}
                                height={192}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile slide 1 */}
                      <div className="flex-none snap-center">
                        <div className="flex justify-center">
                          <div className="w-32 h-64 bg-black rounded-3xl p-1 shadow-xl transform -rotate-2">
                            <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-black rounded-b-xl z-10"></div>
                              <Image
                                src="/images/diva-fitness-mobile-1.png"
                                alt="Diva Fitness Mobile View 1"
                                width={128}
                                height={256}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile slide 2 */}
                      <div className="flex-none snap-center">
                        <div className="flex justify-center">
                          <div className="w-32 h-64 bg-black rounded-3xl p-1 shadow-xl transform rotate-2">
                            <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-black rounded-b-xl z-10"></div>
                              <Image
                                src="/images/diva-fitness-mobile-2.png"
                                alt="Diva Fitness Mobile View 2"
                                width={128}
                                height={256}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scroll indicators */}
                    <div className="flex justify-center space-x-2 pb-4">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
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
