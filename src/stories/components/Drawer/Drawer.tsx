import React, { FC } from 'react';
import { PositionType } from '../../../constant-enum-types';
import '../../../base.css'
import { HiHashtag } from 'react-icons/hi';

type DrawerTypes = {
  position: PositionType;
  visible: boolean;
  onCancle:() => void;
}

export const Drawer: FC<DrawerTypes> = (props) => {
  return (
    <>xxx</>
  );
};