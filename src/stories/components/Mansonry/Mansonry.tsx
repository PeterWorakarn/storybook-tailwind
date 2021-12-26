import React, { FC } from 'react';
import '../../../base.css'
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

type MansonryTypes = {
  isSkew: boolean;
  isHidden: boolean;
}

const dumpData = [
  {
    title: 'Thiel - Hamill',
    description: 'Corrupti laboriosam ut quia quasi. Fuga quae ut rerum dolorum voluptatum et rem ut et.'
  },
  {
    title: 'Kulas, Mertz and Batz',
    description: 'Rerum minus similique. Deserunt officia omnis aut ut doloribus. Qui quos quia sunt quam. Consequatur fugiat aliquam.'
  },
  {
    title: 'Von Inc',
    description: 'Recusandae inventore eveniet. Accusamus accusantium rerum et eaque ut quod optio porro et. Doloribus quia et autem cumque ipsa iure dignissimos. Hic provident alias placeat. Rerum maiores doloremque facilis vitae cum quae nam et.'
  },
  {
    title: 'Schultz, Ratke and Ziemann',
    description: 'Perferendis beatae qui repudiandae placeat quis. Maxime laudantium aut quo distinctio at repudiandae itaque repudiandae distinctio. Magni veniam blanditiis quae et aspernatur. Id et iusto voluptatum sit deleniti sed. Ipsa magnam mollitia voluptatem hic ad placeat. Unde rerum voluptas vel tempora.'
  },
  {
    title: 'Howe, Morissette and Wiza',
    description: 'Quia molestiae reprehenderit accusamus commodi soluta excepturi. Illo provident quia. Eum quibusdam et dolores. Velit est aliquam reiciendis velit eos harum culpa qui ducimus. Eos eos est quia et. Culpa ratione culpa laborum sint pariatur fugit voluptatem perspiciatis harum.'
  },
  {
    title: 'Wiza LLC',
    description: 'Vel molestiae distinctio optio officia sed nihil aut. Et numquam molestiae suscipit ut qui odit cum.'
  },
  {
    title: 'Wiza and Sons',
    description: 'Molestiae perferendis doloribus deserunt eveniet. Sint dolor deserunt officia quasi.'
  },
  {
    title: 'Dach - Shields',
    description: 'Laboriosam consequatur est et repellendus molestiae consectetur dolor sit. Et unde odit alias et dolores hic ut quia commodi.'
  },
  {
    title: 'Howe LLC',
    description: 'Ad hic sint et at rerum sapiente. Molestias iusto est similique facilis excepturi expedita est blanditiis et. Nisi consectetur iusto nesciunt.'
  },
  {
    title: 'Quigley, Kertzmann and Rau',
    description: 'Cupiditate ut ea sapiente corporis sit laudantium ad ratione quas. Repellendus autem officiis. Ex fugiat sed ipsum cum et expedita qui autem. Culpa est sit perspiciatis rerum a inventore molestias.'
  },
  {
    title: 'RRath - Mueller',
    description: 'Debitis aut porro ut consequatur neque temporibus autem a aut. Natus officia molestiae consequatur quo est. Quia rerum sed est.'
  },
];

export const Mansonry: FC<MansonryTypes> = (props) => {

  return (
    <div className="mansonry">
      <div className={`mansonry__container transform-gpu  ${props.isHidden && 'overflow-hidden'} ${props.isSkew && 'rotate-3 -skew-x-1'}`}>
        {dumpData.filter((i, index) => {
          return index === 0 || index === 3 || index === 6 || index === 9
        }).map((i, index) => {
          return (
            <article key={index} className="mansonry__item">
              <Typo className="mansonry__header" variant={textHTMLtag.H1} size={textSizeType.OTTER} >{i.title}</Typo>
              <Typo className="mansonry__description" variant={textHTMLtag.P} size={textSizeType.SNAIL} >{i.description}</Typo>
            </article>
          )
        })}
      </div>
      <div className={`mansonry__container transform-gpu ${props.isHidden && 'overflow-hidden'} ${props.isSkew && 'rotate-3 -skew-x-1'}`}>
        {dumpData.filter((i, index) => {
          return index === 1 || index === 4 || index === 7 || index === 10
        }).map((i, index) => {
          return (
            <article key={index} className="mansonry__item">
              <Typo className="mansonry__header" variant={textHTMLtag.H1} size={textSizeType.OTTER} >{i.title}</Typo>
              <Typo className="mansonry__description" variant={textHTMLtag.P} size={textSizeType.SNAIL} >{i.description}</Typo>
            </article>
          )
        })}
      </div>
      <div className={`mansonry__container transform-gpu  ${props.isHidden && 'overflow-hidden'} ${props.isSkew && 'rotate-3 -skew-x-1'}`}>
        {dumpData.filter((i, index) => {
          return index === 2 || index === 5 || index === 8 || index === 11
        }).map((i, index) => {
          return (
            <article key={index} className="mansonry__item">
              <Typo className="mansonry__header" variant={textHTMLtag.H1} size={textSizeType.OTTER} >{i.title}</Typo>
              <Typo className="mansonry__description" variant={textHTMLtag.P} size={textSizeType.SNAIL} >{i.description}</Typo>
            </article>
          )
        })}
      </div>
    </div>
  );
};