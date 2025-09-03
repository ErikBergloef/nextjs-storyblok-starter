import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Header({ blok }) {
  console.log("header::::", blok);
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full bg-fixed h-[100px]
      flex items-center justify-between px-8 bg-white shadow-md text-black"
    >
   
      <nav>
        <ul className="flex space-x-6">
          {blok.nav_items?.map((navItem) => (
            <li key={navItem._uid}>
              <Link href={navItem.link.story?.url || "/"}>{navItem.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}