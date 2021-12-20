/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React from "react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";


export default {
  title: "Component/Input",
  component: Checkbox,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'Option',
      control: { type: 'text' }
    },
    name: {
      name: 'Name',
      defaultValue: 'checkbox-name',
      control: { type: 'text' }
    },
  }
};

export const CheckboxInput = (args: any) => {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <main className="gallery gallery--col">
      <Checkbox {...args}  checkboxValue={checkbox} handleCheckbox={(value) => setCheckbox(value)} onAction={action('clicked')}/>
    </main>
  )
}

