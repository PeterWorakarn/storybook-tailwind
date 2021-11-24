/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { action } from "@storybook/addon-actions";
import { InputPasswordToggle } from "./InputPasswordToggle";

export default {
  title: "Component/InputPasswordToggle",
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

export const CustomPasswordToggle = (args: any) => <InputPasswordToggle {...args} onChange={action('Typing')} />
