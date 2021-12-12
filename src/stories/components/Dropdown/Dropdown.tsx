import React, { FC } from 'react';
import { useState } from 'react';
import '../../../base.css'

type DropdownTypes = {
    name: string;
    selectItem: string;
    items: string[];
    onSelect: (value: string) => void;
    onChangeHandler: (value: string) => void;
}

export const Dropdown: FC<DropdownTypes> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onSetValue = (value: string) => {
        props.onSelect(value);
        props.onChangeHandler(value);
    }

    return (
        <div className="dropdown__container">
            <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="dropdown__input" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <input
                    className="dropdown__input__field"
                    type="text"
                    id={props.name}
                    name={props.name}
                    value={props.selectItem}
                />
                    <svg className="dropdown__input__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
            </button>
            <div
                onClick={() => setIsOpen(false)}
                className={`dropdown__backdrop ${isOpen ? 'opacity-100' : 'invisible opacity-0 hidden'} transition-all`}
            >
                <div
                    className="dropdown__items"
                    role="menu"
                    aria-orientation="vertical"
                    tabIndex={0}
                    aria-labelledby="menu-button">
                    <div
                        className="py-1"
                        role="none"
                    >
                        {props.items.map(item => (
                            <span key={item} onClick={() => { onSetValue(item) }} className="dropdown__item text-center hover:text-primary-red cursor-pointer text-gray-700 block px-4 py-2 text-sm" role="menuitem">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};