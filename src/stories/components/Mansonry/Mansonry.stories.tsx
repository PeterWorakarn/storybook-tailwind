/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Mansonry } from "./Mansonry";


export default {
  title: "Layout",
  component: Mansonry,
  argTypes: {

  }
};

export const BasicMansonry = (args: any) => {
  return (
    <Mansonry {...args} />
  )
}