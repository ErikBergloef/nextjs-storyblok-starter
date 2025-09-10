import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="border w-full h-[9vh] flex items-center justify-between px-8 bg-white shadow-md text-black"
    >
      {/* Vänster sektion för loggor + navigation */}
      <div className="flex items-center space-x-6">
        
        {/* Grupp för loggorna */}
        <div className="flex items-center">
          {/* Logo 1 */}
          <Link href="/" aria-label="Home" className="block mb-2">
            <Image
              src={blok.logo?.filename}
              alt={blok.logo?.alt || "Företagsnamn"}
              width={50}
              height={40}
              priority
              sizes="70px"
            />
          </Link>

          {/* Logo 2 */}
          <Link href="/" aria-label="Home" className="block">
            <Image
              src={blok.logo_2?.filename}
              alt={blok.logo_2?.alt || "Företagsnamn"}
              width={80}
              height={60}
              priority
              sizes="70px"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-light">
            {blok.nav_items?.map((navItem) => (
              <li key={navItem._uid}>
                <Link href={navItem.link?.cached_url || "/"}>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Höger sektion för ikoner */}
      <div className="flex-1 flex justify-end items-center">
        <div className="flex gap-6">
          <Link href="/search">
            <Image src="/Search_logo.png" alt="Sök" width={25} height={25} />
          </Link>
          <Link href="/account">
            <Image src="/Account_logo.png" alt="Konto" width={25} height={25} />
          </Link>
          <Link href="/cart">
            <Image src="/Cart_logo.png" alt="Varukorg" width={27} height={27} />
          </Link>
        </div>
      </div>
    </div>
  );
}
