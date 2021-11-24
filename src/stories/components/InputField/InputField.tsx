import React, { FC, useState } from 'react';
import { HiExclamationCircle, HiGlobe, HiLockClosed, HiMail } from 'react-icons/hi';
import '../../../base.css';

type InputFieldTypes = {
  type: "text" | "password" | "mail" | "web";
  name: string;
  placeholder: string;
  helper: string;
  label: string;
  isError: boolean;
  isRequired: boolean;
  onChange: (value: string) => void;
}

export const InputField: FC<InputFieldTypes> = (props) => {
  const [value, setValue] = useState('');
  const onChangeHandler = (value: string) => {
    setValue(value);
    props.onChange(value);
  }
  const InputIcon = (value: "text" | "password" | "mail" | "web") => {
    switch (value) {
      case "text":
        return null;
      case "password":
        return <HiLockClosed className="w-5 h-5"/>;
      case "mail":
        return <HiMail className="w-5 h-5"/>;
      case "web":
        return <HiGlobe className="w-5 h-5"/>;
      default:
        return null;
    }
  }

  return (
    <div className="input">
      <div className="flex justify-between items-baseline">
        <label className="input__label capitalize font-semibold text-lg" htmlFor={`${props.name}`}>
          <p>{props.label ? props.label : 'text'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
        </label>
        {props.isError && <HiExclamationCircle className="text-red-500 w-4 h-4" />}
      </div>
      <div className="input__field relative">
        <i className="absolute top-2 left-1 text-gray-400">
          {InputIcon(props.type ? props.type : 'text')}
        </i>
        <input
          className="border border-gray-200 rounded-lg py-0.5 pl-8 pr-2.5 my-1 w-full text-black outline-none"
          id={props.name ? props.name : 'text'}
          name={props.name ? props.name : 'text'}
          value={value}
          type={props.type ? props.type : 'text'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
          placeholder={props.placeholder ? props.placeholder : ''}
        />
      </div>
    </div>
  );
};
