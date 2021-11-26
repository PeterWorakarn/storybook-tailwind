/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Loading } from "./Loading";


export default {
  title: "Component/Loading",
  component: Loading,
  argTypes: {

  }
};

export const CustomLoading = (args: any) => {
  return (
    <Loading {...args} />
  )
}