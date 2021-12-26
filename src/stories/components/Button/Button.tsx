import React, { FC } from 'react';
import { textHTMLtag, textSizeType, VariantType } from '../../../constant-enum-types';
import '../../../base.css'
import { HiBeaker } from 'react-icons/hi';
import { Typo } from '../Typo/Typo';

type ButtonTypes = {
  label: string;
  icon?: React.ReactElement;
  variant: VariantType;
  isFull?: boolean;
  isRounded?: boolean;
  onClick(): void;
}

const BASE_BUTTON = 'btn'
const ROUNDED = 'btn--rounded'
const NOT_SO_ROUND = 'btn--square'
const NORMAL = 'btn--normal'
const FULL = 'btn--full'


export const Button: FC<ButtonTypes> = (props) => {

  const variant = (type: VariantType) => {
    const key = type;
    switch (key) {
      case VariantType.PRIMARY:
        return 'btn--primary';
      case VariantType.SECONDARY:
        return 'btn--secondary';
      case VariantType.TERTIARY:
        return 'btn--tertiary';
      case VariantType.GHOST:
        return 'btn--ghost';
      default:
        break;
    }
  }
  return (
    <button
      onClick={props.onClick}
      className={`
        ${BASE_BUTTON} 
        ${variant(props.variant ? props.variant : VariantType.PRIMARY)}
        ${props.isFull ? FULL : NORMAL} 
        ${props.isRounded ? ROUNDED : NOT_SO_ROUND}
        `}
    >
      {props.icon ? props.icon : null}
      <Typo variant={textHTMLtag.SPAN} size={textSizeType.SNAIL} className="btn__label">{props.label ? props.label : 'Upload'}</Typo>
    </button>
  )
};