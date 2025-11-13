"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import googlemail from "../../assets/icons/googlemail.svg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden" id="contact">
      <div className="grid px-8 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* LEFT SECTION */}
        <motion.section
          className=" sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="max-w-lg">
            {/* Header */}
            <motion.h1
              className="text-4xl roboto-slab sm:text-5xl xl:text-6xl font-bold text-black mb-4"
              variants={fadeUp}
            >
              CONTACT US
            </motion.h1>
            <motion.p
              className="text-base roboto-slab sm:text-lg text-gray-700 mb-6 xl:mb-6"
              variants={fadeUp}
            >
              Contact us to create your perfect stamp today and make your
              impression
            </motion.p>

            {/* Phone Section */}
            <motion.div className="mb-10 lg:mb-6 xl:mb-6" variants={fadeUp}>
              <h2 className="text-xl font-poppins sm:text-2xl font-bold text-black mb-3">
                Phone
              </h2>
              <p className="text-sm font-poppins font-semibold sm:text-base text-black mb-2">
                Call us between 9 A.M. to 8 P.M.
              </p>
              <p className="text-sm sm:text-base font-semibold text-black">
                Mobile: 9826018246
              </p>
            </motion.div>

            {/* Office Section */}
            <motion.div className="mb-10 lg:mb-6 xl:mb-6" variants={fadeUp}>
              <h2 className="text-xl font-poppins sm:text-2xl font-bold text-black mb-3">
                Office
              </h2>
              <p className="text-sm font-poppins font-semibold sm:text-base text-black mb-2">
                Visit us at our office:
              </p>
              <p className="text-sm font-semibold font-poppins sm:text-base text-gray-700">
                20B, Dhenu Market Rd, Meera Path, Dhenu Market, Indore, Madhya
                Pradesh 452003
              </p>
            </motion.div>

            {/* Email Section */}
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-poppins sm:text-2xl font-bold text-black mb-3">
                Email
              </h2>
              <p className="text-sm font-semibold font-poppins sm:text-base text-black mb-2">
                Contact us by email — we’ll respond shortly.
              </p>
              <p className="text-sm font-semibold font-poppins sm:text-base text-gray-700">
                verma.stationery.and.stamps@gmail.com
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* RIGHT SECTION */}
        <motion.section
          className="sm:px-8 lg:px-12 pb-12 lg:pb-20 flex flex-col justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.div
            className="
    bg-black 
    rounded-2xl sm:rounded-3xl   /* Fully rounded on mobile */
    lg:rounded-b-2xl lg:rounded-t-none /* Only bottom-rounded on large screens */
    p-4 sm:p-10 lg:p-6 xl:p-12 
    max-w-lg mx-auto w-full lg:max-w-none
  "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-8"
              variants={fadeUp}
            >
              Info
            </motion.h2>

            {/* Info Cards with staggered animation */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.div variants={fadeUp}>
                <InfoCard
                  icon={<Phone className="w-5 h-5 text-black" />}
                  text="9826018246"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <InfoCard
                  icon={<Mail className="w-5 h-5 text-black" />}
                  text="verma.stationery.and.stamps@gmail.com "
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <InfoCard
                  icon={<MapPin className="w-5 h-5 text-black" />}
                  text="20B, Dhenu Market Rd, Meera Path, Dhenu Market, Indore, Madhya Pradesh 452003"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <InfoCard
                  icon={<Clock className="w-5 h-5 text-black" />}
                  text="9 A.M. to 8 P.M."
                />
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="bg-white mx-auto max-w-xs items rounded-xl px-6 py-4 lg:py-3 xl:py-3 flex justify-center gap-4 sm:gap-6"
                variants={fadeUp}
              >
                <a
                  href="https://wa.me/+918989657680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <img src={whatsapp} alt="Chat on WhatsApp" className="h-8" />
                </a>

                <a
                  href="https://www.instagram.com/verma.stationery.and.stamps/?utm_source=ig_web_button_share_sheet"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <img src={instagram} alt="" className="h-8" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=verma.stationery.and.stamps@gmail.com&su=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20know%20about..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Send Email"
                >
                  <img
                    src={googlemail}
                    alt="Send Email"
                    className="h-7.5 w-10"
                  />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}

// InfoCard Component
function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-white rounded-xl xl:rounded-3xl px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-4 sm:gap-5 w-full">
      {/* Icon */}
      <div className="shrink-0 flex items-center justify-center">{icon}</div>

      {/* Text */}
      <p
        className="text-xs sm:text-sm md:text-base text-black font-medium leading-relaxed 
                   break-all whitespace-normal max-w-full"
      >
        {text}
      </p>
    </div>
  );
}

