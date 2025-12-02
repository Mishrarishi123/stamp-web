"use client";

export default function ProductsSkeleton() {
  const shimmer =
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

  return (
    <main className="bg-background roboto-slab min-h-screen overflow-hidden animate-fade">
      {/* ===== Header Skeleton ===== */}
      <div className="max-w-8xl mx-auto px-4 md:px-0 py-12 md:py-16">
        <div className="flex flex-col items-center gap-4">
          <div className={`${shimmer} w-64 h-10 rounded-lg bg-gray-300`}></div>
          <div className={`${shimmer} w-96 h-6 rounded-lg bg-gray-300`}></div>
        </div>
      </div>

      {/* ===== Sections Skeleton ===== */}
      <div className="max-w-7xl md:max-w-[90vw] lg:max-w-[84vw] mx-auto px-4 md:px-0 py-12 space-y-24">
        {/* === Stamps Section Skeleton === */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className={`${shimmer} w-40 h-8 bg-gray-300 rounded-lg`}></div>

            <div className="flex gap-2">
              <div
                className={`${shimmer} w-10 h-10 bg-gray-300 rounded-full`}
              ></div>
              <div
                className={`${shimmer} w-10 h-10 bg-gray-300 rounded-full`}
              ></div>
            </div>
          </div>

          {/* Gallery skeleton (6 items) */}
          <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`${shimmer} min-w-[220px] h-64 bg-gray-300 rounded-xl`}
              ></div>
            ))}
          </div>
        </section>

        {/* === Visiting Cards Section Skeleton === */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className={`${shimmer} w-56 h-8 bg-gray-300 rounded-lg`}></div>

            <div className="flex gap-2">
              <div
                className={`${shimmer} w-10 h-10 bg-gray-300 rounded-full`}
              ></div>
              <div
                className={`${shimmer} w-10 h-10 bg-gray-300 rounded-full`}
              ></div>
            </div>
          </div>

          {/* Gallery skeleton */}
          <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`${shimmer} min-w-[220px] h-64 bg-gray-300 rounded-xl`}
              ></div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
