import React, { FC } from 'react';
import '../../../base.css'
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';


export const ScrollBar: FC = () => {

    return (
        <div className='scroll-bar h-52 overflow-y-auto'>
            <Typo size={textSizeType.SNAIL} variant={textHTMLtag.DIV} className="h-screen">Non adipisicing aliqua incididunt in culpa aliqua ad. Reprehenderit velit eiusmod reprehenderit ullamco ex Lorem deserunt ullamco aliquip fugiat consectetur mollit qui. Irure fugiat esse quis elit dolor voluptate. Labore deserunt officia ex aliqua esse adipisicing tempor et.</Typo>
        </div>
    );
};