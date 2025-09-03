import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative bg-cover bg-no-repeat bg-center h-[50vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${blok?.image?.filename})`,
      }}
    >
        <div className="flex flex-col items-center justify-center">

       
      <h1 className="text-6xl font-bold">{blok.title}</h1>
      <p className="text-2xl">{blok.paragraph}</p>
       </div>
    </div>
  );
}