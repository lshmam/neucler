export default function ProductShowcaseSection() {
  return (
    <section className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32 max-w-[90%] lg:max-w-[1100px] mx-auto">
      <div className="flex flex-col items-center gap-2 mb-12 md:mb-16">
        <h2 className="text-8xl md:text-9xl text-black text-center">
          neucler
        </h2>
        <p className="text-xl md:text-3xl text-gray-400 text-center">
          helps you with that
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center md:items-start">
        <div className="flex flex-col gap-8 md:gap-12 w-full md:w-auto md:flex-1">
          <div className="border-b border-gray-300 pb-5">
            <p className="text-2xl md:text-3xl lg:text-4xl text-black pl-1">
              AI Receptionist
            </p>
          </div>
          <div className="border-b border-gray-300 pb-5">
            <p className="text-2xl md:text-3xl lg:text-4xl text-black pl-1">
              AI Sales Representative
            </p>
          </div>
          <div className="border-b border-gray-300 pb-5">
            <p className="text-2xl md:text-3xl lg:text-4xl text-black pl-1">
              Loyalty Programs
            </p>
          </div>
          <div className="border-b border-gray-300 pb-5">
            <p className="text-2xl md:text-3xl lg:text-4xl text-black pl-1">
              Social Media Marketing
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl w-full md:w-[400px] lg:w-[486px] h-[350px] md:h-[420px] lg:h-[472px]" />
      </div>
    </section>
  );
}
