import { HeaderNav } from "@/components/layout/header-nav"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BackgroundAnimation } from "@/components/ui/background-animation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark relative overflow-hidden">
      <BackgroundAnimation />
      <HeaderNav />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ApproachSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
