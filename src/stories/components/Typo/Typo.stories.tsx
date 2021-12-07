/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { textSizeType } from "../../../constant-enum-types";
import { Typo } from "./Typo";


export default {
  title: "Component/Typography",
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
    }
  }
};

export const CustomTypo = (args: any) => <Typo {...args} />
export const TypoGallery = () => {
  const label = 'Hello World'
  return (
    <main className="gallery gallery--col">
      <Typo size={textSizeType.SNAIL}>{textSizeType.SNAIL}</Typo>
      <Typo size={textSizeType.MOUSE}>{textSizeType.MOUSE}</Typo>
      <Typo size={textSizeType.OTTER}>{textSizeType.OTTER}</Typo>
      <Typo size={textSizeType.DOLPHIN}>{textSizeType.DOLPHIN}</Typo>
      <Typo size={textSizeType.HIPPO}>{textSizeType.HIPPO}</Typo>
      <Typo size={textSizeType.MAMMOTH}>{textSizeType.MAMMOTH}</Typo>
    </main>
  )
}
