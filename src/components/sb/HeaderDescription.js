import { storyblokEditable } from "@storyblok/react";

export default function HeaderDescription({ body }) {
  // Hämta ut alla "text_block"-bloks från body
  const textBlocks = body?.filter((blok) => blok.component === "text_block") || [];

  return (
    <div className="pl-4 pt-4 w-110">
      {textBlocks.map((blok) => (
        <section key={blok._uid} {...storyblokEditable(blok)} style={{ marginBottom: "2rem" }}>
          <h1 className="text-xl">{blok?.title}</h1>
          <p>{blok?.decription}</p>
        </section>
      ))}
    </div>
  );
}
