import { Sparkles } from "lucide-react"

const features = [
  {
    title: "Convert more leads.",
    description:
      "Patent-pending AI architecture that understands your business and can respond to leads with the right context, to help you close more sales.",
  },
  {
    title: "Get more repeat customers.",
    description:
      "Re-engage previous customers by creating engaging, personalized, and data-driven campaigns, all with the help of AI.",
  },
  {
    title: "Answer questions, even after hours.",
    description:
      "AI that seamlessly integrates with your website system so customers can always get accurate responses to their inquiries, even after hours.",
  },
  {
    title: "Automate your review management.",
    description:
      "Drive more business by enabling personalized, automatic AI responses to customer reviews, all with full control of which reviews are addressed.",
  },
]

export function AIFeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-terracotta" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              AI Employees that <em className="font-serif italic font-normal">drive revenue</em>, 24/7.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center mt-1">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
