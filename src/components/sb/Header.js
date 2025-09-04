import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full h-[9vh] flex items-center justify-between px-8 bg-white shadow-md text-black border-b"
    >
      {/* Vänster sektion för logotyp och nav_items */}
      <div className="flex items-center space-x-8">

        {/* Logo -> hem-länk */}
        <div className="flex-none">
          <Link href="/" aria-label="Gå till startsidan" className="block">
            <Image
              src={blok.logo.filename}
              alt={blok.logo.alt || "Företagsnamn"} // gärna ditt riktiga namn
              width={70}
              height={40}
              priority              // snabb och stabil i headern
              sizes="70px"          // liten, exakt källa -> skarp & lätt
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-light">
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
