import React, { FC } from 'react';
import '../../../base.css';
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

type CircularProgressType = {
  value: number
}

export const CircularProgress: React.FC<CircularProgressType> = (props) => {
  return (
    <div className="circular-progress">
      <div className="circular-progress__circular">
        <svg>
          <circle cx="150" cy="150" r="150"></circle>
          <circle
            style={{ strokeDashoffset: `calc(950 - (950 * ${props.value})/100)` }}
            cx="150" cy="150" r="150"></circle>
        </svg>
      </div>
      <Typo size={textSizeType.MAMMOTH} variant={textHTMLtag.P} className="circular-progress__number">{props.value}%</Typo>
    </div>
  );
};