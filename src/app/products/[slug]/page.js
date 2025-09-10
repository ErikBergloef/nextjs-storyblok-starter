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
    <main className="p-8 border-l border-r border-t">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Produktbild */}
        {product.image?.filename && (
          <div className="flex justify-start">
            <div className="image-container rounded-2xl shadow-lg max-w-sm w-full overflow-hidden">
              <img
                src={product.image.filename}
                alt={product.image.alt || product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Produktinfo */}
        <div className="flex flex-col justify-start space-y-6">

          {/* Titel & pris */}
          <div className="">
            <h1 className="text-xl font-light mb-2">{product.title}</h1>
            {product.price && <p className="text-md ">${product.price}</p>}
          </div>

          {/* Beskrivning */}
          {product.description && (
            <div className=" text-[13px] leading-relaxed">
              <p>{product.description}</p>
            </div>
          )}

          {/* Färger */}
          {colorButtonRow && colorButtonRow.button.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className=" text-md">Color:</p>
              <div className="flex flex-row gap-4 flex-wrap" {...storyblokEditable(colorButtonRow)}>
                {colorButtonRow.button.map((btn) => (
                  <ButtonItem blok={btn} key={btn._uid} />
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-md">Sizes:</p>
              {product.sizes.map((sizeRow) => (
                <div
                  key={sizeRow._uid}
                  className="flex flex-wrap gap-2"
                  {...storyblokEditable(sizeRow)}
                >
                  {sizeRow.button.map((btn) => (
                    <label key={btn._uid}>
                      <input
                        type="radio"
                        name="size"
                        value={btn.label}
                        className="peer hidden"
                      />
                      <span className="w-12 h-12 flex justify-center items-center border border-black text-sm font-medium 
                             peer-checked:bg-black peer-checked:text-white">
                        {btn.label}
                      </span>
                    </label>
                    
                  ))}
                  
                </div>
                
                
              ))}
              <div>
                  <p className="text-start l-20 mb-3 underline text-gray-600 text-sm mt-8">Size & Fit guide</p>
              </div>
            </div>
            
          )}

        </div>

      </div>
      
    </main>
  );
}
