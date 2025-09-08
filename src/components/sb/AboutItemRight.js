import { storyblokEditable } from "@storyblok/react/rsc";

export default function AboutItemRight({ blok }) {
  return (
    <article {...storyblokEditable(blok)} className="">
      <div className="grid items-center md:grid-cols-2 
      border-l border-r border-b">
        {/* Bild höger */}
        <div className="md:order-2">
          {blok.image?.filename && (
            <img
              src={blok.image.filename}
              alt={blok.title || "About image"}
              className="w-full h-auto  object-cover border-l"
            />
          )}
        </div>

        {/* Text vänster */}
        <div className="md:order-1 mr-12 ml-15">
          {blok.title && <h2 className="text-4xl font-extralight">{blok.title}</h2>}
          {blok.description && (
            <p className="mt-4 text-lg font-extralight leading-relaxed">{blok.description}</p>
          )}
        </div>
      </div>
    </article>
  );
}
