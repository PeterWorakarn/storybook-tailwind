/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { textHTMLtag, textSizeType } from "../../../constant-enum-types";
import { Typo } from "../Typo/Typo";


export default {
  title: "Theme/Color",
};

export const ColorGallery = () => {
  const paragraph = 'Lorem aute Lorem ad laborum irure duis eu.'
  return (
    <main className="flex flex-col gap-0">
      <Typo variant={textHTMLtag.SPAN} size={textSizeType.MOUSE} className="font-bold --accent-text-color">{paragraph}</Typo >
      <Typo variant={textHTMLtag.SPAN} size={textSizeType.MOUSE} className="font-bold --major-text-color">{paragraph}</Typo >
      <Typo variant={textHTMLtag.SPAN} size={textSizeType.MOUSE} className="font-medium --normal-text-color">{paragraph}</Typo >
      <Typo variant={textHTMLtag.SPAN} size={textSizeType.MOUSE} className="font-normal --minor-text-color">{paragraph}</Typo >
      {/* <div className="w-11 h-11 --accent-background-color rounded-full shadow" /> */}
    </main>
  )
}
