import React, { FC } from 'react';
import '../../../base.css'

type TableTypes = {
  THeadData: {
    label: string;
    align: "text-left" | "text-right" | "text-center"
  }[];
  columnWidth: string;
}

export const Table: FC<TableTypes> = (props) => {

  return (
    <div className="bg-white p-4 shadow-sm rounded-md relative">
      <table className="table__container w-full whitespace-nowrap">
        <thead className="sticky top-0 bg-white shadow-sm ">
          <tr className="table__head h-auto text-sm leading-none bg-white text-gray-300 focus:outline-none" tabIndex={0}>
            {props.THeadData.map((head, index) => {
              return (
                <th key={index} className={`font-medium text-md p-2 uppercase ${props.columnWidth} ${head.align}`}>{head.label}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className="capitalize">
          {props.children}
        </tbody>
      </table>
      <div className="flex justify-center items-center">
        <hr className="h-0.5 border-none w-1/3 bg-gray-100 rounded-full mt-4 mb-2" />
      </div>
    </div>
  );
};