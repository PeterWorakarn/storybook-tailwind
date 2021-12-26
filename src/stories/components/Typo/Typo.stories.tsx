/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { textHTMLtag, textSizeType } from "../../../constant-enum-types";
import { Typo } from "./Typo";


export default {
  title: "Theme/Typography",
  component: Typo, 
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'This is Header',
      control: { type: 'text' }
    },
    size: {
      name: 'Size',
      defaultValue: textSizeType.MOUSE,
      options: [textSizeType.SNAIL, textSizeType.MOUSE, textSizeType.OTTER, textSizeType.DOLPHIN, textSizeType.HIPPO, textSizeType.MAMMOTH],
      control: { type: 'select' }
    },
    variant: {
      name: 'HTML tag',
      defaultValue: textHTMLtag.P,
      options: [textHTMLtag.DIV, textHTMLtag.H1, textHTMLtag.H2, textHTMLtag.H3, textHTMLtag.H4, textHTMLtag.H5, textHTMLtag.P ],
      control: { type: 'select' }
    }
  }
};

export const BasicTypo = (args: any) => <Typo {...args} />
export const TypoGallery = () => {
  const label = 'Hello World'
  return (
    <main className="gallery gallery--col">
      <Typo variant={textHTMLtag.P} size={textSizeType.SNAIL}>{textSizeType.SNAIL}</Typo>
      <Typo variant={textHTMLtag.H5} size={textSizeType.MOUSE}>{textSizeType.MOUSE}</Typo>
      <Typo variant={textHTMLtag.H4} size={textSizeType.OTTER}>{textSizeType.OTTER}</Typo>
      <Typo variant={textHTMLtag.H3} size={textSizeType.DOLPHIN}>{textSizeType.DOLPHIN}</Typo>
      <Typo variant={textHTMLtag.H2} size={textSizeType.HIPPO}>{textSizeType.HIPPO}</Typo>
      <Typo variant={textHTMLtag.H1} size={textSizeType.MAMMOTH}>{textSizeType.MAMMOTH}</Typo>
    </main>
  )
}
