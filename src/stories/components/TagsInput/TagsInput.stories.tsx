/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { TagsInput } from "./TagsInput";
import { HiChip } from "react-icons/hi";
import { action } from "@storybook/addon-actions";
import { borderVariant } from "../../../constant-enum-types";


export default {
  title: "Component/TagsInput",
  component: TagsInput,
  argTypes: {
    borderVariant: {
      name: 'borderVariant',
      defaultValue: borderVariant.NORMAL,
      options: [borderVariant.SQUARE, borderVariant.NORMAL, borderVariant.ROUNDED],
      control: { type: 'select' }
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Create new categories...',
      control: { type: 'text' }

    }
  }
};

export const TagInput = (args: any) => {
  const [tag, setTag] = useState<string[]>([])

  return (
    <TagsInput
      {...args}
      name="tags"
      valueData={tag}
      onChangeHandler={(value) => setTag(value)}
    />
  )
};

export const TagInputGallery = () => {
  const [tag, setTag] = useState<string[]>([])
  const name = "tags"
  const placeholder = "Create new categories...";
  return (
    <main className="gallery gallery--col">
      <TagsInput
        name={name}
        placeholder={placeholder}
        valueData={tag}
        borderVariant={borderVariant.SQUARE}
        onChangeHandler={(value) => setTag(value)}
      />
      <TagsInput
        name={name}
        placeholder={placeholder}
        valueData={tag}
        borderVariant={borderVariant.NORMAL}
        onChangeHandler={(value) => setTag(value)}
      />
      <TagsInput
        name={name}
        placeholder={placeholder}
        valueData={tag}
        borderVariant={borderVariant.ROUNDED}
        onChangeHandler={(value) => setTag(value)}
      />
    </main>
  )
}