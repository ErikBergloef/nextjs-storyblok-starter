import { getStoryblokApi } from "@/lib/storyblok";

export default async function ProductPage({ params }) {
  const sb = getStoryblokApi();

  const { data } = await sb.get(`cdn/stories/products/${params.slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  const product = data?.story?.content;

  if (!product) {
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {product.image?.filename && (
          <div className="flex justify-center">
            <img
              src={product.image.filename}
              alt={product.image.alt || product.title}
              className="rounded-2xl shadow-lg max-w-sm w-full"
            />
          </div>
        )}
  
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-lg font-bold">{product.title}</h1>
          {product.price && (
            <p className="text-md font-semibold">
              ${product.price}
            </p>
          )}
          {product.description && (
            <p className="text-xs leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
