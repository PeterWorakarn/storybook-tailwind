import React, { FC } from 'react';
import '../../../base.css';

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
      <div className="circular-progress__number">
        <p>{props.value}%</p>
      </div>
    </div>
  );
};