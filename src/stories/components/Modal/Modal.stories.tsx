/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React from "react";
import { useState } from "react";
import { VariantType } from "../../../constant-enum-types";
import { Button } from "../Button/Button";
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
    <Modal modal={modal} setModal={setModal} {...args}>
      <p className="text-gray-400">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</p>
    </Modal>
  )
}
export const NoticeModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <Modal modal={modal} setModal={setModal} {...args}>
      <p className="text-gray-400 pb-3">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</p>
      <Button icon={<></>} isFull onClick={() => setModal(false)} label="OK" variant={VariantType.SECONDARY} />
    </Modal>
  )
}

export const ColModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <Modal {...args} modal={modal} setModal={setModal}>
      <p className="pb-3 text-gray-400">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</p>
      <div className="grid grid-cols-2 gap-2">
        <Button icon={<></>} isFull onClick={() => setModal(false)} label="OK" variant={VariantType.SECONDARY} />
        <Button icon={<></>} isFull onClick={() => setModal(false)} label="Cancel" variant={VariantType.GHOST} />
      </div>
    </Modal>
  )
}

