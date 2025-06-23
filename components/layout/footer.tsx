import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/nexus-shift-logo.png" alt="Nexus Shift" className="h-8 w-auto brightness-0 invert" />
              <span className="font-bold text-xl">Nexus Shift</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering SMEs with digital transformation solutions that drive growth, efficiency, and competitive
              advantage through strategic technology implementation.
            </p>
            <p className="text-sm text-primary-foreground/60">© 2024 Nexus Shift. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#approach"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>hello@nexusshift.co.uk</li>
              <li>+44 (0) 123 456 7890</li>
              <li>Manchester, UK</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>Built with Next.js and Tailwind CSS</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
