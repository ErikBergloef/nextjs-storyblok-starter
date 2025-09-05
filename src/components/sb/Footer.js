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
      </div>
      {footerGridColumns && (
        <div className="w-full flex justify-end  items-center pr-[1vw] border-r border-t border-b">
          {/* Tätt grid */}
          <div className="grid grid-cols-3 gap-18">
            {footerGridColumns.map((column) => (
              <div key={column._uid} className="px-1">
                <h4 className="font-normal mb-1 text-md text-left">
                  {column.title}
                </h4>
                <ul className="space-y-2 pt-2 font-light ">
                  {column.footer_links?.map((linkItem) => (
                    <li key={linkItem._uid} className="text-xs leading-snug">
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
  );
}
