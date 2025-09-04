import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import SignUpBlock from "./SignUpBlock";

export default function Footer({ blok }) {
  const footerData = blok.footer_links?.[0];
  const footerGridColumns = footerData?.footer_grid_items;
  const signUpBlockData = blok.sign_up_field?.[0];

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white text-black flex flex-row w-auto"
    >
      <div className="w-[50vw] border-l border-t border-b flex items-center  p-4 pl-2">
        {signUpBlockData && (
          <div className=" p-2">
            <SignUpBlock blok={signUpBlockData} />
          </div>
        )}

        {footerGridColumns && (
          <div className="w-full sm:w-1/2 md:w-2/3 p-2">
            <div className="flex flex-wrap justify-around">
              {footerGridColumns.map((column) => (
                <div key={column._uid} className="w-1/2 md:w-1/3 p-2">
                  <h4 className="font-bold mb-2 text-md">{column.title}</h4>
                  <ul className="flex flex-col items-center">
                    {column.footer_links?.map((linkItem) => (
                      <li key={linkItem._uid} className="mb-2 text-xs">
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
