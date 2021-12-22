/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Accordion } from "./Accordion";


export default {
  title: "Component/Accordion",
  component: Accordion,
  argTypes: {
    header: {
      name: 'Header',
      defaultValue: 'Where does it come from ?',
      control: { type: 'text' }
    },
    info: {
      name: 'Info',
      defaultValue: 'Aliquam at euismod arcu. Vivamus lacinia hendrerit viverra. Etiam maximus justo ut rutrum iaculis. Duis volutpat justo vel neque accumsan, ac tempor ipsum pretium.',
      control: { type: 'text' }
    },
  }
};

export const CustomAccordion = (arg: any) => {
  return (
    <>
      <Accordion {...arg} />
    </>
  )
}
