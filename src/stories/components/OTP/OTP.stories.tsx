/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import OTP from "./OTP";


export default {
  title: "Component/OTP",
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

const otpLength = 4;

export const CustomOTP = (args: any) => {
  const [otpValues, setOtpValues] = useState(new Array<string>(otpLength).fill(''));


  return (
    <OTP otpValues={otpValues} setOtpValues={(value: string[]) => setOtpValues(value)} onAction={action('Typing')} {...args} />
  )
}