import React, { FC } from 'react';
import { useState } from 'react';
import '../../../base.css'
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

type DropdownTypes = {
  name: string;
  selectItem: string;
  items: string[];
  onSelect: (value: string) => void;
  onChangeHandler: (value: string) => void;
}

export const DropdownHook: FC<DropdownTypes> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSetValue = (value: string) => {
    props.onSelect(value);
    props.onChangeHandler(value);
  }

  return (
    <div className="dropdown-hook">
      <div className="dropdown-hook__input" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <input
          className="dropdown-hook__input__field"
          type="text"
          id={props.name}
          name={props.name}
          value={props.selectItem}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          readOnly
        />
        <svg className="dropdown-hook__input__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={`${isOpen ? 'opacity-100 text-opacity-100 max-h-96 visible scale-100' : 'opacity-0 text-opacity-0 max-h-0 invisible scale-95'} dropdown-hook__items`}>
        {props.items.map(item => (
          <div key={item} onClick={() => { onSetValue(item) }} className="dropdown-hook__item" role="menuitem">
            <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN}>
              {item}
            </Typo>
          </div>
        ))}
      </div>
    </div>
  );
};