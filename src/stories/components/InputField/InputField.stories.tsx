/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { InputField } from "./InputField";

export default {
  title: "Component/Input",
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

export const BasicInput = (args: any) => {
  const [value, setValue] = useState('');

  return <InputField value={value} setValue={setValue} {...args} onChange={action('Typing')} />
}

export const InputGallery = () => {
  const [value, setValue] = useState('');
  const isError = true;
  const isRequired = true;
  const name = 'Input'
  const placeholder = ''
  const helper = 'Input'
  const label = 'Input'
  return (
    <main className="gallery gallery--col">
      <InputField
        type="text"
        name={name}
        placeholder={placeholder}
        helper={helper}
        label={label}
        isError={isError}
        isRequired={isRequired}
        value={value}
        setValue={setValue}
        onChange={action('Typing')} />
      <InputField
        type="web"
        name={name}
        placeholder={placeholder}
        helper={helper}
        label={label}
        isError={isError}
        isRequired={isRequired}
        value={value}
        setValue={setValue}
        onChange={action('Typing')} />
      <InputField
        type="mail"
        name={name}
        placeholder={placeholder}
        helper={helper}
        label={label}
        isError={isError}
        isRequired={isRequired}
        value={value}
        setValue={setValue}
        onChange={action('Typing')} />
      <InputField
        type="password"
        name={name}
        placeholder={placeholder}
        helper={helper}
        label={label}
        isError={isError}
        isRequired={isRequired}
        value={value}
        setValue={setValue}
        onChange={action('Typing')} />

    </main>
  )
}