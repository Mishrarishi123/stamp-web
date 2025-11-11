"use client";

import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Good Workmanship And Timely Service. The Self-Inking Stamp Works Flawlessly.",
    author: "Priya Singh",
    role: "Designer",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Great Experience! Durable Stamps And Quick Delivery. Highly Recommended.",
    author: "Amit Patel",
    role: "Entrepreneur",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Very Professional And Reliable. Custom Company Seal Was Made Perfectly.",
    author: "Neha Verma",
    role: "Manager",
    avatar: "👩‍💻",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "“Excellent quality stamps and fast service. Every impression comes out sharp and clear.”",
    author: "Rajesh Kumar",
    role: "Consultant",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "“Good workmanship and timely service. The self-inking stamp works flawlessly.”",
    author: "Sarah Johnson",
    role: "Marketing Lead",
    avatar: "👩‍🔬",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "“Great experience! Durable stamps and quick delivery. Highly recommended.”",
    author: "Karan Mehta",
    role: "Lawyer",
    avatar: "👨‍⚖️",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const controls = useAnimation();

  // Auto-scroll animation
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section 
    id="testimonials"
    className="relative py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl roboto-slab text-center font-black mb-4">
          Testimonials
        </h2>
        <div className="py-4 sm:py-8">
          <p className="text-xl sm:text-2xl text-center sm:text-start roboto-slab font-bold text-black">
            What Our Clients Say
          </p>
          
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden cursor-grab active:cursor-grabbing max-w-7xl mx-auto">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Infinite + draggable scroll */}
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -500, right: 500 }}
          dragElastic={0.2}
          onDragStart={() => controls.stop()} // pause auto-scroll on drag
          onDragEnd={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: { duration: 35, ease: "linear", repeat: Infinity },
            })
          }
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[200px] xs:w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[350px]
                         border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white
                         hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <p className="text-gray-800 roboto-slab mb-3 sm:mb-4 italic text-sm sm:text-base">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-base sm:text-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-2 sm:mt-3 justify-start">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
