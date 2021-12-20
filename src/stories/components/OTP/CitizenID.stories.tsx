/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { CitizenIDInput } from "./CitizenIDInput";

export default {
  title: "Component/Input",
  component: CitizenIDInput,
  argTypes: {
    name: {
      name: 'Name',
      defaultValue: 'citizen-id',
      control: { type: 'text' }
    },
    isDisable: {
      name: 'isDisable',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    label: {
      name: 'Label',
      defaultValue: 'Citizen ID',
      control: { type: 'text' }
    },
    helper: {
      name: 'Helper',
      defaultValue: '',
      control: { type: 'text' }
    },
    isRequired: {
      name: 'Required',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    isError: {
      name: 'Error',
      defaultValue: false,
      control: { type: 'boolean' }
    },
  }
};


export const CitizenID = (args: any) => {
  const [citizenID, setCitizenID] = useState('');


  return (
    <CitizenIDInput values={citizenID} setValues={(value: string) => setCitizenID(value)} onAction={action('Typing')} {...args} />
  )
}