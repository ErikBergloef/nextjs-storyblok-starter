import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function SignUpBlock({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h4 className="font-bold mb-2 text-md">{blok.title}</h4>
      <p>{blok.description}</p>
      <input
        type="email"
        placeholder={blok.input_field}
        className="border p-2 mt-2 w-full"
      />
      <button className="bg-black text-white p-2 mt-2 w-full">
        {blok.confirm_button.label || "Confirm"}
      </button>
    </div>
  );
}