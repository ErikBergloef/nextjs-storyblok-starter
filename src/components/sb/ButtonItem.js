// src/components/sb/ButtonItem.js
import { storyblokEditable } from "@storyblok/react";

export default function ButtonItem({ blok }) {
  if (blok.color_image && blok.color_image.filename) {
    return (
      <button 
        {...storyblokEditable(blok)} 
        className="w-8 h-8 rounded-full border border-black  overflow-hidden"
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
      className="px-4 py-2 border border-black text-sm font-medium hover:bg-gray-100 transition-colors"
    >
      {blok?.label}
    </button>
  );
}