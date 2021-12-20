/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BorderlessCard } from "./BorderlessCard";


export default {
  title: "Component/Card",
  component: BorderlessCard,
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'App Store Awards honor the best apps and games of 2021',
      control: { type: 'text' }
    },
    description: {
      name: 'Description',
      defaultValue: 'Adipisicing culpa amet mollit duis excepteur labore. Officia laborum excepteur enim id.',
      control: { type: 'text' }
    },
    category: {
      name: 'Category',
      defaultValue: 'update',
      control: { type: 'text' }
    },
    author: {
      name: 'Author',
      defaultValue: 'John Doe',
      control: { type: 'text' }
    },
    createdAt: {
      name: 'createdAt',
      control: { type: 'date' }
    },
    isDescription: {
      name: 'isDescription',
      defaultValue: true,
      control: { type: 'boolean' }
    },
    isCategory: {
      name: 'isCategory',
      defaultValue: true,
      control: { type: 'boolean' }
    },
    isAuthor: {
      name: 'isAuthor',
      defaultValue: true,
      control: { type: 'boolean' }
    },
    isCreatedAt: {
      name: 'isCreatedAt',
      defaultValue: true,
      control: { type: 'boolean' }
    },
    direction: {
      name: 'Direction',
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      control: { type: 'select' }
    },
  }
};

export const CustomBorderlessCard = (arg: any) => {

  return (
    <main className="gallery gallery--col">
      <BorderlessCard {...arg} />
    </main>
  )
}