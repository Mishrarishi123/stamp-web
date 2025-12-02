"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/logo.svg";

import SkeletonHeader from "./SkeletonHeader"; // ⬅ IMPORTANT

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //  Add loading state for skeleton
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate header loading for smooth UX
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  //  Show Skeleton first
  if (loading) return <SkeletonHeader />;

  const navItems = [
    { label: "HOME", href: "#hero" },
    { label: "PRODUCTS", href: "#products" },
    { label: "ABOUT US", href: "#about-us" },
    { label: "TESTIMONIALS", href: "#testimonials" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
     
      className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-10 lg:px-20 z-50"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
            <motion.img
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={logo}
              alt="Logo"
              className="h-14 lg:h-20"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 xl:gap-20 text-base xl:text-lg font-medium">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="relative group tracking-wide"
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-700">
                    {item.label}
                  </span>
                  <motion.span
                    layoutId={`underline-${i}`}
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden lg:block"
        >
          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="border-2 border-black px-6 text-lg xl:text-xl py-2 rounded-2xl font-medium text-black hover:text-blue-500 hover:border-blue-500 transition-all flex items-center gap-2 shadow-sm"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
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
            >
              <div className="flex flex-col h-full p-6 pt-20">
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="flex-1"
                >
                  <ul className="space-y-6">
                    {navItems.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleScroll(e, item.href)}
                          className="block text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="w-full border-2 px-4 text-lg py-3 hover:text-blue-700 rounded-2xl font-medium hover:border-blue-400 flex items-center justify-center gap-2 transition-all mt-6"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
