import React, { FC, memo, useState } from 'react';
import '../../../base.css'

type OTPInputTypes = {
  index: number;
  isDisable: boolean;
  otpValues: string[];
  setOtpValues: (value: string[]) => void;
  onAction: (value: string[]) => void;

}

const OTPSingleInput: FC<OTPInputTypes> = (props) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add Value At The right index
    setIsEmpty(true);
    if (Number.isNaN(e.target.value)) return false;
    if (e.target.value.match(/^[^0-9]$/)) return false;
    props.setOtpValues([...props.otpValues.map((d, idx) => (idx === props.index ? e.target.value : d))]);
    props.onAction([...props.otpValues.map((d, idx) => (idx === props.index ? e.target.value : d))]);

    if (e.target.previousSibling && e.target.value === '') {
      setIsEmpty(true);
      (e.target.previousSibling as HTMLElement)?.focus();
    }
    if (e.target.nextSibling && e.target.value !== '') {
      setIsEmpty(false);
      (e.target.nextSibling as HTMLElement)?.focus();
    }
    if (e.target.value !== '') {
      setIsEmpty(false);
    }
    return null;
  };
  const inputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const Key = e.key;
    switch (Key) {
      case 'Backspace':
      case 'Delete': {
        // TODO: How to Force to focus Prev Value
        break;
      }
      case 'e': {
        e.preventDefault();
        break;
      }
      default: {
        // Limit only number
        if (Key.match(/^[^0-9]$/)) {
          e.preventDefault();
        }
        break;
      }
    }
  };


  return (
    <input
      disabled={props.isDisable}
      onChange={e => inputOnChange(e)}
      onFocus={e => e.target.select()}
      onKeyPress={(e) => inputKeyPress(e)}
      type="text"
      maxLength={1}
      className={`otp__input font-semibold shadow-sm transform bg-white m-0 border-b-2 border-gray-200 focus-within:border-red-500 transition-all duration-300 ease-out outline-none h-8 w-8 text-center ${props.isDisable && 'border-gray-200 pointer-events-none opacity-40 border-opacity-40'} ${!isEmpty ? 'border-red-500 translate-y-0' : '-translate-y-1'} `}
    />
  );
};

const OTPInput = memo(OTPSingleInput);
export default OTPInput;