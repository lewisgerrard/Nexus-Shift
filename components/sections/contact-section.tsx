"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  MessageSquare,
  Clock,
  Zap,
  ArrowRight,
  Network,
  Code,
  Database,
  Building2,
  Layers,
  CheckCircle,
} from "lucide-react"
import type React from "react"

const contactMethods = [
  { icon: Mail, title: "Email", desc: "hello@nexusshift.co.uk", delay: "0s" },
  { icon: MessageSquare, title: "LinkedIn", desc: "/nexusshift", delay: "0.2s" },
  { icon: Clock, title: "Response Time", desc: "Within 1 working day", delay: "0.4s" },
]

const serviceOptions = [
  { value: "website", label: "Websites" },
  { value: "application", label: "Web-Based Applications" },
  { value: "combination", label: "Combination Solutions" },
  { value: "optimisation", label: "Ongoing Optimisation" },
  { value: "consultation", label: "General Consultation" },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }, [])

  const resetForm = useCallback(() => {
    setIsSubmitted(false)
  }, [])

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16 bg-primary relative overflow-hidden">
        {/* Success Animation Background */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 left-5 w-2 h-2 bg-secondary rounded-full animate-ping" />
          <div className="absolute bottom-10 right-5 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-secondary rounded-full animate-bounce" />
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto border-4 border-secondary/30 animate-pulse">
              <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-secondary animate-bounce" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Message Received Successfully!
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Thanks for reaching out to Nexus Shift. We'll be in touch shortly to discuss your needs and next steps.
            </p>
            <Button
              onClick={resetForm}
              className="bg-secondary hover:bg-secondary/90 text-primary border-0 transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 sm:py-16 bg-primary relative overflow-hidden">
      {/* Animated Contact Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,194,203,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,194,203,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "grid-move 20s linear infinite reverse",
          }}
        />
      </div>

      {/* Floating Contact Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-10 left-5 w-8 h-8 border border-secondary/20 rounded-lg rotate-45 animate-spin opacity-30"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute top-20 right-5 w-6 h-6 border border-secondary/30 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-20 left-5 w-4 h-4 bg-secondary/10 rounded rotate-12 animate-bounce opacity-35" />
        <div
          className="absolute bottom-10 right-10 w-10 h-10 border border-secondary/15 rounded rotate-45 animate-spin opacity-25"
          style={{ animationDuration: "25s" }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12">
          <Badge className="bg-secondary/30 text-secondary border border-secondary/40 animate-bounce text-xs sm:text-sm">
            <Network className="w-3 h-3 mr-1" aria-hidden="true" />
            Get In Touch
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to help your business{" "}
            <span className="text-secondary animate-bounce block sm:inline">work smarter?</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Whether you need a new website, custom application, or integrated business tools, we're here to provide
            clear, practical solutions.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center flex-wrap">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-secondary animate-pulse" aria-hidden="true" />
                Ready to make the shift?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                Fill out the form and we'll get back to you within 1 business day to discuss your project and how we can
                help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: contact.delay }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/30 rounded-lg flex items-center justify-center border border-secondary/30 group-hover:scale-110 transition-transform duration-300 relative">
                    <contact.icon
                      className="h-5 w-5 sm:h-6 sm:w-6 text-secondary group-hover:animate-pulse"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-secondary/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-white group-hover:text-secondary transition-colors duration-300">
                      {contact.title}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">{contact.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white backdrop-blur-sm border border-white/20 order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-primary flex items-center">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary" aria-hidden="true" />
                Send us a message
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-primary/70">
                Tell us about your project and we'll get back to you with next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Form Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-primary/80 flex items-center">
                      <Database className="w-3 h-3 mr-1 text-secondary" aria-hidden="true" />
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-primary/20 focus:border-secondary transition-colors duration-300 text-sm sm:text-base"
                      aria-describedby="name-error"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-primary/80 flex items-center">
                      <Mail className="w-3 h-3 mr-1 text-secondary" aria-hidden="true" />
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-primary/20 focus:border-secondary transition-colors duration-300 text-sm sm:text-base"
                      aria-describedby="email-error"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="business"
                    className="text-xs sm:text-sm font-medium text-primary/80 flex items-center"
                  >
                    <Building2 className="w-3 h-3 mr-1 text-secondary" aria-hidden="true" />
                    Business Name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Your business name (optional)"
                    className="border-primary/20 focus:border-secondary transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs sm:text-sm font-medium text-primary/80 flex items-center">
                    <Layers className="w-3 h-3 mr-1 text-secondary" aria-hidden="true" />
                    What services are you interested in?
                  </label>
                  <Select name="service">
                    <SelectTrigger className="border-primary/20 focus:border-secondary transition-colors duration-300 text-sm sm:text-base">
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-primary/80 flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1 text-secondary" aria-hidden="true" />
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business, current challenges, or what you'd like to achieve. How can we help you work smarter?"
                    className="min-h-[120px] sm:min-h-[150px] border-primary/20 focus:border-secondary transition-colors duration-300 text-sm sm:text-base resize-none"
                    required
                    aria-describedby="message-error"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl py-3 sm:py-4 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  size="lg"
                >
                  <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
