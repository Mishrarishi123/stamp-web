/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SLIDES } from "../../constant/SlideData";

export default function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  // Auto slide
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

    if (offset < -100) {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    } else if (offset > 100) {
      setDirection(-1);
      setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    }
  };

  // Sliding only – NO fade
  const variants = {
    enter: (direction: number) => ({
      x: direction === 1 ? 1000 : -1000,
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction === 1 ? -1000 : 1000,
    }),
  };

  return (
    <div className="relative h-[80vh] lg:h-[100vh] overflow-hidden bg-black select-none">
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
            x: { type: "spring", stiffness: 250, damping: 30 },
          }}
        >
          {/* Background Image (Instant update, no fade) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${SLIDES[currentSlide].backgroundImage})`,
            }}
          />

          {/* Static Content - No animation */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-black/40">
            <h1 className="text-4xl uppercase roboto-slab sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              {SLIDES[currentSlide].title}
            </h1>

            <h2 className="text-lg roboto-slab sm:text-2xl text-white/90 max-w-2xl mb-6">
              {SLIDES[currentSlide].subtitle}
            </h2>

            <p className="text-sm roboto-slab sm:text-xl text-white/90 max-w-2xl mb-6">
              {SLIDES[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
      </div>
    </div>
  );
}
