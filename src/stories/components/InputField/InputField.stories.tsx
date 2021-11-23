/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { action } from "@storybook/addon-actions";
import { InputField } from "./InputField";

export default {
  title: "Component/InputField",
  component: InputField,
};

export const TextInput = () => {
  return (
    <InputField 
      isError
      isRequired
      placeholder=" "
      name="text"
      label="text"
      helper="just normal text"
      type="text" 
      onChange={action('Typing')}
    />
  )
};
export const WebInput = () => {
  return (
    <InputField 
      isError
      isRequired
      placeholder=" "
      name="text"
      label="text"
      helper="just normal text"
      type="web" 
      onChange={action('Typing')}
    />
  )
};
export const MailInput = () => {
  return (
    <InputField 
      isError
      isRequired
      placeholder=" "
      name="text"
      label="text"
      helper="just normal text"
      type="mail" 
      onChange={action('Typing')}
    />
  )
};
export const PasswordInput = () => {
  return (
    <InputField 
      isError
      isRequired
      placeholder=" "
      name="text"
      label="text"
      helper="just normal text"
      type="password" 
      onChange={action('Typing')}
    />
  )
};