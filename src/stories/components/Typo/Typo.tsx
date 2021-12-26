import React, { FC } from 'react';
import '../../../base.css'
import { textSizeType, textHTMLtag } from '../../../constant-enum-types';

type TypoTypes = {
    size: textSizeType;
    variant: textHTMLtag;
    className?: string;
}

const setSize = (size: textSizeType) => {
    const key = size;
    switch (key) {
        case textSizeType.SNAIL:
            return 'typo--snail';
        case textSizeType.OTTER:
            return 'typo--otter';
        case textSizeType.MOUSE:
            return 'typo--mouse';
        case textSizeType.DOLPHIN:
            return 'typo--dolphin';
        case textSizeType.HIPPO:
            return 'typo--hippo';
        case textSizeType.MAMMOTH:
            return 'typo--mammoth';
        default:
            break;
    }
}

const textVariant = (type: textHTMLtag, size: textSizeType, customClass: string, content: any) => {
    switch (type) {
        case textHTMLtag.H1:
            return <h1 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h1>
        case textHTMLtag.H2:
            return <h2 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h2>
        case textHTMLtag.H3:
            return <h3 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h3>
        case textHTMLtag.H4:
            return <h4 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h4>
        case textHTMLtag.H5:
            return <h5 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h5>
        case textHTMLtag.H6:
            return <h6 className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</h6>
        case textHTMLtag.P:
            return <p className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</p>
        case textHTMLtag.DIV:
            return <div className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</div>
        case textHTMLtag.SPAN:
            return <span className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</span>
        default:
            return <p className={`typo ${setSize(size)} ${customClass}`}>{content ? content : 'This is Typo'}</p>
    }
}

export const Typo: FC<TypoTypes> = (props) => {

    return (
        <>
            {textVariant(props.variant, props.size, props.className ? props.className : '', props.children)}
        </>
    );
};