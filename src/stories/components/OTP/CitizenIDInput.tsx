import React, { FC, useState } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';
import '../../../base.css';

type CitizenIDInputTypes = {
  name: string;
  helper: string;
  label: string;
  isError: boolean;
  isRequired: boolean;
  values:string;
  setValues: (value: string) => void;
  onAction: (value: string) => void;
}

const checkRenderFormat = (index: number) => {
  if (index === 1 || index === 5 || index === 10 || index === 13) {
    return true
  }
  return false
}
const renderFormat = (citizenID:string) => {
  if (citizenID.length === 0) {
    return ''
  }
  const arrCitizenID = citizenID.split('');
  return arrCitizenID.map((each, index) => {
    if (checkRenderFormat(index)) {
      return ` - ${each}`
    }
    return each
  }).join('')
}
const extractOnlyNumber = (citizenID:string) => {
  return citizenID.replaceAll(' - ', '');
}

export const CitizenIDInput: FC<CitizenIDInputTypes> = (props) => {
  const [renderCitizenID, setRenderCitizenID] = useState('')
  const onChangeHandler = (newValue: string) => {
    if (extractOnlyNumber(newValue).length > 13) {
      return null
    }
    props.setValues(extractOnlyNumber(newValue));
    props.onAction(extractOnlyNumber(newValue));
    setRenderCitizenID(renderFormat(extractOnlyNumber(newValue)))
  }

  const inputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const Key = e.key;
    switch (Key) {
      case 'e': {
        e.preventDefault();
        break;
      }
      default: {
        // Limit only number
        if (Key.match(/^[^0-9]$/)) {
          e.preventDefault();
        }
        break;
      }
    }
  };

  return (
    <div className="input">
      <div className="label__container">
        <label className="label" htmlFor={`${props.name}`}>
          <p>{props.label ? props.label : 'text'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
        </label>
        {props.isError && <HiExclamationCircle className="error" />}
      </div>
      <div className="input__field">
        <input
        className="input--citizen-id"
          id={props.name ? props.name : 'text'}
          name={props.name ? props.name : 'text'}
          value={renderCitizenID}
          type="text"
          onKeyPress={(e) => inputKeyPress(e)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
          placeholder="x - xxxx - xxxxx - xx - x"
        />
      </div>
    </div>
  );
};
