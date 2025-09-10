// components/products/ProductCard.jsx
import Link from "next/link";
import Image from "next/image";

function cn(...cls) { return cls.filter(Boolean).join(" "); }

export default function ProductCard({
  title, price, image, slug,

  // nya style-hooks (valfria)
  variant = "grid",              // "grid" (default som innan) | "slider"
  imgHeightClass,               // ex: "h-72 md:h-80 lg:h-96" (tar över variant)
  imgFit = "cover",             // "cover" (som innan) | "contain"
  titleClassName = "",
  priceClassName = "",
  className = "",
}) {
  // förvalda höjder – grid behåller din h-48
  const variantHeights = {
    grid: "h-[250px] ",
    slider: "h-64 md:h-80 lg:h-85",
  };
  const resolvedHeight = imgHeightClass || variantHeights[variant];

  return (
    <Link
      href={`/products/${slug}`}
      className={cn("rounded-lg p-4 hover:shadow-lg bg-white transition-shadow duration-300 block", className)}
    >
      {/* EXACT samma bild-setup som du hade: width/height + 100% */}
      <div className={cn("w-full relative mb-4 rounded-lg overflow-hidden bg-gray-200", resolvedHeight)}>
        {image ? (
          <Image
            src={image}
            alt={title || "Product Image"}
            width={600}
            height={400}
            style={{ objectFit: imgFit, width: "100%", height: "100%" }}
          />
        ) : (
          <div className="w-full h-full bg-white flex items-center justify-center">No Image</div>
        )}
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className={cn("text-sm", titleClassName)}>{title}</h2>
        <p className={cn("text-sm", priceClassName)}>{price ? `$${price}` : "N/A"}</p>
      </div>
    </Link>
  );
}
