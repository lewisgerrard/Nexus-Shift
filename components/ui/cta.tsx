import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ReactNode } from "react"

interface CTAProps {
  href: string
  children: ReactNode
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export function CTA({ href, children, variant = "outline", size = "sm" }: CTAProps) {
  return (
    <Button variant={variant} size={size} asChild className="bg-secondary text-primary hover:bg-secondary/90">
      <Link href={href}>{children}</Link>
    </Button>
  )
}
