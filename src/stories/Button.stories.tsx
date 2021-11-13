/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from '../components/Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
};

export const primary = () => {
  const label = text("Label", "See now");
  return (
    <Button onClick={action('clicked')} label={label} />
  )
};