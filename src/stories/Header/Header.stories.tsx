/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Header } from "./Header";


export default {
  title: "Header",
  component: Header,
  decorators: [
    withKnobs
  ],
};

export const HeaderMain = () => {
  const label = text("Label", "This is Header");
  const borderColor = text("borderColor", "#FA4D56")
  return (
    <Header borderColor={borderColor}>
      {label}
    </Header>
  )
};
