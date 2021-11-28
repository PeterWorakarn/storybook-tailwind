import React, { FC } from 'react';
import '../../../base.css'

type DropdownTypes = {
    label: string;
}

export const Header: FC<DropdownTypes> = (props) => {
    const { label, children, ...rest } = props;

    return (
        <div className="flex gap-0">
            <div className="h-8 w-1 rounded-full primary-red-gradient" />
            <h2 className="uppercase font-semibold text-2xl px-4" {...rest}>
                {label ? label : 'This is Header'}
            </h2>
        </div>
    );
};