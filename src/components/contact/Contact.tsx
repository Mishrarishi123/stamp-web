import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import mail from "../../assets/icons/mail.svg";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50" id="contact">
      {/* Main container with responsive grid */}
      <div className="grid px-8 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Section - Contact Details */}
        <section className="px-6 sm:px-8 lg:px-12  py-12 lg:py-20 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Header */}
            <h1 className="text-4xl roboto-slab sm:text-5xl xl:text-6xl font-bold text-black mb-4">
              CONTACT US
            </h1>
            <p className="text-base roboto-slab sm:text-lg text-gray-700 mb-6 xl:mb-6">
              Contact us to create your perfect stamp today and make your
              impression
            </p>

            {/* Phone Section */}
            <div className="mb-10 lg:mb-6 xl:mb-6">
              <h2 className="text-xl font-poppins sm:text-2xl font-bold text-black mb-3">
                Phone
              </h2>
              <p className="text-sm font-poppins font-semibold  sm:text-base text-black mb-2">
                Call us between 9 A.M. to 8 P.M.
              </p>
              <p className="text-sm sm:text-base font-semibold  text-black">
                Mobile: 9826018246
              </p>
            </div>

            {/* Office Section */}
            <div className="mb-10 lg:mb-6 xl:mb-6">
              <h2 className="text-xl font-poppins  sm:text-2xl font-bold text-black mb-3">
                Office
              </h2>
              <p className="text-sm font-poppins font-semibold  sm:text-base text-black mb-2">
                Visit us at our office:
              </p>
              <p className="text-sm  font-semibold font-poppins  sm:text-base text-gray-700">
                208, Dhenu Market Rd, Meera Path, Dhenu Market, Indore, Madhya
                Pradesh 452003
              </p>
            </div>

            {/* Email Section */}
            <div>
              <h2 className="text-xl  font-poppins sm:text-2xl font-bold text-black mb-3">
                Email
              </h2>
              <p className="text-sm font-semibold  font-poppins sm:text-base text-black mb-2">
                Contact us by email — we’ll respond shortly.
              </p>
              <p className="text-sm font-semibold font-poppins  sm:text-base text-gray-700">
                verma.stamps@gmail.com
              </p>
            </div>
          </div>
        </section>

        {/* Right Section - Info Box */}
        <section className=" sm:px-8 lg:px-12 pb-12 lg:pb-20 flex flex-col justify-start">
          <div className="bg-black rounded-b-2xl sm:rounded-b-4xl p-4 sm:p-10 lg:p-6 xl:p-12 max-w-lg mx-auto w-full lg:max-w-none">
            {/* Info Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Info
            </h2>

            {/* Info Cards */}
            <div className="space-y-4">
              <InfoCard
                icon={<Phone className="w-5 h-5 text-black" />}
                text="9826018246"
              />
              <InfoCard
                icon={<Mail className="w-5 h-5 text-black" />}
                text="verma.stamps@gmail.com"
              />
              <InfoCard
                icon={<MapPin className="w-5 h-5 text-black" />}
                text="208, Dhenu Market Rd, Meera Path, Dhenu Market, Indore, MP 452003"
              />
              <InfoCard
                icon={<Clock className="w-5 h-5 text-black" />}
                text="9 A.M. to 8 P.M."
              />

              {/* Social Links */}
              <div className="bg-white mx-auto max-w-xs items rounded-xl px-6 py-4 lg:py-3 xl:py-5 flex justify-center gap-4 sm:gap-6">
                {/* WhatsApp */}
                <a
                  href="#"
                  className="hover:opacity-80  transition-opacity"
                  aria-label="WhatsApp"
                >
                  <img src={whatsapp} alt="" className="h-8" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="hover:opacity-80  transition-opacity"
                  aria-label="Instagram"
                >
                  <img src={instagram} alt="" className="h-8" />
                </a>

                {/* Google */}
                <a
                  href="#"
                  className="hover:opacity-80  transition-opacity"
                  aria-label="Google"
                >
                  <img src={mail} alt="" className="h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// Info Card Component
function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-white rounded-xl xl:rounded-3xl px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-5 w-full">
      {/* Icon */}
      <div className="shrink-0 flex items-start justify-center">{icon}</div>

      {/* Text */}
      <p
        className="text-xs sm:text-sm md:text-base text-black font-medium break-words leading-relaxed 
                   max-w-[260px] sm:max-w-none whitespace-normal"
      >
        {text}
      </p>
    </div>
  );
}

