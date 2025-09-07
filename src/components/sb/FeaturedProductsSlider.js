// components/products/FeaturedProductsSlider.jsx
"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProductsSlider({
  products = [],
  interval = 5000, // 5s
  auto = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const timerRef = useRef(null);

  // Responsivt: hur många kort per vy
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3); // desktop
      else if (w >= 640) setPerView(2); // tablet
      else setPerView(1); // mobil
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, products.length - perView);
  const pageCount = useMemo(() => maxIndex + 1, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (!auto || products.length <= perView) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [auto, interval, maxIndex, perView, products.length]);

  const goTo = (i) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const prev = () => goTo(index - 1 < 0 ? maxIndex : index - 1);
  const next = () => goTo(index + 1 > maxIndex ? 0 : index + 1);

  if (!products?.length) return null;

  return (
    <div className={`relative pb-10 ${className}`}>
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {products.map((p) => (
            <div
              key={p.slug}
              className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 p-2"
            >
              <ProductCard
                {...p}
                variant="slider" // bara för bildhöjd i slider
                titleClassName="text-xs md:text-lg font-light tracking-wide"
                priceClassName="text-xs md:text-lg font-light text-gray-700"
                
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pilar */}
      {products.length > perView && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center 
             w-14 h-14 rounded-full bg-white/80 hover:bg-red-200/10 shadow hover:text-xl"
          >
            ◀
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center 
             w-14 h-14 rounded-full bg-white/80 hover:bg-red-200/10 shadow hover:text-xl"
          >
            ▶
          </button>
        </>
      )}

      {/* Prickar */}
      {pageCount > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full transition ${
                i === index
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
