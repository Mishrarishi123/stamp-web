import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" id="contact">
      {/* Main container with responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Section - Contact Details */}
        <section className="px-6 sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              CONTACT US
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-12">
              Contact us to create your perfect stamp today and make your
              impression
            </p>

            {/* Phone Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Phone
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Call us between 9 A.M. to 8 P.M.
              </p>
              <p className="text-sm sm:text-base font-semibold text-black">
                Mobile: 9826018246
              </p>
            </div>

            {/* Office Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Office
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Visit us at our office:
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                208, Dhenu Market Rd, Meera Path, Dhenu Market, Indore, Madhya
                Pradesh 452003
              </p>
            </div>

            {/* Email Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Email
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Contact us by email — we’ll respond shortly.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                verma.stamps@gmail.com
              </p>
            </div>
          </div>
        </section>

        {/* Right Section - Info Box */}
        <section className="px-6 sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center">
          <div className="bg-black rounded-3xl p-8 sm:p-10 lg:p-12 max-w-lg mx-auto w-full lg:max-w-none">
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
              <div className="bg-white rounded-full px-6 py-4 sm:py-5 flex justify-center gap-4 sm:gap-6">
                {/* WhatsApp */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.725-2.852-1.613 0-.889 1.315-1.613 2.852-1.613 1.537 0 2.853.724 2.853 1.613 0 .889-1.316 1.613-2.853 1.613" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="url(#instagramGradient)"
                  >
                    <defs>
                      <linearGradient
                        id="instagramGradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#833AB4" />
                        <stop offset="50%" stopColor="#FD1D1D" />
                        <stop offset="100%" stopColor="#FCAF45" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="3.5" fill="white" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                </a>

                {/* Google */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Google"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                    <text
                      x="12"
                      y="16"
                      fontSize="10"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                    >
                      G
                    </text>
                  </svg>
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
    <div className="bg-white rounded-full px-6 py-4 sm:py-5 flex items-center gap-4 sm:gap-5 w-full">
      <div className="flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm sm:text-base text-black font-medium break-words">
        {text}
      </p>
    </div>
  );
}
