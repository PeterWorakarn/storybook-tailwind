import React, { FC, useState } from 'react';
import '../../../base.css';
import { HiChevronUp } from 'react-icons/hi';
import { Typo } from '../Typo/Typo';
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';

type AccordionTypes = {
  header: string;
  info: string;
}

export const Accordion: FC<AccordionTypes> = (props) => {
  const [current, setCurrent] = useState<string>('')

  const handleAccordion = (i: string) => {
    if (current === i) {
      setCurrent('');
    } else {
      setCurrent(i);
    }
  }

  return (
    <div className="accordion-group">
      {['1', '2', '3', '4', '5'].map((i) => {
        return (
          <article onClick={() => handleAccordion(i)} key={i} className={`accordion ${current === i ? '--active' : '--inactive'} transition-all duration-500 ease-linear`}>
            <div className="accordion__container">
              <Typo size={textSizeType.OTTER} variant={textHTMLtag.H1} className="accordion__header">{props.header}</Typo>
              <HiChevronUp className={`accordion__toggle ${current === i ? 'rotate-180' : 'rotate-0'} transform transition-all duration-500 ease-linear`} />
            </div>
            <div className={`accordion__info ${current === i ? 'opacity-100 max-h-96 pb-5' : 'opacity-0 max-h-0 pb-0'} transition-all duration-500 ease-linear`}>
              <Typo size={textSizeType.MOUSE} variant={textHTMLtag.P}>
                {props.info}
              </Typo>
            </div>
          </article>
        )
      })}
    </div>
  );
};