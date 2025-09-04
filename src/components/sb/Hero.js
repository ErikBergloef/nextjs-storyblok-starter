// src/components/sb/Hero.js
import { storyblokEditable } from "@storyblok/react";
import StoryblokImage from "./StoryblokImage";

export default function Hero({ blok }) {
  const items = (blok?.hero_item || []).slice(0, 3); // max 3

  return (
    <section {...storyblokEditable(blok)} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-black">
        {items.map((item, i) => {
          if (!item?.image?.filename) return null;

          return (
            <div key={item._uid || i} className="relative bg-white">
              {/* Stabil layout utan hopp med aspect-ratio */}
              <div className="w-full relative h-[450px] md:h-[90vh]">
                <StoryblokImage
                  src={item.image.filename}
                  alt={item.image.alt || item.title || "Hero image"}
                  fill
                  className="object-cover"
                  // Tydliga breakpoints så browsern väljer rätt srcset-kandidat
                  sizes="(min-width: 1536px) 33vw, (min-width: 1280px) 33vw, (min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>

              {item.title && (
                <div className="absolute bottom-3 left-3 text-slate-950/90 bg-white/90 px-2 py-1 ">
                  <h3 className="md:text-md lg:text-lg font-light italic">{item.title}</h3>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
