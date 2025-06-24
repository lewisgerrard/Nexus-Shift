"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, Target, TrendingUp, Cpu, Code } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-First Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-16">
          <Badge className="bg-secondary/20 text-primary border border-primary/20 text-xs sm:text-sm">
            <Building2 className="w-3 h-3 mr-1" />
            About Nexus Shift
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
            Built on <span className="text-secondary block sm:inline">innovation, trust, and approachability</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Nexus Shift offers a practical path to digitising business needs without complexity or confusion. We believe
            in clear, collaborative solutions that help businesses work smarter.
          </p>
        </div>

        {/* Mobile-First Foundation Section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center flex-wrap">
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-secondary" />
                Our Foundation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-primary/70 leading-relaxed">
                Built on a foundation of innovation, trust, and approachability, we provide structured, modern digital
                solutions without the complexity. Our collaborative approach ensures every solution is tailored to your
                specific business needs.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-primary/70 leading-relaxed">
                From sole traders to SMEs, we understand that every business is unique. That's why we take time to
                connect, understand, and propose solutions that truly fit your requirements and help reduce admin
                burdens.
              </p>
            </div>
          </div>

          {/* Mobile-First Interactive Tech Display */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-primary/10 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-secondary/20 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: Building2, color: "primary" },
                    { icon: Code, color: "secondary" },
                    { icon: Target, color: "secondary" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-${item.color}/30 rounded-lg flex items-center justify-center border border-${item.color}/20`}
                      >
                        <item.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-${item.color}`} />
                      </div>
                      <div className={`flex-1 h-1 sm:h-2 bg-${item.color}/30 rounded`}></div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-secondary rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                    <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
