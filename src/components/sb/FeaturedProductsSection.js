import { getStoryblokApi } from "@/lib/storyblok";
import FeaturedProductsSlider from "./FeaturedProductsSlider";

export default async function FeaturedProductsSection({ blok }) {
  const limit = Math.max(1, Number(blok.limit) || 6);
  const title = blok.title || "Featured products";

  const sb = getStoryblokApi();
  const perPage = Math.min(100, Math.max(10, limit * 2)); // hämta fler än vi visar

  const { data } = await sb.get("cdn/stories", {
    starts_with: "products/",
    is_startpage: 0,
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    per_page: perPage,
  });

  const stories = data?.stories ?? [];
  const products = stories.slice(0, limit).map((story) => ({
    slug: story.slug,
    title: story.content?.title || story.name,
    price: Number(story.content?.price) || null,
    image: story.content?.image?.filename ?? null,
    alt:
      story.content?.image?.alt ||
      story.content?.title ||
      story.name ||
      "Product image",
  }));

  if (!products.length) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-2 py-10  border-l border-r">
      <div className="flex items-baseline justify-between">
        <div className="ml-6">
          <h2 className="text-xl font-light mb-1" >{title}</h2>
          <p className="text-md font-light text-gray-500 ">{blok?.description}</p>
        </div>

        <div>
          <a href="/products" className="text-sm underline mr-6">
            View all
          </a>
        </div>
      </div>

      <FeaturedProductsSlider products={products} interval={5000} />
    </section>
  );
}
