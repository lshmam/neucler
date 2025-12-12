import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function SolutionsHero() {
  return (
    <section className="pt-20 pb-16 md:py-24 bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Get <span className="text-terracotta">30% more sales</span> for your auto shop with AI.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Meet your new always-on AI employee for auto shops: responds to service inquiries, schedules appointments,
              and sells while your mechanics focus on repairs. Let AI close leads.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-8 py-6 text-lg">
                  Talk to Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                See it in action
              </Button>
            </div>
          </div>

          {/* Right - Chat Mockup - Auto Shop themed */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center">
                  <span className="text-foreground font-semibold">N</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Neucler AI</p>
                  <p className="text-xs text-green-600">Online now</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-sage/30 rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <p className="text-sm text-foreground">Hi! Welcome to Quick Fix Auto. How can I help you today?</p>
                </div>
                <div className="bg-terracotta/10 rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto">
                  <p className="text-sm text-foreground">My check engine light is on. Can I get it checked?</p>
                </div>
                <div className="bg-sage/30 rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <p className="text-sm text-foreground">
                    We can run a diagnostic for you. We have openings tomorrow at 9am or 2pm. Which works better?
                  </p>
                </div>
                <div className="bg-terracotta/10 rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto">
                  <p className="text-sm text-foreground">9am works great!</p>
                </div>
                <div className="bg-sage/30 rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <p className="text-sm text-foreground">
                    Perfect! You're booked for 9am tomorrow. We'll send you a reminder. See you then!
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="mt-6 flex items-center gap-2 bg-muted rounded-full p-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm px-3 outline-none"
                />
                <Button size="sm" className="rounded-full bg-terracotta hover:bg-terracotta/90">
                  Send
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage/40 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
