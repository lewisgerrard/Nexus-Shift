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

// Main page component - this is what gets displayed when someone visits /case-studies
export default function CaseStudiesPage() {
  return (
    // Main container - sets minimum height and background colors for light/dark mode
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {/* HEADER NAVIGATION */}
      <HeaderNav />

      {/* MAIN CONTENT AREA */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* PAGE TITLE SECTION */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl dark:text-text-dark">
            Case Studies
          </h1>
          <p className="text-lg text-text-light/70 max-w-3xl mx-auto dark:text-text-dark/70">
            Discover how we've helped businesses transform their digital presence and streamline their operations.
          </p>
        </div>

        {/* CASE STUDIES GRID - Currently set to single column (vertical stack) */}
        {/* To make them side-by-side, change "grid-cols-1" to "grid-cols-1 md:grid-cols-2" */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* =================================================================== */}
          {/* CASE STUDY 1: CHESTER REFEREES ASSOCIATION */}
          {/* =================================================================== */}
          <Card className="border-0 shadow-lg dark:bg-surface-dark">
            {/* Card Header - Contains image, badge, title, and description */}
            <CardHeader>
              {/* Image Container - Shows the website mockup */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 mb-4 flex items-center justify-center h-64 dark:from-primary/20 dark:to-secondary/30">
                <Image
                  src="/images/chester-referees-mockup.png" // Path to the image file
                  alt="Chester Referees Association Website Mockup" // Description for screen readers
                  width={400} // Image width
                  height={240} // Image height
                  className="w-full h-full object-contain" // Makes image fit nicely
                />
              </div>

              {/* Project Type Badge */}
              <Badge variant="outline" className="w-fit mb-2">
                Digital Transformation
              </Badge>

              {/* Project Title */}
              <CardTitle className="dark:text-text-dark">Chester Referees Association</CardTitle>

              {/* Project Description */}
              <CardDescription className="dark:text-text-dark/70">
                Modernised digital presence with integrated membership platform for football referees.
              </CardDescription>
            </CardHeader>

            {/* Card Content - Contains detailed information about what we delivered and results */}
            <CardContent>
              <div className="space-y-4">
                {/* What We Delivered Section */}
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                  {/* List of deliverables - you can add/remove items here */}
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
                  {/* List of results - you can add/remove items here */}
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• 40% increase in new member registrations</li>
                    <li>• 60% reduction in administrative overhead</li>
                    <li>• Streamlined match assignment process</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* =================================================================== */}
          {/* CASE STUDY 2: DIVA FITNESS */}
          {/* =================================================================== */}
          <Card className="border-0 shadow-lg dark:bg-surface-dark">
            {/* Card Header */}
            <CardHeader>
              {/* Image Container */}
              <div className="bg-gradient-to-br from-secondary/10 to-primary/20 rounded-lg p-8 mb-4 flex items-center justify-center h-64 dark:from-secondary/20 dark:to-primary/30">
                <Image
                  src="/images/diva-fitness-mockup.png" // Path to the image file
                  alt="Diva Fitness Website Mockup" // Description for screen readers
                  width={400} // Image width
                  height={240} // Image height
                  className="w-full h-full object-contain" // Makes image fit nicely
                />
              </div>

              {/* Project Type Badge */}
              <Badge variant="outline" className="w-fit mb-2">
                Website + Application
              </Badge>

              {/* Project Title */}
              <CardTitle className="dark:text-text-dark">Diva Fitness</CardTitle>

              {/* Project Description */}
              <CardDescription className="dark:text-text-dark/70">
                Bold, on-brand site with integrated booking and member tracking for a boutique fitness studio.
              </CardDescription>
            </CardHeader>

            {/* Card Content */}
            <CardContent>
              <div className="space-y-4">
                {/* What We Delivered Section */}
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">What We Delivered:</h4>
                  {/* List of deliverables - you can add/remove items here */}
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
                  {/* List of results - you can add/remove items here */}
                  <ul className="space-y-2 text-sm text-text-light/70 dark:text-text-dark/70">
                    <li>• 75% increase in online bookings</li>
                    <li>• Enhanced professional brand image</li>
                    <li>• Automated member onboarding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* =================================================================== */}
          {/* TO ADD A NEW CASE STUDY: */}
          {/* 1. Copy one of the Card sections above */}
          {/* 2. Change the image src to your new image path */}
          {/* 3. Update the badge text */}
          {/* 4. Change the title and description */}
          {/* 5. Update the deliverables and results lists */}
          {/* =================================================================== */}
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
