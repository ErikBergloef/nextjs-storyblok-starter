import { storyblokEditable } from "@storyblok/react";

export default function AboutSection({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-gray-50 py-12"
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        {blok.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.title}
            className="w-40 h-40 mx-auto rounded-full mb-6 object-cover"
          />
        )}
        <h2 className="text-4xl font-bold">{blok.title}</h2>
        {blok.subtitle && (
          <h3 className="mt-2 text-2xl text-gray-600">{blok.subtitle}</h3>
        )}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {blok.text}
        </p>
      </div>
    </section>
  );
}