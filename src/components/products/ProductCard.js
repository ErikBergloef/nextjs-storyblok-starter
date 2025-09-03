import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ title, price, image, slug }) {
  return (
    <Link
      href={`/products/${slug}`}
      className="rounded-lg p-4 hover:shadow-lg bg-white transition-shadow duration-300 block"
    >
      <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt="Product Image"
            width={600}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <div className="w-full h-full bg-white flex items-center justify-center">
            {" "}
            No Image{" "}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm">{title}</h2>
        <p className="text-sm">
          {price ? `$${price}` : "N/A"}
        </p>
      </div>
    </Link>
  );
}