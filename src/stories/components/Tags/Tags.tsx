import React, { FC, useState } from 'react';
import '../../../base.css';
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

type TagsTypes = {
  items: {
    icon?: React.ReactElement,
    title: string,
  }[];
  onSelect: (value: string) => void;
}

export const Tags: FC<TagsTypes> = (props) => {
  const [current, setCurrent] = useState(props.items[0].title);
  const onSelectHandler = (value: string) => {
    setCurrent(value);
    props.onSelect(value);
  }

  return (
    <div className="tag-chip">
      {props.items.map((tag: {
        icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        title: string;
      }) => {
        return (
          <label className="tag__container" htmlFor={tag.title} key={tag.title}>
            <input
              type="radio"
              className="tag__status sr-only"
              id={tag.title}
              checked={current === tag.title}
              name="tags"
              value={tag.title}
              onChange={() => onSelectHandler(tag.title)}
            />
            <div className="tag__label">
              {tag.icon}
              <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN}>
                {tag.title}
              </Typo>
            </div>
          </label>
        );
      })}
    </div>
  );
};