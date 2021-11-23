import React, { FC } from 'react';
import { VariantType } from '../../../constant-enum-types';
import '../../../base.css'

type ButtonTypes = {
  label: string;
  icon?: React.ReactElement;
  variant: VariantType;
  isFull?: boolean;
  isRounded?: boolean;
  onClick(): void;
}

const BASE_BUTTON = 'py-1 px-4 inline-flex justify-center items-center gap-2 outline-none font-semibold uppercase'
const ROUNDED = 'rounded-full'
const NOT_SO_ROUND = 'rounded-lg'
const NORMAL = 'w-auto'
const FULL = 'w-full'


export const Button:FC<ButtonTypes> = (props) => {
  const variant = (type: VariantType) => {
    const key = type;
    switch (key) {
      case VariantType.PRIMARY:
        return 'primary-red-gradient';
      case VariantType.SECONDARY:
        return 'bg-red-300 text-white';
      case VariantType.TERTIARY:
        return 'border border-red-500 text-red-500';
      case VariantType.GHOST:
        return 'text-red-500';
      default:
        break;
    }
  }
  return (
    <button
      onClick={props.onClick}
      className={`
        ${BASE_BUTTON} 
        ${variant(props.variant)}
        ${props.isFull ? FULL : NORMAL} 
        ${props.isRounded ? ROUNDED : NOT_SO_ROUND}
        `}
    >
      {props.icon && props.icon}
      <span>{props.label}</span>
    </button>
  )
};