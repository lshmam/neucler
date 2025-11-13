"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    title: "AI Receptionist",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "AI Sales Representative",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Loyalty Programs",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];

export default function ProductShowcaseSection2() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section
      id="products"
      className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32 max-w-[90%] lg:max-w-[1100px] mx-auto"
    >
      <div className="flex flex-col items-center gap-2 mb-12 md:mb-16">
        <h2 className="text-8xl md:text-9xl text-black text-center">neucler</h2>
        <p className="text-xl md:text-3xl text-gray-400 text-center">
          helps you with that
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center md:items-start">
        <div className="flex flex-col gap-8 md:gap-12 w-full md:w-auto md:flex-1">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`border-b pb-5 text-left transition-all duration-300 ${
                selectedProduct.id === product.id
                  ? "border-purple-700 border-b-2"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <p
                className={`text-2xl md:text-3xl lg:text-4xl pl-1 transition-colors ${
                  selectedProduct.id === product.id
                    ? "text-purple-700"
                    : "text-black hover:text-purple-600"
                }`}
              >
                {product.title}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl w-full md:w-[400px] lg:w-[486px] h-[350px] md:h-[420px] lg:h-[472px] overflow-hidden relative">
          <video
            key={selectedProduct.id}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={selectedProduct.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
