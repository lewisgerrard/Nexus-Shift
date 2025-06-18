"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Clock } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 md:py-20 bg-white dark:bg-background-dark">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
              Thank you for reaching out!
            </h1>
            <p className="text-lg text-text-light/70 dark:text-text-dark/70">
              Thanks for reaching out to Nexus Shift. We'll be in touch shortly to discuss your needs and next steps.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 dark:from-primary/20 dark:via-accent/10 dark:to-secondary/20"
    >
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-primary text-white dark:bg-primary dark:text-white">
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-text-light sm:text-5xl md:text-6xl dark:text-text-dark">
            Let's talk about what's <span className="text-accent">next for your business</span>
          </h1>
          <p className="text-xl text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            Whether you need a new website, a custom platform, or a complete systems overhaul, we're here to help.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
                Ready to make the shift?
              </h2>
              <p className="text-lg text-text-light/70 dark:text-text-dark/70">
                Fill out the form and we'll get back to you within 1 business day to discuss your project and how we can
                help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">Email</div>
                  <div className="text-text-light/70 dark:text-text-dark/70">hello@nexusshift.co.uk</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">LinkedIn</div>
                  <div className="text-text-light/70 dark:text-text-dark/70">/nexusshift</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-text-light dark:text-text-dark">Response Time</div>
                  <div className="text-text-light/70 dark:text-text-dark/70">Within 1 working day</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl dark:bg-surface-dark">
            <CardHeader>
              <CardTitle className="dark:text-text-dark">Send us a message</CardTitle>
              <CardDescription className="dark:text-text-dark/70">
                Tell us about your project and we'll get back to you with next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">
                      Name *
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">
                    Business Name
                  </label>
                  <Input id="business" placeholder="Your business name (optional)" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">
                    What services are you interested in?
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultancy">Digital Transformation Consultancy</SelectItem>
                      <SelectItem value="website">Website Production</SelectItem>
                      <SelectItem value="application">Web-Based Applications</SelectItem>
                      <SelectItem value="combined">Combined Solutions</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, challenges, or goals. What would you like to achieve? (minimum 500 characters)"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
