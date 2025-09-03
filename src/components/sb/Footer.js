import { storyblokEditable } from "@storyblok/react";


export default function Footer({ blok }) {

  return (
    <div
      {...storyblokEditable(blok)} className="bg-white text-center text-2xl text-black"
    >
        <p>Kalla fötter</p>
    </div>
  );
}