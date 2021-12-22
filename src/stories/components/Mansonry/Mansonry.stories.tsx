/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Mansonry } from "./Mansonry";


export default {
  title: "Layout",
  component: Mansonry,
  argTypes: {
    isHidden: {
      name: 'isHidden',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    isSkew: {
      name: 'isSkew',
      defaultValue: false,
      control: { type: 'boolean' }
    },
  }
};

export const BasicMansonry = (args: any) => {
  return (
    <Mansonry {...args} />
  )
}