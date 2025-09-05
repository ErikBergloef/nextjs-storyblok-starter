import { storyblokEditable } from "@storyblok/react";

export default function HeaderDescription({ blok }) {
    const textBlocks = blok?.text_blocks || [];
    
    return(
        <div className="pl-4 pt-4 w-110" {...storyblokEditable(blok)}>
            {textBlocks.map((block) => (
                <section key={block._uid} style={{ marginBottom: "2rem" }}>
                    <h1 className="text-xl">{block.titel}</h1>
                    <p>{block.decription}</p>
                </section>
            ))}
        </div>
    );
}