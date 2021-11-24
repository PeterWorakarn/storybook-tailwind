import React, { FC } from 'react';
import { PositionType } from '../../../constant-enum-types';
import '../../../base.css'
import { HiHashtag } from 'react-icons/hi';

type FABTypes = {
  name: string;
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
    <button id={props.name ? props.name : 'FAB'} type="button" onClick={props.onClick} className={`${position(props.position ? props.position : PositionType.BOTTOM_RIGHT)} fixed z-50 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}>
      {props.icon ? props.icon : <HiHashtag />}
      <span className="sr-only">{props.name ? props.name : 'FAB'}</span>
    </button>
  );
};