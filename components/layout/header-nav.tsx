"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import type { NavigationItem } from "@/types"

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#approach" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
]

export function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Mobile-First Logo */}
        <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-2 group">
          <Image
            src="/nexus-shift-logo.png"
            alt="Nexus Shift"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-lg sm:text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
            Nexus Shift
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors text-white/80 hover:text-secondary relative group"
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
            </button>
          ))}
        </nav>

        {/* Mobile-First Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          <Button
            className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-primary border-0 transform hover:scale-105 transition-all duration-300"
            onClick={() => (window.location.href = "/admin/login")}
            size="sm"
          >
            Portal
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-secondary hover:bg-secondary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-secondary/20">
          <div className="container px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block text-sm font-medium transition-colors text-white/80 hover:text-secondary w-full text-left py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-primary border-0 mt-4 transform hover:scale-105 transition-all duration-300"
              onClick={() => (window.location.href = "/admin/login")}
            >
              Portal
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
