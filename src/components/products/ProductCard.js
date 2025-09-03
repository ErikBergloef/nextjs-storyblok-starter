import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ title, price, image, slug }) {
  return (
    <Link
      href={`/products/${slug}`}
      className="rounded-sm p-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-full h-48 relative mb-4">
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
    </Link>
  );
}