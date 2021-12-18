import React, { FC } from 'react';
import { useState } from 'react';
import { HiOutlineX, HiXCircle } from 'react-icons/hi';
import '../../../base.css'
import { VariantType } from '../../../constant-enum-types';
import { Button } from '../Button/Button';

type ModalTypes = {
    header: string;
    isCloseButton: boolean;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalTypes> = (props) => {
    return (
        <>
            <Button
                label="Modal"
                variant={VariantType.TERTIARY}
                onClick={() => props.setModal(true)}
            />
            {props.modal && (
                <div className="modal">
                    <div className="modal__container">
                        <div
                            // style={{ filter: 'blur(8px)' }} 
                            onClick={() => props.setModal(false)} className="modal__backdrop"></div>
                        <div className="modal__dialog">
                            {props.isCloseButton && <div className="modal__close-btn" onClick={() => props.setModal(false)}><HiOutlineX className="w-5 h-5" /></div>}
                            <h1 className="modal__header">
                                {props.header ? props.header : 'This is header'}
                            </h1>
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