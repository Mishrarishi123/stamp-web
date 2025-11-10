"use client";
import { useRef, useState } from "react";
import type { MouseEvent, TouchEvent } from "react";
import { Card } from "./Card";

type Product = {
  id: string | number;
  name: string;
  rating: number;
  description: string;
  image: string;
};

interface GalleryProps {
  products: Product[];
  galleryClass?: string; // 👈 allow passing a custom class
}

export function Gallery({ products, galleryClass = "gallery" }: GalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    if (!container) return;
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="relative">
      {/* Scrollable Gallery */}
      <div
        ref={scrollContainerRef}
        className={`${galleryClass} flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none pb-4 px-2`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {products.map((product: Product) => (
          <div key={product.id} className="min-w-[260px] sm:min-w-[270px]">
            <Card
              id={
                typeof product.id === "number" ? product.id : Number(product.id)
              }
              name={product.name}
              rating={product.rating}
              description={product.description}
              image={product.image}
            />
          </div>
        ))}
      </div>

      {/* Hide scrollbars */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
