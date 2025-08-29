import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";

export default function Grid({ blok }) {
  // Mappa SB-options till utility-klasser
  const gap = blok.gap === "lg" ? "gap-8" : blok.gap === "sm" ? "gap-3" : "gap-4";
  const maxWidth =
    blok.maxWidth === "wide" ? "max-w-7xl" :
    blok.maxWidth === "narrow" ? "max-w-3xl" :
    "max-w-5xl";

  return (
    <section {...storyblokEditable(blok)} className="bg-white w-full py-8">
      {(blok.title || blok.intro) && (
        <header className={`${maxWidth} mx-auto mb-6 text-center`}>
          {blok.title && <h2 className="text-3xl font-bold">{blok.title}</h2>}
          {blok.intro && <p className="mt-2 text-gray-600">{blok.intro}</p>}
        </header>
      )}

      <div
        className={`${maxWidth} mx-auto grid ${gap} grid-cols-[repeat(auto-fit,minmax(15.625rem,1fr))]`}
        role="list"
      >
        {blok.columns?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
}
