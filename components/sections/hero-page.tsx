import { Badge } from "@/components/ui/badge"

interface HeroPageProps {
  badge: string
  title: string
  highlightText?: string
  description: string
  backgroundColor?: string
}

export function HeroPage({ badge, title, highlightText, description, backgroundColor = "bg-accent" }: HeroPageProps) {
  return (
    <section className={`py-12 md:py-20 ${backgroundColor} dark:${backgroundColor}`}>
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-secondary text-primary dark:bg-secondary dark:text-primary"
          >
            {badge}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl dark:text-primary">
            {title}
            {highlightText && (
              <>
                {" "}
                <span className="text-secondary">{highlightText}</span>
              </>
            )}
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto dark:text-primary/80">{description}</p>
        </div>
      </div>
    </section>
  )
}
