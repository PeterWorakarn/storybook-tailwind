import React, { FC } from 'react';
import { PlacementType, textHTMLtag, textSizeType } from '../../../constant-enum-types';
import '../../../base.css'
import { HiHashtag, HiOutlineX } from 'react-icons/hi';
import { Typo } from '../Typo/Typo';

type DrawerTypes = {
  header: string;
  isCloseButton: boolean;
  position: PlacementType;
  visible: boolean;
  onClose: () => void;
}

const positionPlacement = (value: PlacementType, key: 'element' | 'backdrop' | 'border') => {
  if (key === 'element') {
    switch (value) {
      case PlacementType.BOTTOM:
        return 'translate-y-96'
      case PlacementType.LEFT:
        return '-translate-x-96'
      case PlacementType.RIGHT:
        return 'translate-x-96'
      default:
        return 'translate-y-96'
    }
  }
  if (key === 'border') {
    switch (value) {
      case PlacementType.BOTTOM:
        return 'rounded-t-md h-3/4'
      case PlacementType.LEFT:
        return 'rounded-r-md h-full'
      case PlacementType.RIGHT:
        return 'rounded-l-md h-full'
      default:
        return 'rounded-t-md h-3/4'
    }
  }
  if (key === 'backdrop') {
    switch (value) {
      case PlacementType.BOTTOM:
        return 'justify-center items-end'
      case PlacementType.LEFT:
        return 'justify-start items-end'
      case PlacementType.RIGHT:
        return 'justify-end items-end'
      default:
        return 'justify-center items-end'
    }
  }
}

export const Drawer: FC<DrawerTypes> = (props) => {
  return (
    <>
      <div className={`drawer ${props.visible ? 'translate-y-0 translate-x-0 opacity-100 visible' : `${positionPlacement(props.position, 'element')} invisible`} `}>
        <div className={`drawer__container ${positionPlacement(props.position, 'backdrop')}`}>
          <div onClick={props.onClose} className={`drawer__backdrop ${props.visible ? 'translate-y-0 translate-x-0 opacity-40 w-full h-full' : `${positionPlacement(props.position, 'element')} opacity-0`}`} />
          <article className={`${props.visible ? 'translate-y-0 translate-x-0 opacity-100' : `${positionPlacement(props.position, 'element')} opacity-0`} ${positionPlacement(props.position, 'border')} drawer__dialog z-30 transform transition-all duration-300 ease-in-out`}>
            {props.isCloseButton && <div className="drawer__close-btn" onClick={props.onClose}><HiOutlineX className="w-5 h-5" /></div>}
            <Typo size={textSizeType.OTTER} variant={textHTMLtag.H1} className="drawer__header">
              {props.header ? props.header : 'This is header'}
            </Typo>
            <div className="drawer__body">
              {props.children ? props.children : 'Consectetur est aute consectetur ipsum et adipisicing in mollit. Tempor elit minim do nulla sint sint laboris consectetur .'}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};