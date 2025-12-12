import { MessageSquare, Calendar, Megaphone, Building } from "lucide-react"

const roles = [
  {
    icon: MessageSquare,
    title: "AI Salesperson",
    description:
      "Our AI is like having a sales rep that never sleeps. It engages leads the moment they reach out and guides them toward booking a service appointment.",
    quote: "\"We're getting it done a lot quicker. [...] I'm able to grow our auto shop business with AI.\" - Mike R.",
    align: "left",
  },
  {
    icon: Calendar,
    title: "AI Scheduler",
    description:
      "Forget the back-and-forth game of trying to find an appointment time that works. Let the AI Employee connect to your shop's calendar, so customers can always get accurate responses to their service requests.",
    align: "right",
  },
  {
    icon: Megaphone,
    title: "AI Marketer",
    description:
      "Your outreach team will create personalized service reminders and promotional campaigns with AI-powered message recommendations based on customer history.",
    align: "left",
  },
  {
    icon: Building,
    title: "AI Concierge",
    description:
      "If your auto shop is known for exceptional customer service, AI Concierge will be the perfect fit - enabling delightful conversations and answering FAQs about services, pricing, and wait times without human intervention.",
    align: "right",
  },
]

export function SolutionsRoles() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="max-w-2xl mx-auto"
            >
              {/* Image placeholder - commented out for now */}
              {/*
              <div className={role.align === "right" ? "lg:order-2" : ""}>
                <div className="bg-cream rounded-2xl aspect-video flex items-center justify-center">
                  <div className="w-20 h-20 bg-sage/50 rounded-2xl flex items-center justify-center">
                    <role.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              */}

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <role.icon className="w-5 h-5 text-terracotta" />
                  <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{role.description}</p>
                {role.quote && <p className="text-sm text-muted-foreground italic">{role.quote}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
