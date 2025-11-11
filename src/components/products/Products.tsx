"use client";

import { motion } from "framer-motion";
import { Gallery } from "../ui/Gallery";
import {
  STAMP_PRODUCTS,
  VISITING_CARD_PRODUCTS,
} from "../../constant/productData";

// === Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export function Products() {
  // Smooth scroll function
  const handleScroll = (galleryClass: string) => {
    const gallery = document.querySelector(`.${galleryClass}`);
    gallery?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <main className="bg-background roboto-slab min-h-screen overflow-hidden">
      {/* ===== Header ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-0 py-12 md:py-16">
          <h1 className="text-4xl roboto-slab md:text-6xl font-black text-center mb-4">
            PRODUCTS
          </h1>
          <p className="text-center text-muted-foreground font-medium text-2xl">
            Crafted With Care, Designed To Impress.
          </p>
        </div>
      </motion.div>

      {/* ===== Content Sections ===== */}
      <div className="max-w-7xl md:max-w-[90vw] lg:max-w-[84vw] mx-auto px-4 md:px-0 py-12 space-y-24">
        {/* === Stamps Section === */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Stamps
            </h2>
            <button
              onClick={() => handleScroll("stamp-gallery")}
              className="text-foreground bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors p-2"
              aria-label="Scroll stamps right"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Gallery products={STAMP_PRODUCTS} galleryClass="stamp-gallery" />
          </motion.div>
        </motion.section>

        {/* === Visiting Cards Section === */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Visiting Cards
            </h2>
            <button
              onClick={() => handleScroll("visiting-gallery")}
              className="text-foreground bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors p-2"
              aria-label="Scroll visiting cards right"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Gallery
              products={VISITING_CARD_PRODUCTS}
              galleryClass="visiting-gallery"
            />
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
