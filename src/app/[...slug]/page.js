// app/[...slug]/page.jsx
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR, valfritt

export default async function DynamicPage({ params }) {
  // params.slug kan vara ["about"] eller ["products","sko-1"]
  const slugArr = params?.slug;
  const slug = Array.isArray(slugArr) ? slugArr.join("/") : slugArr;

  // root ("/") hanteras av app/page.jsx, så saknad slug => 404 här
  if (!slug) return notFound();

  const sb = getStoryblokApi();
  const version =
    process.env.NODE_ENV === "development" ? "draft" : "published";

  try {
    const { data } = await sb.get(`cdn/stories/${slug}`, { version });
    const story = data?.story;

    if (!story) return notFound();

    // Rendera inte globala/config-stories som "global"
    const type = story.content?.component;
    if (["config", "globals", "global_settings"].includes(type)) {
      return notFound();
    }

    return (
      <div className="page">
        <StoryblokStory story={story} />
      </div>
    );
  } catch (e) {
    console.error("Dynamic page fetch failed:", e);
    return notFound();
  }
}
