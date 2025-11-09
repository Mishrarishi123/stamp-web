"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["HOME", "PRODUCTS", "ABOUT US", "TESTIMONIALS"];

  return (
    <section className="bg-white py-4 px-6 md:px-10 lg:px-20 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/home">
            <img src={logo} alt="Logo" className="h-18 lg:h-26" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul>
            <li className="flex gap-8 xl:gap-20 text-base xl:text-lg font-medium">
              {navItems.map((item, i) => (
                <a key={i} href="/" className="relative group">
                  <span className="transition-colors duration-300 group-hover:text-blue-700">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <button className="border-2 px-4 text-lg xl:text-xl py-2 hover:text-blue-700 rounded-2xl font-medium hover:border-blue-400 flex items-center gap-2 transition-all">
            Get In Touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-6 pt-20">
                {/* Mobile Navigation */}
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navItems.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <a
                          href="/"
                          className="block text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full border-2 px-4 text-lg py-3 hover:text-blue-700 rounded-2xl font-medium hover:border-blue-400 flex items-center justify-center gap-2 transition-all"
                >
                  Get In Touch
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
