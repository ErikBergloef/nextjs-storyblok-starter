import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Page({ params }) {
  try {
    //Array of slug parts ex ['blog', 'post-title']
    const { slug } = await params;

    // If slug is empty or undefined, handle it as a 404
    if (!slug || slug.length === 0) {
      return notFound();
    }

    const data = await fetchData(slug);
    console.log("data::::", data);

    // Kontrollera om den hämtade storyn är en global_settings-komponent eller liknande
    const componentType = data?.data?.story?.content?.component;
    if (
      componentType === "config" ||
      componentType === "globals" ||
      componentType === "global_settings"
    ) {
      console.error(
        `Attempted to render a non-page component: ${componentType}`
      );
      return notFound();
    }

    //TODO: Replace with StoryblokStory component and add a fallback component
    const storyblokApi = getStoryblokApi();
    const products = await storyblokApi.get(`cdn/stories/`, {
      version: "draft",
      content_type: "product",
    });
    console.log("products::::", products);

    return (
      <div className="page">
        <StoryblokStory story={data.data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error, error.message);
    return notFound();
  }
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  // Hantera fallet där slug är tom
  const path = slug ? slug.join("/") : "home";
  return await storyblokApi.get(`cdn/stories/${path}`, {
    version: "draft",
  });
}
