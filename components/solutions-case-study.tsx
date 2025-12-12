export function SolutionsCaseStudy() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Chat Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center">
                  <span className="text-terracotta font-semibold text-sm">MA</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Mike's Auto Shop</p>
                  <p className="text-xs text-muted-foreground">5x more service bookings</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-muted rounded-xl p-3">
                  <p className="text-xs text-foreground">My check engine light is on, can I bring it in today?</p>
                </div>
                <div className="bg-sage/30 rounded-xl p-3">
                  <p className="text-xs text-foreground">
                    Hey! Yes, we have availability at 2pm and 4pm today. Which works better for you?
                  </p>
                </div>
                <div className="bg-sage/30 rounded-xl p-3">
                  <p className="text-xs text-foreground">
                    Great! I've booked you in for 2pm. We'll run a full diagnostic and get you back on the road!
                  </p>
                </div>
              </div>
            </div>

            {/* Company Logo Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-md">
              <p className="text-sm font-semibold text-foreground">
                Mike's Auto Shop 5x service bookings with their AI Employee.
              </p>
            </div>
          </div>

          {/* Right - Testimonial */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "We used to miss so many calls during peak hours. Now the AI handles everything and we're booking 5x
                more appointments.{" "}
                <span className="font-semibold text-foreground">It's a game changer for our shop!"</span>
              </p>

              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="text-5xl font-bold text-terracotta">15%</div>
                <p className="text-sm text-muted-foreground">more likely to convert with AI.</p>
              </div>

              <p className="text-xs text-muted-foreground mt-4">BASED ON A SURVEY OF 1,000 NEUCLER AI EMPLOYEE USERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
