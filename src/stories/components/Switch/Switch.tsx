import React, { FC, useState } from 'react';
import '../../../base.css';

type SwitchTypes = {
  name: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  onStatus: (value: boolean) => void
}

export const Switch: FC<SwitchTypes> = (props) => {
  const onSelectHandler = () => {
    const newValue = !props.isChecked
    props.setIsChecked(newValue)
    props.onStatus(newValue)
  }

  return (
    <>
      <div className="switch">
        <input
          onChange={() => onSelectHandler()}
          checked={props.isChecked}
          type="checkbox"
          name={props.name ? props.name : 'checkbox'}
          id={props.name ? props.name : 'checkbox'}
          className="switch__input toggle-checkbox"
        />

        <label
          onClick={() => onSelectHandler()}
          htmlFor={props.name ? `${props.name}__label` : 'checkbox__label'}
          className="switch__label toggle-label block overflow-hidden h-6 w-10 rounded-full  cursor-pointer "
        />
      </div>
    </>
  );
};