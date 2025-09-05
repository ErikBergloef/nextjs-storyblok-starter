// app/page.jsx
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import FeaturedProductsSection from "@/components/sb/FeaturedProductsSection";

export default async function Home() {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories/home", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
      <FeaturedProductsSection title="Summer '25 Picks" limit={9} />
    </div>
  );
}
