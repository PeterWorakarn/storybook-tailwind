import React, { FC, useState } from 'react';
import '../../../base.css';

type SwitchTypes = {
  name: string;
  onStatus: (value: boolean) => void
}

export const Switch: FC<SwitchTypes> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const onSelectHandler = (value: boolean) => {
    setIsChecked(value)
    props.onStatus(value)
  }

  return (
    <>
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input readOnly checked={isChecked} type="checkbox" name={props.name ? props.name : 'checkbox'} id={props.name ? props.name : 'checkbox'} className=" transition-all duration-75 ease-in toggle-checkbox absolute block w-6 h-6 rounded-full  border-2 appearance-none cursor-pointer" />
        <label onClick={() => onSelectHandler(!isChecked)} htmlFor={props.name ? props.name : 'checkbox'} className="toggle-label block overflow-hidden h-6 w-10 rounded-full  cursor-pointer " />
      </div>
    </>
  );
};