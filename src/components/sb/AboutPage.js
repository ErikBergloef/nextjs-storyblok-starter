import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function AboutPage({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-gray-50">
      <div className="w-full h-full pr-8 pl-8 border-r border-l border-t">
        {Array.isArray(blok.body) &&
          blok.body.map((nested) => (
            <StoryblokServerComponent blok={nested} key={nested._uid} />
          ))}
      </div>
    </section>
  );
}
