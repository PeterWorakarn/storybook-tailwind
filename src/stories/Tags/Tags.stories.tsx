/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Tags } from "./Tags";
import { HiHashtag } from "react-icons/hi";
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
      icon: <HiHashtag />,
      title: 'AAA'
    },
    {
      icon: <HiHashtag />,
      title: 'BBB'
    },
    {
      icon: <HiHashtag />,
      title: 'CCC'
    },
  ]
  return (
    <Tags items={items} onSelect={action('clicked')} />
  )
};
