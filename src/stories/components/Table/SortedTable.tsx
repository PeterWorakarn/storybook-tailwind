import React, { FC, useState } from 'react';
import '../../../base.css'
import { MdUnfoldMore } from 'react-icons/md';
import { TableItem } from './TableItem';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';

type SortedTableTypes = {
  THeadData: {
    label: string;
    align: "text-left" | "text-right" | "text-center"
  }[];
  columnWidth: string;
  TBodyData: {
    ID: string;
    User: string;
    Status: string;
    Credit: number;
  }[]
}

export const SortedTable: FC<SortedTableTypes> = (props) => {
  const [sortConfig, setSortConfig] = useState<{
    key: 'ID' | 'User' | 'Status' | 'Credit',
    direction: 'descending' | 'ascending'
  }>({ key: 'ID', direction: 'descending' })

  let sortedData = [...props.TBodyData];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key: 'ID' | 'User' | 'Status' | 'Credit') => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return (
    <div className="bg-white p-4 shadow-sm rounded-md relative">
      <table className="table__container w-full whitespace-nowrap">
        <thead className="sticky top-0 bg-white shadow-sm ">
          <tr className="table__head h-auto text-sm leading-none bg-white text-gray-300 focus:outline-none" tabIndex={0}>
            {props.THeadData.map((head, index) => {
              return (
                <th onClick={() => requestSort(head.label as 'ID' | 'User' | 'Status' | 'Credit')} key={index} className={`cursor-pointer select-none font-medium text-md p-2 uppercase ${props.columnWidth}`}>
                  <i className={`flex gap-1 items-center ${sortConfig.key === head.label && 'text-black'} ${head.align} not-italic`}>
                    {sortConfig.key === head.label && sortConfig.direction === 'ascending' && (
                      <HiSortAscending />
                    )}
                    {sortConfig.key === head.label && sortConfig.direction === 'descending' && (
                      <HiSortDescending />
                    )}
                    {sortConfig.key !== head.label && <HiSortDescending />}

                    {head.label}
                  </i>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="capitalize">
          {sortedData.map((item, index) => {
            return (
              <TableItem key={index}>
                <td className='font-medium text-sm px-2 pt-2 pb-3 text-gray-800'>
                  {item.ID}
                </td>
                <td className='font-medium text-sm px-2 pt-2 pb-3 text-gray-800'>
                  {item.User}
                </td>
                <td className='font-medium text-xs px-2 pt-3 pb-3 text-center'>
                  <span className={`${item.Status === 'done' ? 'bg-red-300' : 'bg-indigo-300'} w-auto uppercase  py-0.5 px-2.5  text-white rounded-full`}>
                    {item.Status}
                  </span>
                </td>
                <td className='font-medium text-sm px-2 pt-2 pb-3 text-right text-gray-800'>
                  {item.Credit.toFixed(2)} $
                </td>
              </TableItem>
            )
          })}
        </tbody>
      </table>
      <div className="flex justify-center items-center">
        <hr className="h-0.5 border-none w-1/3 bg-gray-100 rounded-full mt-4 mb-2" />
      </div>
    </div>
  );
};