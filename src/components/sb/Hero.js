import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-8"> 
    </div>
  );
}