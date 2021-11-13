/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: "Button",
};

export const primary = () => {
  const label = "See now";
  return (
    <Button onClick={action('clicked')} label={label} />
  )
};