export default function CaseStudySection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 py-12 md:py-20 max-w-[90%] lg:max-w-[1100px] mx-auto">
      {/* Text container */}
      <div className="flex-1 w-full md:w-auto">
        <div className="text-3xl md:text-5xl lg:text-6xl text-black mb-4">
          <span className="block text-gray-500 text-2xl md:text-4xl lg:text-5xl">
            Read
          </span>
          How neucler delivered a 213% revenue increase for BioSoil
        </div>
      </div>

      {/* Image card */}
      <div className="flex-1 w-full md:w-auto">
        <img
          src="/receptionist.jpg"
          alt="AI receptionist helping a customer in a modern office"
          className="rounded-2xl w-full md:w-[400px] lg:w-[541px] h-[300px] md:h-[380px] lg:h-[443px] object-cover"
        />
      </div>
    </section>
  );
}
