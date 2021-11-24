/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Header } from "./Header";


export default {
  title: "Component/Header",
  component: Header, 
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'This is Header',
      control: { type: 'text' }
    },
  }
};

export const CustomHeader = (args: any) => <Header {...args} />

