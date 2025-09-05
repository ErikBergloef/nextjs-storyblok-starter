// components/products/FeaturedProductsSection.jsx
import { getStoryblokApi } from "@/lib/storyblok";
import FeaturedProductsSlider from "./FeaturedProductsSlider";


export default async function FeaturedProductsSection({
  title = "Featured products",
  limit = 9,
}) {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories", {
    starts_with: "products/",
    is_startpage: 0,
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    per_page: Math.max(10, limit * 2),
    // När du har en featured-flagga i SB:
    // filter_query: { featured: { in: true } },
  });

  const products = (data?.stories || [])
    .map((story) => {
      const c = story.content || {};
      const img = c.image?.filename || null;
      const priceValue = typeof c.price === "string" ? parseFloat(c.price) : c.price;
      return {
        slug: story.slug,
        title: c.title || story.name,
        price: typeof priceValue === "number" && !Number.isNaN(priceValue) ? priceValue : null,
        image: img,
        alt: c.image?.alt || c.title || story.name || "Product image",
      };
    })
    .slice(0, limit);

  if (!products.length) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="/products" className="text-sm underline">View all</a>
      </div>

      <FeaturedProductsSlider products={products} interval={5000} />
    </section>
  );
}
