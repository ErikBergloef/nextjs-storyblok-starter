// src/components/sb/StoryblokImage.js
import Image from "next/image";

export default function StoryblokImage({ src, alt, ...props }) {
    // Returnera Next.js Image-komponenten med de korrekta propsen
    return <Image src={src} alt={alt} {...props} />;
}