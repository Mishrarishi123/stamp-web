"use client";

export default function AboutSkeleton() {
  return (
    <section
      id="about-us-skeleton"
      className="scroll-mt-24 w-full py-20 px-6 md:px-12 lg:px-20 bg-background animate-pulse"
    >
      {/* Title Skeleton */}
      <div className="mb-16 text-center">
        <div className="h-10 md:h-14 w-48 md:w-72 bg-muted rounded-lg mx-auto" />
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content Skeleton */}
        <div className="flex flex-col gap-8 lg:gap-4 xl:gap-8">
          {/* Heading Lines */}
          <div className="space-y-3">
            <div className="h-8 bg-muted rounded-md w-3/4" />
            <div className="h-8 bg-muted rounded-md w-2/3" />
            <div className="h-8 bg-muted rounded-md w-1/2" />
          </div>

          {/* Paragraph Skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded-md w-full" />
            <div className="h-4 bg-muted rounded-md w-[90%]" />
            <div className="h-4 bg-muted rounded-md w-[95%]" />
            <div className="h-4 bg-muted rounded-md w-[85%]" />
            <div className="h-4 bg-muted rounded-md w-[70%]" />
          </div>
        </div>

        {/* Right Images Skeleton */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* Left Column Skeleton Images */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full rounded-3xl bg-muted h-40 sm:h-60 md:h-60 lg:h-48 xl:h-56" />
            <div className="w-full rounded-3xl bg-muted h-40 sm:h-60 md:h-60 lg:h-48 xl:h-56" />
          </div>

          {/* Tall Right Image Skeleton */}
          <div className="w-full rounded-3xl bg-muted min-h-[200px] md:min-h-[500px] lg:min-h-[330px] xl:min-h-[450px]" />
        </div>
      </div>
    </section>
  );
}
