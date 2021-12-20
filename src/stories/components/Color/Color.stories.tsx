/* eslint-disable import/no-anonymous-default-export */
import React from "react";


export default {
  title: "Theme/Color",
};

export const ColorGallery = () => {
  const paragraph = 'Lorem aute Lorem ad laborum irure duis eu.'
  return (
    <main className="flex flex-col gap-0">
      <span className="typo typo--mouse font-bold --accent-text-color">{paragraph}</span>
      <span className="typo typo--mouse font-bold --major-text-color">{paragraph}</span>
      <span className="typo typo--mouse font-medium --normal-text-color">{paragraph}</span>
      <span className="typo typo--mouse font-normal --minor-text-color">{paragraph}</span>
      {/* <div className="w-11 h-11 --accent-background-color rounded-full shadow" /> */}
    </main>
  )
}
