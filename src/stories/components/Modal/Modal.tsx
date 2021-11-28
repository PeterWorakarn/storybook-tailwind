import React, { FC } from 'react';
import { useState } from 'react';
import { HiOutlineX, HiXCircle } from 'react-icons/hi';
import '../../../base.css'
import { VariantType } from '../../../constant-enum-types';
import { Button } from '../Button/Button';

type ModalTypes = {
    header: string;
    isCloseButton: boolean;
    modal:  boolean;
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
                <div className="modal-container z-10 fixed box-border overflow-hidden inset-0 outline-none">
                    <div className="modal-container__container relative flex h-full w-full justify-center items-center my-10 text-gray-600">
                        <div style={{ filter: 'blur(8px)' }} onClick={() => props.setModal(false)} className="modal-container__backdrop z-20 bg-gray-200 opacity-75 absolute h-full w-full"></div>
                        <div className="modal-container__modal z-30 relative w-full max-w-xs max-h-full bg-white rounded-md shadow-sm px-3 pb-3 pt-6 flex flex-col items-center capitalize">
                            {props.isCloseButton && <div className="absolute cursor-pointer text-red-500 font-medium top-1.5 right-1.5" onClick={() => props.setModal(false)}><HiOutlineX className="w-5 h-5" /></div>}
                            <h1 className="text-red-500 text-2xl font-medium pb-3 border-b border-gray-200 w-full text-center">
                                {props.header ? props.header : 'This is header'}
                            </h1>
                            <div className="w-full pt-3">
                                {props.children ? props.children : 'Consectetur est aute consectetur ipsum et adipisicing in mollit. Tempor elit minim do nulla sint sint laboris consectetur .'}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};