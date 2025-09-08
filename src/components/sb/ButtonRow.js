// src/components/sb/ButtonRow.js
import { storyblokEditable } from "@storyblok/react";
import ButtonItem from "./ButtonItem";

export default function ButtonRow({ body }) {
  const buttonRowBlok = body?.find((blok) => blok.component === "button_row");
  if (!buttonRowBlok) {
    return null;
  }
  
  return (
    <div {...storyblokEditable(buttonRowBlok)} className="flex flex-row gap-4 pl-4">
      {buttonRowBlok.button?.map((btn) => (
        <ButtonItem blok={btn} key={btn._uid} />
      ))}
    </div>
  );
}