import moment from 'moment-timezone';
import React, { FC } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import '../../../base.css'

type BorderlessCardTypes = {
  isCategory: boolean;
  category: string;
  title: string;
  isDescription: boolean;
  description: string;
  isAuthor: boolean;
  author: string;
  isCreatedAt: boolean;
  createdAt: string;
  direction: 'vertical' | 'horizontal';
}


export const BorderlessCard: FC<BorderlessCardTypes> = (props) => {
  const stackDirection = (direction: 'vertical' | 'horizontal') => {
    switch (direction) {
      case 'vertical':
        return (
          <div className="card card--borderless card--vertical">
            <img className="card__img" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="img" />
            <div className="card__container">
              {props.isCategory && <span className="card__category">{props.category ? props.category : 'update'}</span>}
              <h1 className="card__header">{props.title ? props.title : 'Title'}</h1>
              {props.isDescription && <p className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</p>}
              <div className="card__footer">
                {props.isAuthor && <span className="card__author"><HiUserCircle className="card__author-avatar" />{props.author ? props.author : 'John Doe'}</span>}
                {props.isCreatedAt && <span className="card__time">{props.createdAt ? moment(props.createdAt).format('D MMM YYYY') : '6 Dec 2021'}</span>}
              </div>
            </div>
          </div>
        )
      case 'horizontal':
        return (
          <div className="card card--borderless card--horizontal">
            <img className="card__img" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="img" />
            <div className="card__container">
              {props.isCategory && <span className="card__category">{props.category ? props.category : 'update'}</span>}
              <h1 className="card__header">{props.title ? props.title : 'Title'}</h1>
              {props.isDescription && <p className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</p>}
              <div className="card__footer">
                {props.isAuthor && <span className="card__author"><HiUserCircle className="card__author-avatar" />{props.author ? props.author : 'John Doe'}</span>}
                {props.isCreatedAt && <span className="card__time">{props.createdAt ? moment(props.createdAt).format('D MMM YYYY') : '6 Dec 2021'}</span>}
              </div>
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