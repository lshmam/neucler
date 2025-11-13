"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Working with neucler transformed our customer service completely. We went from missing 40% of calls to answering every single one, 24/7. Our customer satisfaction scores have never been higher.",
    name: "Sarah Johnson",
    role: "CEO @ BioSoil",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
  },
  {
    id: 2,
    text: "The AI receptionist handles our appointment scheduling flawlessly. No more double bookings, no more missed calls. It's like having a team of receptionists working around the clock.",
    name: "Michael Chen",
    role: "Director of Operations @ MedCare Plus",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
  },
  {
    id: 3,
    text: "Our revenue increased by 213% within three months. The AI sales rep qualifies leads perfectly and our team can focus on closing deals. It's been a game changer for our business.",
    name: "Emily Rodriguez",
    role: "VP of Sales @ TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
  },
];

export default function TestimonialsSection2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="flex flex-col px-4 py-12 md:py-20 max-w-[90%] lg:max-w-[1100px] mx-auto">
      <h2 className="text-5xl md:text-6xl lg:text-7xl text-black mb-6 md:mb-8">
        Our Clients Say:
      </h2>
      <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl w-full min-h-[350px] md:min-h-[400px] lg:min-h-[456px] relative flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
        {/* Testimonial Content */}
        <div className="flex flex-col items-center max-w-[90%] md:max-w-[800px]">
          <p className="text-xl md:text-2xl lg:text-3xl text-center text-black mb-8 md:mb-12">
            "{currentTestimonial.text}"
          </p>

          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <img
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
            <div className="text-left">
              <p className="text-lg md:text-xl text-black">
                {currentTestimonial.name}
              </p>
              <p className="text-base md:text-lg text-gray-700">
                {currentTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 md:p-3 bg-white/80 hover:bg-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-700 w-8 md:w-10"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 md:p-3 bg-white/80 hover:bg-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
