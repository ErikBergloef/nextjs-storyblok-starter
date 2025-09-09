
"use client"; 
import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import ButtonItem from "./ButtonItem";

export default function ButtonRow({ body }) {
  const buttonRowBlok = body?.find((blok) => blok.component === "button_row");
  if (!buttonRowBlok) return null;

  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleClick = (id) => {
    setActiveButtonId(id);
  };

  return (
    <div {...storyblokEditable(buttonRowBlok)} className="flex flex-row gap-4 pl-4">
      {buttonRowBlok.button?.map((btn) => (
        <ButtonItem
          key={btn._uid}
          blok={btn}
          isActive={activeButtonId === btn._uid}
          onClick={() => handleClick(btn._uid)}
        />
      ))}
    </div>
  );
}
