"use client";

import about1 from "../../assets/aboutUs/about1.png";
import about2 from "../../assets/aboutUs/about2.png";
import about3 from "../../assets/aboutUs/about3.png";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 w-full py-20 px-6 md:px-12 lg:px-20 bg-background"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl roboto-slab md:text-6xl font-black">
          ABOUT US
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="flex flex-col gap-8 lg:gap-4 xl:gap-8">
          <h2 className="text-3xl text-center md:text-start roboto-slab md:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight text-foreground">
            CRAFTING TRUSTED
            <br />
            IMPRESSIONS
            <br />
            SINCE 2003
          </h2>

          <p className="text-base roboto-slab text-justify md:text-lg lg:text-sm xl:text-xl leading-relaxed text-foreground/90">
            We have been dedicated to crafting high-quality rubber stamps and
            seals for businesses, offices, and professionals. With years of
            experience, we understand the importance of accuracy, trust, and
            durability in every stamp. From simple name stamps to customized
            company seals, our products are made with care and precision. Our
            commitment to quality and customer satisfaction has helped us grow
            from a small local shop into a trusted stamp maker in the community.
          </p>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* Left column of images */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-md h-35 sm:h-60 md:h-60 lg:h-38 xl:h-55">
              <img
                src={about1}
                alt="Professional office team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-md h-35 sm:h-60 md:h-60 lg:h-38 xl:h-55">
              <img
                src={about2}
                alt="Stamp applicators collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right tall image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md min-h-[200px] md:min-h-[500px] lg:min-h-[330px] xl:min-h-[450px]">
            <img
              src={about3}
              alt="Self-inking stamp marking document"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
