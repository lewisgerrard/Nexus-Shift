import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/nexus-shift-logo.png" alt="Nexus Shift" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Nexus Shift</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Digital transformation meets structured thinking. Helping SMEs scale through smart digital infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services#consultancy" className="hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services#website" className="hover:text-white transition-colors">
                  Website Production
                </Link>
              </li>
              <li>
                <Link href="/services#applications" className="hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#combined" className="hover:text-white transition-colors">
                  Combined Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:hello@nexusshift.co.uk" className="hover:text-white transition-colors">
                  hello@nexusshift.co.uk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nexus Shift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
