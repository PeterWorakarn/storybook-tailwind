import React, { FC, useState } from 'react';
import { HiExclamationCircle, HiEye, HiEyeOff, HiLockClosed } from 'react-icons/hi';
import '../../../base.css';

type InputPasswordToggleTypes = {
  name: string;
  helper: string;
  label: string;
  isError: boolean;
  isRequired: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  onChange: (value: string) => void;
}

export const InputPasswordToggle: FC<InputPasswordToggleTypes> = (props) => {
  const [toggle, setToggle] = useState(false);
  const onChangeHandler = (newValue: string) => {
    props.setValue(newValue)
    props.onChange(newValue);
  }
  return (
    <div className="input__container">
      <div className="label__container">
        <label className="label" htmlFor={`${props.name ? props.name : 'password'}`}>
          <p>{props.label ? props.label : 'password'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
        </label>
        {props.isError && <HiExclamationCircle className="error" />}
      </div>
      <div className="input__field">
        <input
          className="input--non-icon"
          id={props.name ? props.name : 'password'}
          name={props.name ? props.name : 'password'}
          value={props.value}
          type={toggle ? 'text' : 'password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
        />
        <i className="password">
          {toggle ? (
            <HiEyeOff onClick={() => setToggle(!toggle)} className="w-4 h-4 text-red-500" />
          ) : (
            <HiEye onClick={() => setToggle(!toggle)} className="w-4 h-4 text-red-500" />
          )}
        </i>
      </div>
    </div>
  );
};
