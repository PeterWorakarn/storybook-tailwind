/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from './Button';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { VariantType } from "../../constant-enum-types";
import { HiBeaker } from 'react-icons/hi';


export default {
  title: "Component/Button",
  component: Button,
};

export const Primary = () => {
  const label = "See now";
  const isRounded = false;
  const isFull = false;
  const variant = VariantType.PRIMARY;
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Secondary = () => {
  const label = "See now";
  const isRounded = false;
  const isFull = false;
  const variant = VariantType.SECONDARY;
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Tertiary = () => {
  const label = "See now";
  const isRounded = false;
  const isFull = false;
  const variant = VariantType.TERTIARY;
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
export const Ghost = () => {
  const label = "See now";
  const isRounded = false;
  const isFull = false;
  const variant = VariantType.GHOST;
  return (
    <Button icon={<HiBeaker className="w-4 h-4" />} variant={variant as VariantType} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
  )
};
