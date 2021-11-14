import React, { FC, useState } from 'react';
import '../../base.css';

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
    <div className="flex justify-start flex-wrap gap-2 mt-2">
      {props.items.map((tag: {
        icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        title: string;
      }) => {
        return (
          <label htmlFor={tag.title} key={tag.title}>
            {current === tag.title ?
              <input
                type="radio"
                className="checkboxFilter sr-only"
                id={tag.title}
                checked
                name="tags"
                value={tag.title}
                onChange={() => onSelectHandler(tag.title)}
              /> :
              <input
                type="radio"
                className="checkboxFilter sr-only"
                id={tag.title}
                name="tags"
                value={tag.title}
                onChange={() => onSelectHandler(tag.title)}
              />}

            <div className="chip flex gap-1 justify-center items-center transition-colors border-2 dark:border-none border-gray-100 cursor-pointer text-gray-500 dark:text-typo-minor dark:border-typo-minor py-0.5 px-4 rounded-md">
              {tag.icon}{tag.title}
            </div>
          </label>
        );
      })}
    </div>
  );
};