import React, { FC } from 'react';
import { useState } from 'react';
import { HiOutlineX, HiXCircle } from 'react-icons/hi';
import '../../../base.css'
import { textHTMLtag, textSizeType, VariantType } from '../../../constant-enum-types';
import { Button } from '../Button/Button';
import { Typo } from '../Typo/Typo';

type ModalTypes = {
    header: string;
    isCloseButton: boolean;
    visible: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalTypes> = (props) => {
    return (
        <>
            {props.visible && (
                <div className="modal">
                    <div className="modal__container">
                        <div
                            // style={{ filter: 'blur(8px)' }} 
                            onClick={props.onClose} className="modal__backdrop"></div>
                        <div className="modal__dialog">
                            {props.isCloseButton && <div className="modal__close-btn" onClick={props.onClose}><HiOutlineX className="w-5 h-5" /></div>}
                            <Typo size={textSizeType.OTTER} variant={textHTMLtag.H1} className="modal__header">
                                {props.header ? props.header : 'This is header'}
                            </Typo>
                            <div className="modal__body">
                                {props.children ? props.children : 'Consectetur est aute consectetur ipsum et adipisicing in mollit. Tempor elit minim do nulla sint sint laboris consectetur .'}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};