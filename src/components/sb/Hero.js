import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative flex flex-col items-center justify-center text-center h-[50vh] bg-cover bg-center  bg-white"
    >

      {/* Content */}
      <div>
        <img
          src={blok?.icon?.filename}
          alt="Image"
          className="mx-auto mb-4 w-32 h-32 object-contain drop-shadow-md"
        ></img>
        <h1 className="text-6xl font-bold drop-shadow-sm">{blok.title}</h1>
        <h4 className="mt-2 text-3xl drop-shadow-sm">{blok.paragraph}</h4>
      </div>
    </div>
  );
}
