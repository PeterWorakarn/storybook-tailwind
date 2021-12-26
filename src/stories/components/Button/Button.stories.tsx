/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { VariantType } from "../../../constant-enum-types";
import { HiBeaker } from "react-icons/hi";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'Upload',
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

export const CustomButton = (args: any) => <Button {...args} icon={<HiBeaker className="w-4 h-4" />} onClick={action('clicked')} />
export const ButtonGallery = () => {
  const label = "Upload";
  const isRounded = false;
  const isFull = false;
  return (
    <main className="gallery gallery--row">
      <Button variant={VariantType.PRIMARY as VariantType} icon={<HiBeaker className="w-4 h-4" />} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
      <Button variant={VariantType.SECONDARY as VariantType} icon={<HiBeaker className="w-4 h-4" />} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
      <Button variant={VariantType.TERTIARY as VariantType} icon={<HiBeaker className="w-4 h-4" />} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
      <Button variant={VariantType.GHOST as VariantType} icon={<HiBeaker className="w-4 h-4" />} isFull={isFull} isRounded={isRounded} onClick={action('clicked')} label={label} />
    </main>
  )
}