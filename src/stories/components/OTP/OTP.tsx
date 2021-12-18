import React, { FC, memo, useEffect, useState } from 'react';
import '../../../base.css'
import OTPInput from './OTPInput';

type OTPTypes = {
  name: string;
  isDisable: boolean;
  otpValues: string[];
  setOtpValues: (value: string[]) => void;
  onAction: (value: string[]) => void;
}

const OTPContainer: FC<OTPTypes> = (props) => {

  return (
    <div className="otp">
      {props.otpValues.map((_, index) => {
        return <OTPInput key={index} index={index} onAction={props.onAction} otpValues={props.otpValues} setOtpValues={props.setOtpValues} isDisable={props.isDisable} />
      })}
    </div>
  );
};

const OTP = memo(OTPContainer);
export default OTP;