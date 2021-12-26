import moment from 'moment-timezone';
import React, { FC } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import '../../../base.css'
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

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
              {props.isCategory && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__category">{props.category ? props.category : 'update'}</Typo>}
              <Typo size={textSizeType.OTTER} variant={textHTMLtag.H1} className="card__header">{props.title ? props.title : 'Title'}</Typo>
              {props.isDescription && <Typo size={textSizeType.MOUSE} variant={textHTMLtag.P} className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</Typo>}
              <div className="card__footer">
                {props.isAuthor && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__author"><HiUserCircle className="card__author-avatar" />{props.author ? props.author : 'John Doe'}</Typo>}
                {props.isCreatedAt && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__time">{props.createdAt ? moment(props.createdAt).format('D MMM YYYY') : '6 Dec 2021'}</Typo>}
              </div>
            </div>
          </div>
        )
      case 'horizontal':
        return (
          <div className="card card--borderless card--horizontal">
            <img className="card__img" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="img" />
            <div className="card__container">
              {props.isCategory && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__category">{props.category ? props.category : 'update'}</Typo>}
              <Typo size={textSizeType.OTTER} variant={textHTMLtag.H1} className="card__header">{props.title ? props.title : 'Title'}</Typo>
              {props.isDescription && <Typo size={textSizeType.MOUSE} variant={textHTMLtag.P} className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</Typo>}
              <div className="card__footer">
                {props.isAuthor && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__author"><HiUserCircle className="card__author-avatar" />{props.author ? props.author : 'John Doe'}</Typo>}
                {props.isCreatedAt && <Typo size={textSizeType.SNAIL} variant={textHTMLtag.SPAN} className="card__time">{props.createdAt ? moment(props.createdAt).format('D MMM YYYY') : '6 Dec 2021'}</Typo>}
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