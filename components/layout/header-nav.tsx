"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import type { NavigationItem } from "@/types"

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Contact", href: "/contact" },
]

export function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-primary backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-start px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/nexus-shift-logo.png" alt="Nexus Shift" width={48} height={48} className="h-12 w-12" />
            <span className="text-xl font-bold text-white dark:text-white">Nexus Shift</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-secondary" : "text-white/80 hover:text-secondary"
                } dark:${pathname === item.href ? "text-secondary" : "text-white/80 hover:text-secondary"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-primary dark:bg-secondary dark:hover:bg-secondary/90 dark:text-primary"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-secondary dark:text-white dark:hover:text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-primary via-primary/95 to-secondary/20 border-t border-secondary/20">
          <div className="container px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-secondary" : "text-white/80 hover:text-secondary"
                } dark:${pathname === item.href ? "text-secondary" : "text-white/80 hover:text-secondary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-primary dark:bg-secondary dark:hover:bg-secondary/90 dark:text-primary mt-4"
              asChild
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
