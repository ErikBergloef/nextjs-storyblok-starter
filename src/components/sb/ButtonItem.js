import { storyblokEditable } from "@storyblok/react";

export default function ButtonItem({ blok, isActive, onClick }) {
  if (blok.color_image && blok.color_image.filename) {
    return (
      <button
        {...storyblokEditable(blok)}
        onClick={onClick}
        className={`w-8 h-8 rounded-full border overflow-hidden 
          ${isActive ? "ring-2 ring-black" : "border-black"}`}
      >
        <img 
          src={blok.color_image.filename} 
          alt={blok.color_image.alt || "Color swatch"} 
          className="w-full h-full object-cover" 
        />
      </button>
    );
  }

  return (
    <button
      {...storyblokEditable(blok)}
      onClick={onClick}
      className={`w-27 h-10 flex items-center justify-center border text-sm font-medium transition-colors
        ${isActive ? "bg-black text-white border-black" : "border-black hover:bg-gray-100"}`}
    >
      {blok?.label}
    </button>
  );
}
