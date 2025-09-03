// src/components/sb/Hero.js
import { storyblokEditable } from "@storyblok/react";
import StoryblokImage from "./StoryblokImage"; // Se till att denna komponent finns

export default function Hero({ blok }) {
  // Här lägger vi till en fall-back om du inte har exakt 3 hero_items
  const items = blok.hero_item || [];

  return (
    <div {...storyblokEditable(blok)} className="relative bg-white "> 
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
        
        {/* Vänster objekt */}
        {items[0] && (
          <div key={items[0]._uid} className="w-full md:w-1/3 relative h-[400px] md:h-[600px] flex-shrink-0 border-l border-black">
             {items[0].image && (
                <StoryblokImage
                    src={items[0].image.filename}
                    alt={items[0].image.alt || items[0].title}
                    fill={true}
                    className="object-cover"
                />
            )}
            {items[0].title && (
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  <h3 className="text-sm font-semibold">{items[0].title}</h3>
                </div>
            )}
          </div>
        )}

        {/* Mitten objekt (störst) */}
        {items[1] && (
          <div key={items[1]._uid} className="w-full md:w-1/3 relative h-[400px] md:h-[600px] flex-grow  border-l border-black">
             {items[1].image && (
                <StoryblokImage
                    src={items[1].image.filename}
                    alt={items[1].image.alt || items[1].title}
                    fill={true}
                    className="object-cover"
                />
            )}
            {items[1].title && (
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  <h3 className="text-sm font-semibold">{items[1].title}</h3>
                </div>
            )}
          </div>
        )}

        {/* Höger objekt */}
        {items[2] && (
          <div key={items[2]._uid} className="w-full md:w-1/3 relative h-[400px] md:h-[600px] flex-shrink-0 border-r border-l border-black">
             {items[2].image && (
                <StoryblokImage
                    src={items[2].image.filename}
                    alt={items[2].image.alt || items[2].title}
                    fill={true}
                    className="object-cover"
                />
            )}
            {items[2].title && (
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  <h3 className="text-sm font-semibold">{items[2].title}</h3>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}