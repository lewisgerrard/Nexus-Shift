import type { TestimonialCardProps } from "@/types"

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <blockquote className="text-2xl font-medium text-white mb-6 dark:text-white">"{quote}"</blockquote>
      <cite className="text-white/80 dark:text-white/80">
        — {author}
        {role && company && `, ${role} at ${company}`}
        {role && !company && `, ${role}`}
      </cite>
    </div>
  )
}
