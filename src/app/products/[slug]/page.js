import { getStoryblokApi } from "@/lib/storyblok";
import { storyblokEditable } from "@storyblok/react";
import ButtonItem from "@/components/sb/ButtonItem";

export default async function ProductPage({ params }) {
  const sb = getStoryblokApi();
  

  const { data } = await sb.get(`cdn/stories/products/${params.slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  const product = data?.story?.content;

  if (!product) {
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  const colorButtonRow = product?.colors?.find((blok) => blok.component === "button_row");

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

          {colorButtonRow && colorButtonRow.button.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <p className="font-bold text-sm">Color:</p>
              <div className="flex flex-row gap-4" {...storyblokEditable(colorButtonRow)}>
                {colorButtonRow.button.map(btn => (
                  <ButtonItem blok={btn} key={btn._uid} />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {product.sizes && product.sizes.length > 0 && (
              <>
                <p className="font-bold text-sm">Sizes:</p>
                {product.sizes.map(sizeRow => (
                  <div key={sizeRow._uid} className="flex flex-wrap gap-1">
                    {sizeRow.button.map(button => (
                      <button key={button.uid} className="px-4 py-2 border-1 border-black  text-sm font-medium hover:bg-gray-100 transition-colors">
                        {button.label}
                      </button>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}