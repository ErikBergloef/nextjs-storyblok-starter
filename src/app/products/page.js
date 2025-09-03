import ProductsGrid from "@/components/products/ProductsGrid";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function ProductsPage() {
  const sb = getStoryblokApi();

  const {data} = await sb.get("cdn/stories", {
    starts_with: "products/", // everything in the folder
    is_startpage: 0, //the first index 
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
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

  return(
    <main style={{ padding: "2rem"}}>
      <h1>See our products</h1>
      <ProductsGrid products={products} />
    </main>
  )
};