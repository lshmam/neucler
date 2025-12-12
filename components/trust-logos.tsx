export function TrustLogos() {
  const logos = [
    { name: "Troutt", style: "font-serif italic" },
    { name: "Central Bank", style: "font-semibold" },
    { name: "Ashley", style: "font-bold tracking-wide" },
    { name: "RC Willey", style: "font-serif" },
    { name: "La-Z-Boy", style: "font-bold" },
  ]

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Over <span className="font-semibold text-foreground">100,000</span> businesses trust Neucler.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className={`text-xl md:text-2xl text-foreground/60 ${logo.style}`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
