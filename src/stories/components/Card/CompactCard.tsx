import moment from 'moment-timezone';
import React, { FC } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import '../../../base.css'
import { flexJustifyType } from '../../../constant-enum-types';

type CardTypes = {
  isCategory: boolean;
  category: string;
  title: string;
  isDescription: boolean;
  description: string;
  isAuthor: boolean;
  author: string;
  isCreatedAt: boolean;
  createdAt: string;
  flexJustifyType: flexJustifyType;
  height: number;
}


export const CompactCard: FC<CardTypes> = (props) => {

  return (
    <div
      className="card card--compact card--vertical"
      style={{ height: `${props.height}px` ,backgroundImage: `url(https://mdbootstrap.com/img/new/standard/nature/184.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.75)' }}
    >
      <div className={`card__container ${props.flexJustifyType}`}>
        {props.isCategory && <span className="card__category">{props.category ? props.category : 'update'}</span>}
        <div>
          <h1 className="card__header">{props.title ? props.title : 'Title'}</h1>
          {props.isDescription && <p className="card__description">{props.description ? props.description : 'Occaecat amet quis fugiat reprehenderit consectetur do tempor ea ea irure dolor laborum dolore velit. Aute elit magna ex ullamco incididunt commodo non dolor quis adipisicing occaecat.'}</p>}
          <div className="card__footer">
            {props.isAuthor && <span className="card__author"><HiUserCircle className="card__author-avatar" />{props.author ? props.author : 'John Doe'}</span>}
            {props.isCreatedAt && <span className="card__time">{props.createdAt ? moment(props.createdAt).format('D MMM, YYYY') : 'Dec 6, 2021'}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};