const integrations = [
  { name: "CDK Global", logo: "CDK" },
  { name: "Salesforce", logo: "SF" },
  { name: "Shopify", logo: "Shop" },
  { name: "ServiceTitan", logo: "ST" },
  { name: "DealerSocket", logo: "DS" },
  { name: "Edge", logo: "EDGE" },
  { name: "Lightspeed", logo: "LS" },
  { name: "DealerTrack", logo: "DT" },
  { name: "VinSolutions", logo: "VS" },
]

export function SolutionsIntegrations() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Connect with the tools you already use.</h2>
        <p className="text-muted-foreground mb-10">200+ integrations</p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold text-muted-foreground">{integration.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
