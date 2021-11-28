/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Switch } from "./Switch";
import { action } from "@storybook/addon-actions";


export default {
  title: "Component/Switch",
  component: Switch,
};

export const SwitchMain = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch isChecked={isChecked} setIsChecked={setIsChecked} name='switch' onStatus={action('Toggle')} />
  )
};
