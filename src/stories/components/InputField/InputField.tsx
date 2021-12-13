import React, { FC, useState } from 'react';
import { HiExclamationCircle, HiGlobe, HiLockClosed, HiMail, HiOutlineGlobe, HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import '../../../base.css';

type InputFieldTypes = {
  type: "text" | "password" | "mail" | "web";
  name: string;
  placeholder: string;
  helper: string;
  label: string;
  isError: boolean;
  isRequired: boolean;
  value:string;
  setValue:React.Dispatch<React.SetStateAction<string>>;
  onChange: (value: string) => void;
}

export const InputField: FC<InputFieldTypes> = (props) => {
  const onChangeHandler = (newValue: string) => {
    props.setValue(newValue);
    props.onChange(newValue);
  }
  const InputIcon = (value: "text" | "password" | "mail" | "web") => {
    switch (value) {
      case "text":
        return null;
      case "password":
        return <HiOutlineLockClosed className="w-5 h-5"/>;
      case "mail":
        return <HiOutlineMail className="w-5 h-5"/>;
      case "web":
        return <HiOutlineGlobe className="w-5 h-5"/>;
      default:
        return null;
    }
  }

  return (
    <div className="input__container">
      <div className="label__container">
        <label className="label" htmlFor={`${props.name}`}>
          <p>{props.label ? props.label : 'text'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
        </label>
        {props.isError && <HiExclamationCircle className="error" />}
      </div>
      <div className="input__field">
        <i className="absolute top-2 left-1 text-gray-400">
          {InputIcon(props.type ? props.type : 'text')}
        </i>
        <input
          className={`${props.type === 'text' ? "input--non-icon" :"input"}`}
          id={props.name ? props.name : 'text'}
          name={props.name ? props.name : 'text'}
          value={props.value}
          type={props.type ? props.type : 'text'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
          placeholder={props.placeholder ? props.placeholder : ''}
        />
      </div>
    </div>
  );
};
