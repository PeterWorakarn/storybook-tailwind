/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { VariantType } from "../../../constant-enum-types";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'See now',
      control: { type: 'text' }
    },
    variant: {
      name: 'Variant',
      defaultValue: VariantType.PRIMARY,
      options: [VariantType.PRIMARY, VariantType.SECONDARY, VariantType.TERTIARY, VariantType.GHOST],
      control: { type: 'select' }
    },
    isFull: {
      name: 'Full',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    isRounded: {
      name: 'Rounded',
      defaultValue: false,
      control: { type: 'boolean' }
    },
  }
};

export const CustomButton = (args: any) => <Button {...args} onClick={action('clicked')} />

// export const Primary = () => {
//   const label = "See now";
//   const isRounded = false;
//   const isFull = false;
//   const variant = VariantType.PRIMARY;
//   return (
//     <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
//   )
// };
// export const Secondary = () => {
//   const label = "See now";
//   const isRounded = false;
//   const isFull = false;
//   const variant = VariantType.SECONDARY;
//   return (
//     <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
//   )
// };
// export const Tertiary = () => {
//   const label = "See now";
//   const isRounded = false;
//   const isFull = false;
//   const variant = VariantType.TERTIARY;
//   return (
//     <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
//   )
// };
// export const Ghost = () => {
//   const label = "See now";
//   const isRounded = false;
//   const isFull = false;
//   const variant = VariantType.GHOST;
//   return (
//     <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
//   )
// };
