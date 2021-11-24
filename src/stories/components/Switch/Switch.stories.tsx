/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch } from "./Switch";
import { action } from "@storybook/addon-actions";


export default {
  title: "Component/Switch",
  component: Switch,
};

export const SwitchMain = () => {
  return (
    <Switch name='switch' onStatus={action('Toggle')} />
  )
};
