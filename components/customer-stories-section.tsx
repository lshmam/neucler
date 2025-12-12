import { Play } from "lucide-react"

const stories = [
  {
    thumbnail: "/ai-demo-presentation-video-thumbnail.jpg",
    badge: "NEW VIDEO",
    title: "Now AI's Got eyes: Introducing Neucler's new AI Voice agent",
    category: "Product Update",
  },
  {
    thumbnail: "/car-dealership-showroom-with-cars.jpg",
    badge: "CAR DEALERSHIP STORIES",
    title: "Car Dealership Guru: Rise of the AI Employee in car dealerships.",
    category: "Customer Story",
  },
  {
    thumbnail: "/happy-customer-testimonial-video-thumbnail.jpg",
    badge: "CUSTOMER STORY",
    title: "Alaska All boosts revenue 50% and transforms customer service with AI Employee.",
    category: "Case Study",
  },
]

export function CustomerStoriesSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
            More customer stories
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={story.thumbnail || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-foreground ml-1" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-sage text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {story.badge}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{story.category}</p>
              <h3 className="font-semibold text-foreground group-hover:text-terracotta transition-colors">
                {story.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
