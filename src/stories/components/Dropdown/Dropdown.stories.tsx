/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { action } from "@storybook/addon-actions";
import { DropdownHook } from "./DropdownHook";


export default {
  title: "Component/Input",
  component: Dropdown,
};

export const DropdownInput = () => {
  const [value, setValue] = useState('');
  const items = [
    'item 1',
    'item 2',
    'item 3',
  ]
  return (
    <Dropdown
      name="dropdown"
      items={items}
      selectItem={value}
      onSelect={action('Clicked')}
      onChangeHandler={(key) => setValue(key)}
    />
  )
};
export const DropdownInputHook = () => {
  const [value, setValue] = useState('');
  const items = [
    'item 1',
    'item 2',
    'item 3',
  ]
  return (
    <DropdownHook
      name="dropdown"
      items={items}
      selectItem={value}
      onSelect={action('Clicked')}
      onChangeHandler={(key) => setValue(key)}
    />
  )
};