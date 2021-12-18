import React, { FC } from 'react';
import '../../../base.css'

type LoadingTypes = {

}

export const Loading: FC<LoadingTypes> = (props) => {

  return (
    <div className="loading">
      <div className="loading__container__sk-chase">
        <div className="loading__container__sk-chase-dot" />
        <div className="loading__container__sk-chase-dot" />
        <div className="loading__container__sk-chase-dot" />
        <div className="loading__container__sk-chase-dot" />
        <div className="loading__container__sk-chase-dot" />
        <div className="loading__container__sk-chase-dot" />
      </div>
    </div>
  );
};