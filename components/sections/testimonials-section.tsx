import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Diva Fitness",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Nexus Shift transformed our booking system completely. The new platform is intuitive, efficient, and our members love it. We've seen a 40% increase in class bookings since launch.",
    },
    {
      name: "John Smith",
      role: "Secretary, Chester Referees Association",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The team at Nexus Shift understood our unique needs perfectly. They delivered a comprehensive solution that has streamlined our operations and saved us countless hours of admin work.",
    },
    {
      name: "Mike Wilson",
      role: "Director, BuildCorp Ltd",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Professional, reliable, and innovative. Nexus Shift didn't just build us a system - they helped us reimagine how we work. The ROI has been exceptional.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with Nexus Shift and the
            results they've achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
