"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Globe, Code, ArrowRight, ExternalLink, Layers } from "lucide-react"
import Image from "next/image"

export function CaseStudiesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="case-studies" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Mobile-First Continuous Animation Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(0,194,203,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(11,31,58,0.1) 50%, transparent 60%)
            `,
            backgroundSize: "60px 60px",
            animation: "diagonal-move 25s linear infinite",
          }}
        ></div>
      </div>

      {/* Continuous Data Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-5 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-secondary rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-10 right-5 w-2 h-2 bg-primary rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-First Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <Badge className="bg-secondary/20 text-primary border border-primary/20 text-xs sm:text-sm">
            <Layers className="w-3 h-3 mr-1" />
            Case Studies
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Digital Transformations in Action
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 max-w-3xl mx-auto">
            See how we've helped forward-thinking businesses make the shift
          </p>
        </div>

        {/* Mobile-First Case Studies */}
        <div className="space-y-8 sm:space-y-10">
          {/* Case Study 1 - Mobile-First Layout */}
          <Card className="border-0 shadow-2xl bg-white hover:scale-105 transition-all duration-500 backdrop-blur-sm border border-white/20 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Mobile-First Image Section */}
              <div className="bg-primary/10 p-6 sm:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:h-auto relative overflow-hidden order-1 lg:order-1">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-secondary rounded-full animate-bounce"></div>
                </div>
                <Image
                  src="/images/chester-referees-mockup.png"
                  alt="Chester Referees Association Website Mockup"
                  width={400}
                  height={240}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 max-w-sm sm:max-w-md"
                />
              </div>

              {/* Mobile-First Content Section */}
              <div className="flex flex-col justify-center p-6 sm:p-8 order-2 lg:order-2">
                <CardHeader className="pb-4 px-0">
                  <Badge className="w-fit mb-3 bg-secondary/20 text-secondary border border-secondary/30 text-xs">
                    <Database className="w-3 h-3 mr-1" />
                    Digital Transformation
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                    Chester Referees Association
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-primary/70 leading-relaxed">
                    Modernised digital presence with integrated membership platform for football referees.
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-primary mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-secondary" />
                        What We Delivered:
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Public-facing site for membership promotion",
                          "Admin dashboard for user management",
                          "Secure booking tools for officials",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-xs sm:text-sm text-primary/70 group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          >
                            <div
                              className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"
                              style={{ animationDelay: `${index * 0.2}s` }}
                            ></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile-First CTA */}
                    <Button
                      className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-105 transition-all duration-300 mt-4"
                      onClick={() => scrollToSection("#contact")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Case Study 2 - Mobile-First Layout (Reversed) */}
          <Card className="border-0 shadow-2xl bg-white hover:scale-105 transition-all duration-500 backdrop-blur-sm border border-white/20 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Mobile-First Content Section */}
              <div className="flex flex-col justify-center p-6 sm:p-8 order-2 lg:order-1">
                <CardHeader className="pb-4 px-0">
                  <Badge className="w-fit mb-3 bg-primary/20 text-primary border border-primary/30 text-xs">
                    <Globe className="w-3 h-3 mr-1" />
                    Website + Application
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                    Diva Fitness
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-primary/70 leading-relaxed">
                    Bold, on-brand site with integrated booking and member tracking for a boutique fitness studio.
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-primary mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-secondary" />
                        What We Delivered:
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Online booking with payment options",
                          "Session descriptions and pricing",
                          "Member progress tracking platform",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-xs sm:text-sm text-primary/70 group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          >
                            <div
                              className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"
                              style={{ animationDelay: `${index * 0.2}s` }}
                            ></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile-First CTA */}
                    <Button
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300 mt-4"
                      onClick={() => scrollToSection("#contact")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get Similar Results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>

              {/* Mobile-First Image Section */}
              <div className="bg-secondary/10 p-6 sm:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:h-auto relative overflow-hidden order-1 lg:order-2">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                </div>
                <Image
                  src="/images/diva-fitness-mockup.png"
                  alt="Diva Fitness Website Mockup"
                  width={400}
                  height={240}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 max-w-sm sm:max-w-md"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile-First Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-primary/10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4">
              Ready for your success story?
            </h3>
            <p className="text-primary/70 mb-6 text-sm sm:text-base">
              Let's create a digital transformation that delivers real results for your business.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              <Database className="w-4 h-4 mr-2" />
              Start Your Transformation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
