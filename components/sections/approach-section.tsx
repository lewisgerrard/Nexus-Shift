"use client"

import { useState, useEffect } from "react"

export function ApproachSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSteps([0, 1, 2])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const steps = [
    {
      number: "1",
      title: "Connect and Understand",
      description:
        "We start by connecting with you and your business to understand your current situation, challenges, and dive deep into your processes and requirements.",
      color: "from-primary to-primary/80",
    },
    {
      number: "2",
      title: "Propose and Develop",
      description:
        "We propose a comprehensive solution combining multiple approaches and technologies, then build it using modern, reliable technologies with regular updates.",
      color: "from-primary/80 to-secondary/80",
    },
    {
      number: "3",
      title: "Support and Optimise",
      description:
        "Comprehensive training and onboarding followed by ongoing support packages to ensure your tools continue to evolve and improve with your business.",
      color: "from-secondary/80 to-secondary",
    },
  ]

  return (
    <section
      id="approach"
      className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
        <div
          className="absolute top-1/2 left-5 w-3 h-3 border border-secondary/20 rotate-45 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery through structured phases and continuous
            collaboration.
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div
                className={`
                  p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 h-full
                  transform transition-all duration-700 hover:scale-105 hover:shadow-xl
                  ${visibleSteps.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Animated Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`
                        w-16 h-16 rounded-full bg-gradient-to-br ${step.color} 
                        flex items-center justify-center text-white font-bold text-xl
                        transform transition-transform duration-300 hover:rotate-12 hover:scale-110
                        shadow-lg
                      `}
                    >
                      <span className="relative z-10">{step.number}</span>
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-ping"></div>
                    </div>

                    {/* Tech Accent */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                  {/* Progress Bar */}
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                      style={{
                        width: visibleSteps.includes(index) ? "100%" : "0%",
                        transitionDelay: `${index * 300 + 500}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Horizontal Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Animated Arrow */}
                    <div className="w-8 h-px bg-gradient-to-r from-primary/60 to-secondary/60 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                    </div>

                    {/* Arrow Head */}
                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-secondary/60 border-t-transparent border-b-transparent animate-pulse"></div>
                    </div>

                    {/* Floating Data Points */}
                    <div className="absolute top-1/2 left-2 w-1 h-1 bg-secondary rounded-full animate-ping opacity-60 transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 transform -translate-y-1/2"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <span>Ready to start your project?</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
