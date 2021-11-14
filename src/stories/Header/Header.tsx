import React, { FC } from 'react';
import '../../base.css'

type HeaderTypes = {
  borderColor: string;
}

export const Header:FC<HeaderTypes> = (props) => {
    const { borderColor,children, ...rest } = props;

    return (
        <h2 style={{borderLeftColor:borderColor}} className="uppercase font-semibold text-2xl border-l-4 px-4" {...rest}>
            {props.children}
        </h2>
    );
};