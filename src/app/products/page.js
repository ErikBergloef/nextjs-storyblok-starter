import ProductsGrid from "@/components/products/ProductsGrid";
import { getStoryblokApi } from "@/lib/storyblok";
import ButtonRow from "@/components/sb/ButtonRow";
import HeaderDescription from "@/components/sb/HeaderDescription";

export default async function ProductsPage() {
  const sb = getStoryblokApi();

  const { data } = await sb.get("cdn/stories", {
    starts_with: "products/",
    is_startpage: 0,
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    // per_page: 100, // valfritt: hämta fler om du har många produkter
  });

  const products = (data?.stories || []).map((story) => {
    const c = story.content || {};
    const img = c.image?.filename || null;
    return{
      slug: story.slug,
      title: c.title || story.name,
      price: typeof c.price === "number" ? c.price: null,
      image: img,
      alt: c.image?.alt || c.title || story.name || "Product image",
    };
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1>See our products</h1>
      <ProductsGrid products={products} />
    </main>
  )
};