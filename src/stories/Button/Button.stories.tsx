/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from './Button';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { VariantType } from "../../constant-enum-types";
import { HiBeaker } from 'react-icons/hi';


export default {
  title: "Button",
  component: Button,
  decorators: [
    withKnobs
  ],
};

export const Primary = () => {
  const label = text("Label", "See now");
  const isRounded = boolean("isRounded", false);
  const isFull = boolean("isFull", false);
  const variant = text("variant", VariantType.PRIMARY);
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Secondary = () => {
  const label = text("Label", "See now");
  const isRounded = boolean("isRounded", false);
  const isFull = boolean("isFull", false);
  const variant = text("variant", VariantType.SECONDARY);
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Tertiary = () => {
  const label = text("Label", "See now");
  const isRounded = boolean("isRounded", false);
  const isFull = boolean("isFull", false);
  const variant = text("variant", VariantType.TERTIARY);
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Ghost = () => {
  const label = text("Label", "See now");
  const isRounded = boolean("isRounded", false);
  const isFull = boolean("isFull", false);
  const variant = text("variant", VariantType.GHOST);
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
