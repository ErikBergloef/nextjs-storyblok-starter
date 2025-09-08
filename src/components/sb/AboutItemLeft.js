import { storyblokEditable } from "@storyblok/react/rsc";

export default function AboutItemLeft({ blok }) {
  return (
    <article {...storyblokEditable(blok)} className="">
      <div className="grid items-center md:grid-cols-2 
      border-l border-r border-b">
        {/* Bild vänster */}
        <div>
          {blok.image?.filename && (
            <img
              src={blok.image.filename}
              alt={blok.title || "About image"}
              className="w-full h-auto object-cover border-r"
            />
          )}
        </div>

        {/* Text höger */}
        <div className="ml-15 mr-12">
          {blok.title && <h2 className="text-4xl font-light">{blok.title}</h2>}
          {blok.description && (
            <p className="mt-4 text-lg leading-relaxed">{blok.description}</p>
          )}
        </div>
      </div>
    </article>
  );
}
