/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SLIDES } from "../../constant/SlideData";

export default function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Auto-slide every 5 seconds (paused during drag)
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipe = Math.abs(offset) > 100 || Math.abs(velocity) > 500;

    if (!swipe) return;

    if (offset < 0) {
      // Swiped left → next slide
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    } else {
      // Swiped right → previous slide
      setDirection(-1);
      setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative h-[80vh] overflow-hidden bg-black select-none">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={SLIDES[currentSlide].id}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${SLIDES[currentSlide].backgroundImage})`,
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-black/40">
            <motion.h1
              className="text-4xl uppercase roboto-slab sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {SLIDES[currentSlide].title}
            </motion.h1>

            <motion.h2
              className="text-lg roboto-slab sm:text-2xl text-white/90 max-w-2xl mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {SLIDES[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              className="text-sm roboto-slab sm:text-xl text-white/90 max-w-2xl mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {SLIDES[currentSlide].description}
            </motion.p>

            <motion.button
              className="group px-4 py-3 lg:px-4 lg:py-4 flex items-center gap-3 roboto-slab bg-white text-gray-900 rounded-2xl lg:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Explore More
              <ChevronRight
                size={24}
                className="text-gray-900 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-3 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
