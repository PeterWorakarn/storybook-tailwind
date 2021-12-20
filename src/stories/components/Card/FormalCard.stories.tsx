/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { action } from '@storybook/addon-actions';
import { FormalCard } from "./FormalCard";


export default {
  title: "Component/Card",
  component: FormalCard,
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'Title',
      control: { type: 'text' }
    },
    description: {
      name: 'Description',
      defaultValue: 'Adipisicing culpa amet mollit duis excepteur labore. Officia laborum excepteur enim id.',
      control: { type: 'text' }
    },
    direction: {
      name: 'Direction',
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      control: { type: 'select' }
    },
  }
};

export const CustomFormalCard = (arg: any) => {

  return (
    <main className="gallery gallery--col">
      <FormalCard {...arg} />
    </main>
  )
}