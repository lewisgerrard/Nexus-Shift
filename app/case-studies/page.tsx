// =============================================================================
// CASE STUDIES PAGE
// =============================================================================
// This page displays all of our completed case studies in a vertical layout
// Each case study shows what we delivered and the results achieved

// Import statements - these bring in components we need from other files
import { HeaderNav } from "@/components/layout/header-nav" // Top navigation bar
import { Footer } from "@/components/layout/footer" // Bottom footer
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Card components for layout
import { Badge } from "@/components/ui/badge" // Small colored labels
import { Button } from "@/components/ui/button" // Clickable buttons
import Link from "next/link" // For navigation between pages
import Image from "next/image" // Optimized image component
import { HeroPage } from "@/components/sections/hero-page"

// Main page component - this is what gets displayed when someone visits /case-studies
export default function CaseStudiesPage() {
  return (
    // Main container - sets minimum height and background colors for light/dark mode
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {/* HEADER NAVIGATION */}
      <HeaderNav />

      <HeroPage
        badge="Case Studies"
        title="Real results for"
        highlightText="real businesses"
        description="See how we've helped businesses like yours transform their digital presence and achieve measurable growth through our structured approach."
        gradientFrom="from-primary"
        gradientVia="via-primary/80"
        gradientTo="to-secondary/30"
      />

      {/* MAIN CONTENT AREA */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* CASE STUDIES GRID - Now with side-by-side photo and text layout */}
        <div className="space-y-12 mb-12">
          {/* =================================================================== */}
          {/* CASE STUDY 1: CHESTER REFEREES ASSOCIATION - Photo on LEFT */}
          {/* =================================================================== */}
          <Card className="border-0 shadow-lg dark:bg-surface-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Container - LEFT SIDE */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 flex items-center justify-center h-64 lg:h-auto dark:from-primary/20 dark:to-secondary/30">
                <Image
                  src="/images/chester-referees-mockup.png"
                  alt="Chester Referees Association Website Mockup"
                  width={400}
                  height={240}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content - RIGHT SIDE */}
              <div className="flex flex-col justify-center">
                <CardHeader className="pb-4">
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
                    {/* What We Delivered Section */}
                    <div>
                      <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                      <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                        <li>• Public-facing site for membership promotion</li>
                        <li>• Admin dashboard for user management</li>
                        <li>• Secure booking tools for officials</li>
                        <li>• Member directory and communication tools</li>
                      </ul>
                    </div>

                    {/* Results Section */}
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
              </div>
            </div>
          </Card>

          {/* =================================================================== */}
          {/* CASE STUDY 2: DIVA FITNESS - Photo on RIGHT */}
          {/* =================================================================== */}
          <Card className="border-0 shadow-lg dark:bg-surface-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content - LEFT SIDE */}
              <div className="flex flex-col justify-center lg:order-1">
                <CardHeader className="pb-4">
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
                    {/* What We Delivered Section */}
                    <div>
                      <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                      <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                        <li>• Online booking with payment options</li>
                        <li>• Session descriptions and pricing</li>
                        <li>• Member progress tracking platform</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>

                    {/* Results Section */}
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
              </div>

              {/* Image Container - RIGHT SIDE */}
              <div className="bg-gradient-to-br from-secondary/10 to-primary/20 rounded-lg p-8 flex items-center justify-center h-64 lg:h-auto lg:order-2 dark:from-secondary/20 dark:to-primary/30">
                <Image
                  src="/images/diva-fitness-mockup.png"
                  alt="Diva Fitness Website Mockup"
                  width={400}
                  height={240}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* CALL TO ACTION SECTION */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Ready to Start Your Project?</h2>
          <p className="text-text-light/70 dark:text-text-dark/70 mb-6">
            Let's discuss how we can help transform your business with our proven approach.
          </p>
          {/* Contact Button - links to the contact page */}
          <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

// =============================================================================
// QUICK EDITING GUIDE:
// =============================================================================
//
// TO CHANGE TEXT:
// - Find the text you want to change and replace it with your new text
// - Keep the quotation marks around text
//
// TO ADD A NEW CASE STUDY:
// - Copy an entire <Card>...</Card> section
// - Paste it before the closing </div> of the grid
// - Update the image path, title, description, and lists
//
// TO CHANGE LAYOUT FROM VERTICAL TO SIDE-BY-SIDE:
// - Find this line: <div className="grid grid-cols-1 gap-8 mb-12">
// - Change "grid-cols-1" to "grid-cols-1 md:grid-cols-2"
//
// TO ADD NEW DELIVERABLES OR RESULTS:
// - Find the <ul> section you want to add to
// - Add a new <li>• Your new item here</li> line
//
// TO CHANGE COLORS:
// - Look for className attributes with color names like "bg-primary" or "text-secondary"
// - These use the colors defined in your tailwind.config.ts file
//
// =============================================================================
