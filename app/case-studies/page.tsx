import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <HeaderNav />

      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Case Studies
          </h1>
          <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            Discover how we've helped businesses transform their digital presence and streamline their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Chester Referees Association */}
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
                Modernised digital presence with integrated membership platform for football referees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• Public-facing site for membership promotion</li>
                    <li>• Admin dashboard for user management</li>
                    <li>• Secure booking tools for officials</li>
                    <li>• Member directory and communication tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Results:</h4>
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• 40% increase in new member registrations</li>
                    <li>• 60% reduction in administrative overhead</li>
                    <li>• Streamlined match assignment process</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diva Fitness */}
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
                Bold, on-brand site with integrated booking and member tracking for a boutique fitness studio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• Online booking with payment options</li>
                    <li>• Session descriptions and pricing</li>
                    <li>• Member progress tracking platform</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Results:</h4>
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• 75% increase in online bookings</li>
                    <li>• Enhanced professional brand image</li>
                    <li>• Automated member onboarding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Ready to Start Your Project?</h2>
          <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
            Let's discuss how we can help transform your business with our proven approach.
          </p>
          <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
