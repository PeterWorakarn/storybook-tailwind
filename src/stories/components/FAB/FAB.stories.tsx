/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HiHashtag } from 'react-icons/hi';
import { FAB } from "./FAB";
import { PositionType } from "../../../constant-enum-types";


export default {
  title: "Component/FAB",
  component: FAB,
  argTypes: {
    name: {
      name: 'Name',
      defaultValue: 'FAB',
      control: { type: 'text' }
    },
    position: {
      name: 'Position',
      defaultValue: PositionType.BOTTOM_RIGHT,
      options: [PositionType.BOTTOM_RIGHT, PositionType.BOTTOM_LEFT, PositionType.TOP_LEFT, PositionType.TOP_RIGHT],
      control: { type: 'select' }
    },
  }
};

export const CustomFAB = (args: any) => <FAB {...args} onClick={action('clicked')} />