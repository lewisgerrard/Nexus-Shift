"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Globe, Code, ArrowRight, Zap } from "lucide-react"

export function ServicesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Mobile-First Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00C2CB 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Continuous Data Flow Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-5 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute top-10 left-12 w-16 h-px bg-secondary animate-pulse"></div>
        <div
          className="absolute top-10 left-32 w-2 h-2 bg-primary rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 right-5 w-2 h-2 bg-secondary rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-12 w-16 h-px bg-secondary animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-10 right-32 w-2 h-2 bg-primary rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-First Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm">
            <Code className="w-3 h-3 mr-1" />
            Core Services
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Structured, Modern Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-primary/70 max-w-3xl mx-auto">
            From sole traders to SMEs, we design and build websites, web-based applications, and combination solutions
            that improve engagement, reduce admin burdens, and streamline processes.
          </p>
        </div>

        {/* Mobile-First Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Globe,
              title: "Websites",
              description:
                "Create engaging digital experiences that connect with your audience. Our websites are designed to improve engagement while being easy to maintain and update.",
              features: ["Engagement-focused design", "Fast, secure, and accessible", "Easy to maintain and update"],
              color: "secondary",
              delay: "0s",
            },
            {
              icon: Code,
              title: "Web-Based Applications",
              description:
                "Build custom web-based applications tailored to your specific business needs. From simple tools to complex systems, we create solutions that grow with your business.",
              features: ["Custom business solutions", "Scalable and responsive", "Security-first development"],
              color: "primary",
              delay: "0.3s",
            },
            {
              icon: Layers,
              title: "Combination Solutions",
              description:
                "Complete digital ecosystems that combine website builds with integrated or separate web-based applications. Perfect for businesses needing both public presence and internal tools.",
              features: ["Website + application integration", "Unified user experience", "Seamless data flow"],
              color: "secondary",
              delay: "0.6s",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white backdrop-blur-sm group relative overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              {/* Animated Border Effect */}
              <div
                className={`absolute inset-0 bg-${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
              ></div>

              {/* Continuous Loading Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-secondary animate-pulse"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-${service.color}/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}
                >
                  <service.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${service.color} group-hover:animate-spin`} />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="mb-3 text-lg sm:text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-primary/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 text-sm text-primary/70 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div
                        className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"
                        style={{ animationDelay: `${featureIndex * 0.2}s` }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-${service.color} hover:bg-${service.color}/90 ${service.color === "secondary" ? "text-primary" : "text-white"} border-0 transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg`}
                  onClick={() => scrollToSection("#contact")}
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile-First CTA Section */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-primary/10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Ready to transform your business?</h3>
            <p className="text-primary/70 mb-6 text-sm sm:text-base">
              Let's discuss how our structured digital solutions can help you work smarter.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              <Zap className="w-4 h-4 mr-2" />
              Start Your Digital Shift
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
