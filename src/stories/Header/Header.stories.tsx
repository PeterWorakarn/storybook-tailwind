/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Header } from "./Header";


export default {
  title: "Component/Header",
  component: Header,
};

export const HeaderMain = () => {
  const label = "This is Header";
  const borderColor = "#FA4D56";
  return (
    <Header borderColor={borderColor}>
      {label}
    </Header>
  )
};
