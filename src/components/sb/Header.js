import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ blok }) {
  console.log("header::::", blok);
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full h-[100px] flex items-center justify-between px-8 bg-white shadow-md text-black border-b"
    >

      {/* Vänster sektion för logotyp och nav_items */}
      <div className="flex items-center space-x-8">

        {/* Logo */}
        <div className="flex-none">
          <Image src={blok.logo.filename} alt="Logo" width={70} height={40} />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-bold">
            {blok.nav_items?.map((navItem) => (
              <li key={navItem._uid}>
                <Link href={navItem.link.story?.url || "/"}>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Höger sektion för ikoner */}
      <div className="flex-1 flex justify-end items-center">

        {/* Här lägger vi till ikonerna */}
        <div className="flex gap-6">
          <Link href="/search">

            <Image src="/Search_logo.png" alt="Search" width={25} height={25} />
          </Link>
          <Link href="/account">
            <Image src="/Account_logo.png" alt="Search" width={25} height={25} />
          </Link>
          <Link href="/cart">
            <Image src="/Cart_logo.png" alt="Search" width={27} height={27} />
          </Link>
        </div>
      </div>
    </div>
  );
}