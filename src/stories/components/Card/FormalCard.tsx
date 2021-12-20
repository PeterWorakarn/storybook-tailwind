import React, { FC } from 'react';
import '../../../base.css'

type CardTypes = {
  title: string;
  description: string;
  direction: 'vertical' | 'horizontal';
}


export const FormalCard: FC<CardTypes> = (props) => {
  const stackDirection = (direction: 'vertical' | 'horizontal') => {
    switch (direction) {
      case 'vertical':
        return (
          <div className="card card--vertical">
            <img className="card__img" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="img" />
            <div className="card__container">
              <h1 className="card__header">{props.title ? props.title : 'Title'}</h1>
              <p className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</p>
            </div>
          </div>
        )
      case 'horizontal':
        return (
          <div className="card card--horizontal">
            <img className="card__img" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="img" />
            <div className="card__container">
              <h1 className="card__header">{props.title ? props.title : 'Title'}</h1>
              <p className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  return (
    <>
      {stackDirection(props.direction)}
    </>
  );
};