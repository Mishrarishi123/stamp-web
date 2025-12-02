"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className }) => (
  <motion.div
    initial={{ opacity: 0.6 }}
    animate={{ opacity: 1 }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
    className={`bg-gray-300 rounded-md ${className}`}
  />
);

const HeaderSkeleton: FC = () => {
  return (
    <header className="hidden md:block fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-10 lg:px-20 z-50">
      <div className="flex justify-between items-center">
        {/* Logo Skeleton */}
        <Skeleton className="h-14 lg:h-20 w-28 lg:w-40" />

        {/* Desktop Navigation Skeleton */}
        <div className="hidden lg:flex gap-8 xl:gap-20">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-28" />
        </div>

        {/* Desktop CTA Skeleton */}
        <div className="hidden lg:block">
          <Skeleton className="h-12 w-40 rounded-2xl" />
        </div>

        {/* Mobile Menu Icon Skeleton */}
        <div className="lg:hidden">
          <Skeleton className="h-8 w-8" />
        </div>
      </div>

      {/* Mobile Menu Skeleton (Optional) */}
      <div className="lg:hidden mt-4 flex flex-col gap-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
