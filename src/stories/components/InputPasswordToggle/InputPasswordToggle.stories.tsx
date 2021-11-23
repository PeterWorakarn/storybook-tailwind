/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { action } from "@storybook/addon-actions";
import { InputPasswordToggle } from "./InputPasswordToggle";

export default {
  title: "Component/InputPasswordToggle",
  component: InputPasswordToggle,
};

export const PasswordToggle = () => {
  return (
    <InputPasswordToggle 
      isError
      isRequired
      name="text"
      label="text"
      helper="just normal text"
      onChange={action('Typing')}
    />
  )
};