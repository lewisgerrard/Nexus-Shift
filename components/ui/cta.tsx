import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ReactNode } from "react"

interface CTAProps {
  href: string
  children: ReactNode
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}

export function CTA({ href, children, variant = "secondary", size = "sm" }: CTAProps) {
  return (
    <Button variant={variant} size={size} asChild className="bg-secondary text-primary hover:bg-secondary/90 border-0">
      <Link href={href}>{children}</Link>
    </Button>
  )
}
