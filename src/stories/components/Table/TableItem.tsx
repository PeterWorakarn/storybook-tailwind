import React, { FC } from 'react';
import '../../../base.css'

type TableItemTypes = {

}

export const TableItem: FC<TableItemTypes> = (props) => {
  return (
    <tr tabIndex={0} className='tr_body h-10 text-sm leading-none text-gray-800 bg-white border-b border-gray-100 focus:outline-non'>
      {props.children}
    </tr>
  );
};