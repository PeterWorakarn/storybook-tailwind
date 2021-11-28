/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { InputField } from "./InputField";

export default {
  title: "Component/InputField",
  component: InputField,
  argTypes: {
    type: {
      name: 'Type',
      defaultValue: 'text',
      options: ['text', 'mail', 'web', 'password'],
      control: { type: 'select' }
    },
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
    placeholder: {
      name: 'Placeholder',
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

export const CustomInput = (args: any) => {
  const [value, setValue] = useState('');

  return <InputField value={value}  setValue={setValue} {...args} onChange={action('Typing')} />
}