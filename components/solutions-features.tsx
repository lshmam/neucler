import { Brain, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Patent-pending AI architecture.",
    description:
      "Built on proprietary technology that understands your business and can respond to leads with the right context, to help you drive more sales.",
  },
  {
    icon: Zap,
    title: "Connected to your other systems in real time.",
    description:
      "AI that seamlessly integrates with your CRM, inventory and more to respond to leads quickly and book appointments when customers are ready to buy.",
  },
]

export function SolutionsFeatures() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-sm text-muted-foreground uppercase tracking-wider text-center mb-4">Create your own</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          The AI Employee built for your business.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
