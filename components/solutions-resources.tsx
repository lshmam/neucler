import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const resources = [
  {
    category: "CASE STUDY",
    title: "Car Dealership: How AI Has of the AI Employee in car dealerships.",
    image: "/car-dealership-case-study.jpg",
  },
  {
    category: "GUIDE",
    title: "The Complete Guide to AI-Powered Customer Service",
    image: "/ai-customer-service-guide.jpg",
  },
  {
    category: "WEBINAR",
    title: "Mastering Lead Conversion with AI: Best Practices",
    image: "/webinar-lead-conversion.jpg",
  },
]

export function SolutionsResources() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Resources for your business
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-cream">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-terracotta uppercase tracking-wider mb-2">{resource.category}</p>
                <h3 className="font-semibold text-foreground mb-4 line-clamp-2">{resource.title}</h3>
                <Button variant="link" className="text-terracotta p-0 h-auto">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
