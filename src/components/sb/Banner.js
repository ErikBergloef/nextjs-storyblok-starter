import { storyblokEditable } from "@storyblok/react/rsc";

export default function Banner({ blok }) {
  const logos = Array.isArray(blok.logos) ? blok.logos : [];
  const images = logos.length ? logos : [];

  return (
    <section {...storyblokEditable(blok)} className="w-full h-auto border-r border-l ">
      <div className="flex items-center justify-between gap-2 overflow-x-auto py-8 px-20 ">
        {images.map((asset, i) =>
          asset.filename ? (
            <img
              key={asset.id ?? `${asset.filename}-${i}`}
              src={asset.filename}
              alt={"Logo"}
              className="h-25 w-25 object-contain"
            />
          ) : null
        )}
      </div>
    </section>
  );
}
