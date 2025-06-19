import { TestimonialCard } from "@/components/ui/testimonial-card"
import type { TestimonialCardProps } from "@/types"

const testimonials: TestimonialCardProps[] = [
  {
    quote: "Nexus Shift helped us rebuild from the ground up — visually, operationally, and strategically.",
    author: "Satisfied Client",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-secondary via-secondary/90 to-primary/20 dark:from-secondary dark:via-secondary/90 dark:to-primary/20">
      <div className="container px-4 md:px-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}
