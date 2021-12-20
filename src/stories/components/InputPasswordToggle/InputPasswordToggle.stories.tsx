/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { InputPasswordToggle } from "./InputPasswordToggle";

export default {
  title: "Component/Input",
  component: InputPasswordToggle,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'text',
      control: { type: 'text' }
    },
    name: {
      name: 'Name',
      defaultValue: 'name',
      control: { type: 'text' }
    },
    helper: {
      name: 'Helper',
      defaultValue: '',
      control: { type: 'text' }
    },
    isRequired: {
      name: 'Required',
      defaultValue: true,
      control: { type: 'boolean' }
    },
    isError: {
      name: 'Error',
      defaultValue: true,
      control: { type: 'boolean' }
    },
  }
};

export const PasswordInput = (args: any) => {
  const [value, setValue] = useState('');

  return <InputPasswordToggle value={value} setValue={setValue} {...args} onChange={action('Typing')} />
}
