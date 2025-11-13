export default function Footer2() {
  return (
    <footer className="bg-gradient-to-b from-purple-900/75 to-gray-900/75 py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-[90%] lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-28 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <p className="text-gray-400">Products</p>
            <p className="text-white">Messaging</p>
            <p className="text-white">Voice</p>
            <p className="text-white">Email</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base">
            <p className="text-gray-400">Follow Us</p>
            <p className="text-white">Instagram</p>
            <p className="text-white">LinkedIn</p>
            <p className="text-white">Twitter</p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base">
            <p className="text-gray-400">Contact Us</p>
            <p className="text-white">contact@neucler.com</p>
            <p className="text-white mt-3">Careers</p>
          </div>
        </div>

        <h2 className="text-8xl md:text-9xl text-white">neucler</h2>
      </div>
    </footer>
  );
}
