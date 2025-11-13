export default function CTASection() {
  return (
    <section className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32">
      <div className="flex flex-col items-center gap-6 md:gap-8 max-w-[90%] md:max-w-[931px]">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-black text-center">
          Want to start using AI to make your business run smoother?
        </h2>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 text-center">
          Fill out our form to see how AI can used for your business
        </p>
        <button
          className="bg-gradient-to-b from-purple-700/60 to-purple-900/80 rounded-2xl px-12 md:px-16 lg:px-20 py-5 md:py-7 hover:opacity-90 transition-opacity"
          data-tally-open="Pdj7x0" // <-- Add this: Your Form ID
          data-tally-layout="modal" // <-- Add this: To open as a popup
          data-tally-width="700" // <-- Optional: Set a width
          data-tally-hide-title="1" // <-- Optional: Hide the form title
        >
          <span className="text-xl md:text-2xl lg:text-3xl text-center text-white whitespace-nowrap">
            Fill out the form
          </span>
        </button>
      </div>
    </section>
  );
}
