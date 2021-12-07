import React, { FC } from 'react';
import '../../../base.css'
import { textSizeType } from '../../../constant-enum-types';

type TypoTypes = {
    size: textSizeType;
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

export const Typo: FC<TypoTypes> = (props) => {

    return (
        <div className={`typo ${setSize(props.size)}`}>
            {props.children ? props.children : 'This is Typo'}
        </div>
    );
};