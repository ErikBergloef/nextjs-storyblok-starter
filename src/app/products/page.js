// src/app/products/page.js
import ProductsGrid from "@/components/products/ProductsGrid";
import HeaderDescription from "@/components/sb/HeaderDescription";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function ProductsPage() {
  const sb = getStoryblokApi();

  const { data: pageData } = await sb.get("cdn/stories/products", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  
  const { data: productsData } = await sb.get("cdn/stories", {
    starts_with: "products/",
    is_startpage: 0,
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  const products = (productsData?.stories || []).map((story) => {
    const c = story.content || {};
    const priceValue = Number(c.price);

    return {
      slug: story.slug,
      title: c.title || story.name,
      price: Number.isFinite(priceValue) ? priceValue : null,
      image: c.image?.filename ?? null,
      alt: c.image?.alt || c.title || story.name || "Product image",
    };
  });
  
  return (
    <div>
      {/* Skicka in body-innehållet från produktsidan till HeaderDescription */}
      <HeaderDescription body={pageData?.story?.content?.body} />
      <ProductsGrid products={products} />
    </div>
  );
}





 {/* <ButtonRow body={pageData?.story?.content?.body} /> */}