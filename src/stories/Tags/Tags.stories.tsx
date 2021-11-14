/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Tags } from "./Tags";
import { HiChip } from "react-icons/hi";
import { action } from "@storybook/addon-actions";


export default {
  title: "Component/Tags",
  component: Tags,
};

export const Tag = () => {
  const items = [
    {
      title: 'AAA'
    },
    {
      title: 'BBB'
    },
    {
      title: 'CCC'
    },
  ]
  return (
    <Tags items={items} onSelect={action('clicked')} />
  )
};
export const TagWithIcon = () => {
  const items = [
    {
      icon: <HiChip />,
      title: 'AAA'
    },
    {
      icon: <HiChip />,
      title: 'BBB'
    },
    {
      icon: <HiChip />,
      title: 'CCC'
    },
  ]
  return (
    <Tags items={items} onSelect={action('clicked')} />
  )
};
