import { storyblokEditable } from "@storyblok/react";

export default function MenuItem({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-blue-100/30 rounded-xl shadow p-4 text-center"
    >
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.name}
          className="w-32 h-32 object-cover mx-auto rounded-lg"
          loading="lazy"
        />
      )}
      <h3 className="mt-4 text-2xl font-semibold">{blok.name}</h3>
      {blok.description && (
        <p className="text-lg mt-2 text-gray-700">{blok.description}</p>
      )}
      {blok.price && (
        <p className="mt-3 font-medium">{blok.price}</p>
      )}
    </div>
  );
}