"use client";

import Header from "./common/Header";
import HeroSwiper from "./components/Hero/Hero";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
import { Products } from "./components/products/Products";
import TestimonialCarousel from "./components/testimonial/Testimonial";

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 scroll-smooth">
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-24">
          <HeroSwiper />
        </section>

        {/* Products Section */}
        <section id="products" className="scroll-mt-24">
          <Products />
        </section>

        {/* About Us Section */}

        <section id="about-us" className="scroll-mt-24">
          <AboutUs />
        </section>

        <section>
          <TestimonialCarousel />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </>
  );
}
