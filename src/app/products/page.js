
// import ProductsGrid from "@/components/products/ProductsGrid";
// import { getStoryblokApi } from "@/lib/storyblok";

// export default async function ProductsPage() {
//   const sb = getStoryblokApi();

//   const {data} = await sb.get("cdn/stories", {
//     starts_with: "products/", // everything in the folder
//     is_startpage: 0, //the first index 
//     version: process.env.NODE_ENV === "development" ? "draft" : "published",
//   });

//   const products = (data?.stories || []).map((story) => {
//     const c = story.content || {};
//     const img = c.image?.filename || null;

//     return{
//       slug: story.slug,
//       title: c.title || story.name,
//       price: typeof c.price === "number" ? c.price: null,
//       image: img,
//       alt: c.image?.alt || c.title || story.name || "Product image",
//     };

//   });

//   return(
//     <main style={{ padding: "2rem"}}>
//       <h1>See our products</h1>
//       <ProductsGrid products={products} />
//     </main>
//   )
// };

import ProductsGrid from "@/components/products/ProductsGrid";
import { getStoryblokApi } from "@/lib/storyblok";
import ButtonRow from "@/components/sb/ButtonRow";
import HeaderDescription from "@/components/sb/HeaderDescription";

export default async function ProductsPage() {
  const sb = getStoryblokApi();

  // Hämta själva sidan "products"
  const { data: pageData } = await sb.get("cdn/stories/products", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  // Hämta alla produkter under products/
  const { data: productsData } = await sb.get("cdn/stories", {
    starts_with: "products/",
    is_startpage: 0,
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  const products = (productsData?.stories || []).map((story) => {
    const c = story.content || {};
    const img = c.image?.filename || null;
    
    const priceValue = typeof c.price === "string" ? parseFloat(c.price) : c.price;

    return {
      slug: story.slug,
      title: c.title || story.name,
      price: typeof priceValue === "number" && !isNaN(priceValue) ? priceValue : null,
      image: img,
      alt: c.image?.alt || c.title || story.name || "Product image",
    };
  });

  // Plocka ut textblock från sidan
  const textBlocks = pageData?.story?.content?.body || [];
const buttonRowBlok = pageData?.story?.content?.body?.find(
  (blok) => blok.component === "button_row"
);
  return (
   
      <div>
      <HeaderDescription blok={{ text_blocks: textBlocks }} />
      <ButtonRow blok={buttonRowBlok} />
      <ProductsGrid products={products} />
   </div>
  );
}
