import bg1 from "../assets/backgrounds/bg1.png";
import bg2 from "../assets/backgrounds/bg2.png";
import bg3 from "../assets/backgrounds/bg3.png";
import bg4 from "../assets/backgrounds/bg4.png";

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "VERMA STAMPS",
    subtitle: "Your Trusted Partner for Custom Stamps needs.",
    description: "Self inking | Pre- Ink | Embossing Stamps",
    backgroundImage: bg1,
  },
  {
    id: 2,
    title: "About Us",
    subtitle: "A legacy of precision and reliability.",
    description:
      "Verma Stamps is more than just a name; it's a legacy of precision and reliability",
    backgroundImage: bg2,
  },
  {
    id: 3,
    title: "Why Choose Us?",
    subtitle: "Grow your product without infrastructure headaches",
    description: "Precision | Durability | Speed | Support",
    backgroundImage: bg3,
  },
  {
    id: 4,
    title: "Find Your Perfect Stamp",
    subtitle: "Precision Crafted for Every Professional Need",
    description:
      "Self-Inking | Pre-Inked | Embossing Stamps | Traditional Wood Handle | Dater Stamps | Signature Stamps | Numbering Stamps",
    backgroundImage: bg4,
  },
];
