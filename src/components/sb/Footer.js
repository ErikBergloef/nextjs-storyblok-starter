import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Footer({ blok }) {
  const footerData = blok.footer_links?.[0];
  // const signUpBlock = footerData?.sign_up_field?.[0];
  const footerGridColumns = footerData?.footer_grid_items;

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white text-xs text-black"
    >
      <div className="p-4 border-t flex flex-wrap justify-between text-center">

        {footerGridColumns && (
          <div className="w-full sm:w-1/2 md:w-2/3 p-2">
            <div className="flex flex-wrap justify-around">
              {footerGridColumns.map((column) => (
                <div key={column._uid} className="w-1/2 md:w-1/3 p-2">
                  <h4 className="font-bold mb-2">{column.title}</h4>
                  <ul className="flex flex-col items-center">
                    {column.footer_links?.map((linkItem) => (
                      <li key={linkItem._uid} className="mb-2">
                        <Link href={linkItem.link.cached_url || "/"}>
                          {linkItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}