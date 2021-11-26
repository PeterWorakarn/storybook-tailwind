import React, { FC, useState } from 'react';
import { HiExclamationCircle, HiEye, HiEyeOff, HiLockClosed } from 'react-icons/hi';
import '../../../base.css';

type InputPasswordToggleTypes = {
  name: string;
  helper: string;
  label: string;
  isError: boolean;
  isRequired: boolean;
  onChange: (value: string) => void;
}

export const InputPasswordToggle: FC<InputPasswordToggleTypes> = (props) => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);
  const onChangeHandler = (value: string) => {
    setValue(value);
    props.onChange(value);
  }
  return (
    <div className="input">
      <div className="flex justify-between items-baseline">
        <label className="input__label capitalize font-semibold text-lg" htmlFor={`${props.name ? props.name : 'password'}`}>
          <p>{props.label ? props.label : 'password'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
        </label>
        {props.isError && <HiExclamationCircle className="text-red-500 w-4 h-4 mr-1" />}
      </div>
      <div className="input__field relative">
        <input
          className="border border-gray-200 rounded-lg py-0.5 pl-2.5 pr-8 my-1 w-full text-black outline-none"
          id={props.name ? props.name : 'password'}
          name={props.name ? props.name : 'password'}
          value={value}
          type={toggle ? 'text' : 'password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
        />
        <i className="absolute top-3 right-1.5 text-gray-400">
          {toggle ? (
            <HiEyeOff onClick={() => setToggle(!toggle)}  className="w-4 h-4 text-red-500" />
          ) : (
            <HiEye onClick={() => setToggle(!toggle)} className="w-4 h-4 text-red-500" />
          )}
        </i>
      </div>
    </div>
  );
};
