/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ScrollBar } from "./ScrollBar";


export default {
  title: "Component/ScrollBar",
  component: ScrollBar, 
};

export const CustomScrollBar = (args: any) => <ScrollBar {...args} />
