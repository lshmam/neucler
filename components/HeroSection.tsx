export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-black text-center max-w-[70%] mb-8">
        Supercharge your business with AI
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-black text-center max-w-[70%] mb-16">
        Automate calls and followups, book appointments and provide customer
        support 24/7
      </p>
      <button className="bg-gradient-to-b from-[#9db2ff] to-[#510e99] rounded-2xl px-8 md:px-12 py-5 md:py-7 hover:opacity-90 transition-opacity">
        <span className="text-xl md:text-2xl lg:text-3xl text-center text-white whitespace-nowrap">
          Talk to an AI specialist
        </span>
      </button>
    </section>
  );
}
