"use client";
import React, { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

type ProductDetailsProps = {
  product: {
    id: number;
    name: string;
    rating: number;
    description: string;
    image: string;
  } | null;
  onClose: () => void;
};

export default function ProductDetails({
  product,
  onClose,
}: ProductDetailsProps) {
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    setMainImage(0);
  }, [product?.id]);

  const features = [
    "Pre-Inked & Ready To Use – No Additional Ink Pad Required",
    "High-Definition Impression – Neat and Professional Output",
    "Durable & Long-Lasting – Designed For Daily Usage",
    "Quick & Smooth Operation – Easy One-Press Mechanism",
    "Refillable – Can Be Re-Inked For Extended Use",
    "Compact & Lightweight – Easy To Carry and Store",
    "Ideal For: Office Documents, Invoices, Packages, etc.",
  ];

  //  Updated WhatsApp share function
  const handleWhatsappShare = () => {
    if (!product) return;

    const phoneNumber = "+91 9343309480"; //  Replace this with your WhatsApp number
    const message = `Hello! I’m interested in *${
      product.name
    }*.\n\nCould you please share more details?\n\nProduct link: ${
      typeof window !== "undefined" ? window.location.href : ""
    }`;

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${phoneNumber.replace(
          /\D/g,
          ""
        )}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null;

  const thumbnailImages = [product.image].filter(Boolean);
  const activeImage = thumbnailImages[mainImage] ?? product.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 md:py-8"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-6xl h-[70vh] md:max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="fixed right-4 top-4 rounded-full border border-gray-300 bg-white/90 p-2 text-gray-600 hover:text-black transition"
          aria-label="Close product details"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="py-8 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Product Images */}
            <div className="flex flex-col items-center space-y-6">
              {/* Main Product Image */}
              <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[75%] mx-auto aspect-square rounded-3xl overflow-hidden shadow-sm">
                <img
                  src={activeImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              {thumbnailImages.length > 1 && (
                <div className="flex gap-3 flex-wrap justify-center">
                  {thumbnailImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMainImage(idx)}
                      className="relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden"
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Description */}
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm leading-relaxed text-gray-700">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  ⭐ Rated {product.rating}/5
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Features
                </h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/*  WhatsApp Button with direct number */}
              <button
                type="button"
                onClick={handleWhatsappShare}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 py-3 text-white text-sm md:text-base font-semibold transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Contact or Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
