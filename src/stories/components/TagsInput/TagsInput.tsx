import React, { FC, useState } from 'react';
import { HiXCircle } from 'react-icons/hi';
import '../../../base.css';
import { borderVariant } from '../../../constant-enum-types';

type TagsInputTypes = {
  name: string;
  placeholder: string;
  valueData: string[];
  borderVariant: borderVariant;
  onChangeHandler: (value: string[]) => void;
  onAction: (value: string[]) => void;
}

const variant = (type: borderVariant) => {
  const key = type;
  switch (key) {
    case borderVariant.SQUARE:
      return 'rounded';
    case borderVariant.NORMAL:
      return 'rounded-md';
    case borderVariant.ROUNDED:
      return 'rounded-full';
  }
}

export const TagsInput: FC<TagsInputTypes> = (props) => {
  const removeTag = (index: number) => {
    const newTags = [...props.valueData];
    newTags.splice(index, 1);
    // add custom onChange here
    props.onChangeHandler(newTags);
    props.onAction(newTags);
  }

  const inputKeyDown = (e: any) => {
    const value = e.target.value;
    if (e.key === 'Enter' && value) {
      if (props.valueData.find(tag => tag.toLowerCase() === value.toLowerCase()) || value === ' ') {
        return;
      }
      const addNewTags = [...props.valueData, value]
      // add custom onChange here
      props.onChangeHandler(addNewTags);
      props.onAction(addNewTags);
      e.target.value = null;
    }
    else if (e.keyCode === 32 && value) {
      if (props.valueData.find(tag => tag.toLowerCase() === value.toLowerCase()) || value === ' ') {
        return;
      }
      const addNewTags = [...props.valueData, value]
      // add custom onChange here
      props.onChangeHandler(addNewTags);
      props.onAction(addNewTags);
      e.target.value = null;
    }
    else if (e.key === 'Backspace' && !value) {
      removeTag(props.valueData.length - 1)
    }
  }
  return (
    <div className={`tag-input ${variant(props.borderVariant === borderVariant.ROUNDED ? borderVariant.NORMAL : props.borderVariant )}`}>
      <div className="tag-input__tags">
        {props.valueData.map((tag, i) => (
          <span key={tag} className={`tag-input__tag ${variant(props.borderVariant)}`}>
            {tag}
            <button className="outline-none" type="button" onClick={() => removeTag(i)}><HiXCircle /></button>
          </span>
        ))}
      </div>
      <input
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className={`tag-input__input`}
        type="text"
        onKeyDown={(e) => inputKeyDown(e)} />
    </div>
  );
};