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
        return 'fab--bl';
      case PositionType.BOTTOM_RIGHT:
        return 'fab--br';
      case PositionType.TOP_LEFT:
        return 'fab--tl';
      case PositionType.TOP_RIGHT:
        return 'fab--tr';
      default:
        break;
    }
  }
  return (
    <button id={props.name ? props.name : 'FAB'} type="button" onClick={props.onClick} className={`${position(props.position ? props.position : PositionType.BOTTOM_RIGHT)} fab fixed z-50 bg-opacity-75 grid place-items-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}>
      {props.icon ? props.icon : <HiHashtag className="fab__icon"/>}
      <span className="sr-only">{props.name ? props.name : 'FAB'}</span>
    </button>
  );
};