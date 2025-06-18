import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroHome() {
  return (
    /* Hero Section - Main landing area with title, description, and call-to-action buttons */
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90 dark:from-primary dark:via-primary/95 dark:to-primary/90">
      {/* Container - Centers content and adds padding */}
      <div className="container px-4 md:px-6">
        {/* Grid Layout - Two columns on large screens, single column on mobile */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Badge - Small promotional text at the top */}
              <Badge
                variant="secondary"
                className="w-fit bg-secondary text-primary dark:bg-secondary dark:text-primary"
              >
                {/* TO EDIT: Change this text to update the promotional badge */}
                Digital Transformation, Engineered for Growth
              </Badge>

              {/* Main Heading - Primary title of the page */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl dark:text-white">
                {/* TO EDIT: Change this text to update the main headline */}
                Where digital transformation meets
                <span className="text-secondary"> structured thinking</span>
              </h1>

              {/* Description - Subtitle explaining what you do */}
              <p className="text-xl text-white/90 max-w-2xl dark:text-white/90">
                {/* TO EDIT: Change this text to update the description */}
                We help innovative SMEs scale effectively by aligning their operations with digital systems, AI-powered
                tools, and structured business thinking.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button - Main action you want users to take */}
              <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
                <Link href="/contact">
                  {/* TO EDIT: Change button text here */}
                  Start Your Shift
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Secondary Button - Alternative action */}
              <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-primary" asChild>
                <Link href="/about">
                  {/* TO EDIT: Change button text here */}
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Content (currently empty) */}
          <div className="relative">
            <div className="relative">
              <div className="relative">
                {/* TO ADD: You can add an image, video, or other visual content here */}
                {/* Example: <Image src="/hero-image.png" alt="Hero Image" width={600} height={400} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 
EDITING GUIDE FOR HERO SECTION:
================================

1. TO CHANGE THE BADGE TEXT:
   - Find the Badge component and update the text inside

2. TO CHANGE THE MAIN HEADLINE:
   - Find the h1 element and update the text
   - The colored part is wrapped in <span className="text-secondary">

3. TO CHANGE THE DESCRIPTION:
   - Find the p element and update the text

4. TO CHANGE BUTTON TEXT:
   - Find the Button components and update the text inside the Link

5. TO CHANGE BUTTON LINKS:
   - Update the href="/contact" and href="/about" to your desired pages

6. TO ADD A HERO IMAGE:
   - Uncomment the example in the right column
   - Replace with your image path and details

7. TO CHANGE COLORS:
   - The background uses: bg-gradient-to-r from-primary via-primary/95 to-primary/90
   - Button colors use: bg-secondary hover:bg-secondary/90 text-primary
*/
