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

export const CustomModal = (args: any) => {
  const [modal, setModal] = useState(false);
  return (
    <Modal  modal={modal} setModal={setModal} {...args}>
      <p className="pb-6 text-gray-400">Necessitatibus iusto sapiente non. Fuga id ducimus voluptatibus voluptas. Qui occaecati est neque et qui.</p>
      <Button isFull onClick={() => setModal(false)} label="OK" variant={VariantType.PRIMARY} />
    </Modal>
  )
}

