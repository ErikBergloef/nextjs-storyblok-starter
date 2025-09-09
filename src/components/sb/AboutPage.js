import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function AboutPage({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-gray-50">
      <div className="w-full h-full ">
        {Array.isArray(blok.body) &&
          blok.body.map((nested) => (
            <StoryblokServerComponent blok={nested} key={nested._uid} />
          ))}
      </div>
    </section>
  );
}
