import React, { FC } from 'react';
import { PositionType } from '../../../constant-enum-types';
import '../../../base.css'

type FABTypes = {
  label: string;
  position: PositionType;
  icon: React.ReactElement;
  onClick(): void;
}

export const FAB:FC<FABTypes> = (props) => {
  const position = (pos: PositionType) => {
    const key = pos;
    switch (key) {
      case PositionType.BOTTOM_LEFT:
        return 'bottom-2 left-2';
      case PositionType.BOTTOM_RIGHT:
        return 'bottom-2 right-2';
      case PositionType.TOP_LEFT:
        return 'top-2 left-2';
      case PositionType.TOP_RIGHT:
        return 'top-2 right-2';
      default:
        break;
    }
  }
  return (
    <button id={props.label} type="button" onClick={props.onClick} className={`${position(props.position)} fixed z-50 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}>
      {props.icon && props.icon}
      <span className="sr-only">{props.label}</span>
    </button>
  );
};