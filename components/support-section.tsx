import { Monitor, Phone, BookOpen, Users } from "lucide-react"

const supportFeatures = [
  {
    icon: Monitor,
    title: "Step-by-Step Onboarding",
    description:
      "Our simple step-by-step onboarding experience walks you through everything you need to start growing your business.",
  },
  {
    icon: Phone,
    title: "Phone & Chat Support",
    description:
      "Whatever your business may need, our expert support team is here to help so you can focus on what you do best.",
  },
  {
    icon: BookOpen,
    title: "Resource Center",
    description:
      "Our extensive resource center has all the videos and articles you need to get the most out of Neucler.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Our dedicated customer success managers help your local business maximize the value you get out of Neucler.",
  },
]

export function SupportSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We've got your back.</h2>
          <p className="text-muted-foreground">World-class customer support is included in every plan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
