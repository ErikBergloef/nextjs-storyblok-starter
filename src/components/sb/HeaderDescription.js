import { storyblokEditable } from "@storyblok/react";

export default function HeaderDescription({ body }) {

  const textBlocks = body?.filter((blok) => blok.component === "text_block") || [];

  return (
    <div className="pl-4 pr-4 pt-4 w-[100vw] mb-2 mt-2 ml-2">
      {textBlocks.map((blok) => (
        <section key={blok._uid} {...storyblokEditable(blok)} style={{ marginBottom: "2rem" }}>
         <div className="flex items-center gap-3 " >
          <span
              aria-hidden
              className="inline-block h-2 w-2 mb-1.5 bg-black rounded-[2px]"/> 
          <h1 className="text-xl font-light mb-2 ">{blok?.title}</h1>
         </div>
         <div>
          <p className="text-md font-light text-gray-500">{blok?.decription}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
