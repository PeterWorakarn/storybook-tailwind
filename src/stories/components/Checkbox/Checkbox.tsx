import React, { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import '../../../base.css'

type CheckboxTypes = {
    name: string;
    label: string;
    checkboxValue: boolean;
    handleCheckbox: (value: boolean) => void;
    onAction: (value: boolean) => void;
}


export const Checkbox: FC<CheckboxTypes> = (props) => {

    const handleCheckbox = (value: boolean) => {
        props.handleCheckbox(!value)
        props.onAction(!value)
    }

    return (
        <label htmlFor={props.name ? props.name : 'checkbox-name'} className="checkbox">
            <div className={`checkbox__container ${props.checkboxValue ? 'border border-red-500 bg-red-500 ' : 'border-2 border-gray-200'} `} >
                <BsCheckLg className={`checkbox__icon ${props.checkboxValue ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <input
                id={props.name ? props.name : 'checkbox-name'}
                name={props.name ? props.name : 'checkbox-name'}
                className="checkbox__input"
                type="checkbox"
                onClick={() => handleCheckbox(props.checkboxValue)}
                checked={props.checkboxValue}
            />
            <span  className={`checkbox__label ${props.checkboxValue ? 'font-normal' : 'font-normal'}`}>
                {props.label ? props.label : 'Option'}
            </span>
        </label>
    );
};