// src/components/sb/StoryblokImage.js
import Image from "next/image";

export default function StoryblokImage({ src, alt, ...props }) {
  return <Image src={src} alt={alt || ""} {...props} />;
}
