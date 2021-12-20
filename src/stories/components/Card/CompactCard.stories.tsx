/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { flexJustifyType } from "../../../constant-enum-types";
import { CompactCard } from "./CompactCard";


export default {
  title: "Component/Card",
  component: CompactCard,
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
    height: {
      name: 'height',
      defaultValue: 384,
      control: {
        type: 'range',
        min: 190,
        max: 400,
        step: 10,
      }
    },
    flexJustifyType: {
      name: 'flexJustifyType',
      defaultValue: flexJustifyType.JUSTIFY_END,
      options: [flexJustifyType.JUSTIFY_BETWEEN, flexJustifyType.JUSTIFY_START, flexJustifyType.JUSTIFY_END],
      control: {
        type: 'select'
      }
    }
  }
};

export const CustomCompactCard = (arg: any) => {

  return (
    <main className="gallery gallery--col">
      <CompactCard {...arg} />
    </main>
  )
}