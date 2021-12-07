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
export const FABGallery = () => {
  const name = "FAB";
  const icon = <HiHashtag className="fab__icon"/>;
  return (
    <main className="gallery gallery--row">
      <FAB name={name} icon={icon} position={PositionType.BOTTOM_LEFT} onClick={action('clicked')} />
      <FAB name={name} icon={icon} position={PositionType.BOTTOM_RIGHT} onClick={action('clicked')} />
      <FAB name={name} icon={icon} position={PositionType.TOP_LEFT} onClick={action('clicked')} />
      <FAB name={name} icon={icon} position={PositionType.TOP_RIGHT} onClick={action('clicked')} />

    </main>
  )
}