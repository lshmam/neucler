export default function TestimonialsSection() {
  return (
    <section className="flex flex-col px-4 py-12 md:py-20 max-w-[90%] lg:max-w-[1100px] mx-auto">
      <h2 className="text-5xl md:text-6xl lg:text-7xl text-black mb-6 md:mb-8">
        Our Clients Say:
      </h2>
      <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl w-full h-[350px] md:h-[400px] lg:h-[456px] relative flex items-end justify-center pb-8">
        <div className="flex gap-6 items-center">
          <div className="w-3 h-3 rounded-full bg-black opacity-70" />
          <div className="w-3 h-3 rounded-full bg-white border border-black/40" />
          <div className="w-3 h-3 rounded-full bg-white border border-black/40" />
        </div>
      </div>
    </section>
  );
}
