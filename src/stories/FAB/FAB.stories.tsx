/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { HiHashtag } from 'react-icons/hi';
import { FAB } from "./FAB";
import { PositionType } from "../../constant-enum-types";


export default {
  title: "Component/Floating Action Button",
  component: FAB,
  decorators: [
    withKnobs
  ],
};

export const TopRight = () => {
  const label = text("Label", "FAB");
  return (
    <FAB position={PositionType.TOP_RIGHT} label={label} icon={<HiHashtag />} onClick={action('clicked')} />
  )
};
export const TopLeft = () => {
  const label = text("Label", "FAB");
  return (
    <FAB position={PositionType.TOP_LEFT} label={label} icon={<HiHashtag />} onClick={action('clicked')} />
  )
};
export const BottomRight = () => {
  const label = text("Label", "FAB");
  return (
    <FAB position={PositionType.BOTTOM_RIGHT} label={label} icon={<HiHashtag />} onClick={action('clicked')} />
  )
};
export const BottomLeft = () => {
  const label = text("Label", "FAB");
  return (
    <FAB position={PositionType.BOTTOM_LEFT} label={label} icon={<HiHashtag />} onClick={action('clicked')} />
  )
};
