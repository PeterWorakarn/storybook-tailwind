/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { CircularProgress } from "./CircularProgress";


export default {
  title: "Component",
  component: CircularProgress,
  argTypes: {
    value: {
      name: 'value',
      defaultValue: 100,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 10,
      }
    },
  }
};

export const BasicCircularProgress = (args: any) => {
  return (
    <CircularProgress {...args} />
  )
}