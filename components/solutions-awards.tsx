import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const badges = [
  { title: "Best", subtitle: "Results", color: "bg-terracotta" },
  { title: "Leader", subtitle: "Leader", color: "bg-terracotta" },
  { title: "Best", subtitle: "Implementation", color: "bg-foreground" },
]

export function SolutionsAwards() {
  return (
    <section className="py-16 md:py-20 bg-sage/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">#1 in AI Agents for Business</h2>
            <p className="text-2xl md:text-3xl font-serif italic text-foreground mb-2">Operations</p>
            <p className="text-lg text-muted-foreground mb-4">In Results, Implementation, and Support.</p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.5 out of 5 stars | 2000+ reviews on G2</span>
            </div>
            <Button variant="outline" className="rounded-full bg-transparent">
              Read report
            </Button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`${badge.color} text-white rounded-2xl p-6 w-28 h-36 flex flex-col items-center justify-center`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-5 h-5" />
                </div>
                <p className="font-bold">{badge.title}</p>
                <p className="text-xs opacity-80">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
