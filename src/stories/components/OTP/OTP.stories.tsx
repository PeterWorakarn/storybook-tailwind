/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import OTP from "./OTP";


export default {
  title: "Component/Input",
  component: OTP,
  argTypes: {
    name: {
      name: 'Name',
      defaultValue: 'OTP',
      control: { type: 'text' }
    },
    isDisable: {
      name: 'isDisable',
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
};


export const OTPInput = (args: any) => {
  const [otpValues, setOtpValues] = useState('');


  return (
    <OTP otpValues={otpValues} setOtpValues={(value: string) => setOtpValues(value)} onAction={action('Typing')} {...args} />
  )
}