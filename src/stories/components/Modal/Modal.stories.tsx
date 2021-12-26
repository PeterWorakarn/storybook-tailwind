/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React from "react";
import { useState } from "react";
import { textHTMLtag, textSizeType, VariantType } from "../../../constant-enum-types";
import { Button } from "../Button/Button";
import { Typo } from "../Typo/Typo";
import { Modal } from "./Modal";


export default {
  title: "Component/Modal",
  component: Modal,
  argTypes: {
    header: {
      name: 'Header',
      defaultValue: 'This is Header',
      control: { type: 'text' }
    },
    isCloseButton: {
      name: 'Close Btn',
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
};

export const DialogModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button
        label="Modal"
        variant={VariantType.SECONDARY}
        onClick={() => setModal(true)}
      />
      <Modal {...args} visible={modal} onClose={() => setModal(false)}>
        <Typo variant={textHTMLtag.P} size={textSizeType.SNAIL} className="text-gray-400 font-medium">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</Typo>
      </Modal>
    </>
  )
}
export const NoticeModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button
        label="Modal"
        variant={VariantType.SECONDARY}
        onClick={() => setModal(true)}
      />
      <Modal {...args} visible={modal} onClose={() => setModal(false)}>
        <Typo variant={textHTMLtag.P} size={textSizeType.SNAIL} className="text-gray-400 font-medium pb-3">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</Typo>
        <Button icon={<></>} isFull onClick={() => setModal(false)} label="OK" variant={VariantType.SECONDARY} />
      </Modal>
    </>
  )
}

export const ColModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button
        label="Modal"
        variant={VariantType.SECONDARY}
        onClick={() => setModal(true)}
      />
      <Modal {...args} visible={modal} onClose={() => setModal(false)}>
        <Typo variant={textHTMLtag.P} size={textSizeType.SNAIL} className="text-gray-400 font-medium pb-3">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</Typo>
        <div className="grid grid-cols-2 gap-2">
          <Button icon={<></>} isFull onClick={() => setModal(false)} label="OK" variant={VariantType.SECONDARY} />
          <Button icon={<></>} isFull onClick={() => setModal(false)} label="Cancel" variant={VariantType.GHOST} />
        </div>
      </Modal>
    </>
  )
}

