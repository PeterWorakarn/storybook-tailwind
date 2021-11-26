/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HiHashtag } from 'react-icons/hi';
import { Table } from "./Table";
import { SortedTable } from "./SortedTable";
import { TableItem } from "./TableItem";


export default {
  title: "Component/Table",
  component: Table, SortedTable,
  argTypes: {
    columnWidth: {
      name: 'Width',
      defaultValue: 'w-28',
      options: ['w-auto', 'w-20', 'w-28', 'w-32'],
      control: { type: 'select' }
    }
  }
};
const THeadValue = [
  {
    label: 'ID',
    align: 'text-left'
  },
  {
    label: 'User',
    align: 'text-left'
  },
  {
    label: 'Status',
    align: 'text-center'
  },
  {
    label: 'Credit',
    align: 'text-right'
  },
]
const THeadIconValue = [
  {
    label: 'ID',
    align: 'justify-start'
  },
  {
    label: 'User',
    align: 'justify-start'
  },
  {
    label: 'Status',
    align: 'justify-center'
  },
  {
    label: 'Credit',
    align: 'justify-end'
  },
]

const TBodyData = [
  {
    'ID': 'x0625',
    'User': 'Roselyn',
    'Status': 'done',
    'Credit': 1000
  },
  {
    'ID': 'y0625',
    'User': 'Roselyn',
    'Status': 'done',
    'Credit': 1000
  },
  {
    'ID': 'z0625',
    'User': 'Roselyn',
    'Status': 'pend',
    'Credit': 90
  },
  {
    'ID': 'z0626',
    'User': 'Roselyn',
    'Status': 'pend',
    'Credit': 90
  },
  {
    'ID': 'z0627',
    'User': 'Roselyn',
    'Status': 'pend',
    'Credit': 90
  },
  {
    'ID': 'z0628',
    'User': 'Roselyn',
    'Status': 'pend',
    'Credit': 90
  },
  {
    'ID': 'z0629',
    'User': 'Naomie',
    'Status': 'pend',
    'Credit': 90
  },
  {
    'ID': 'z0630',
    'User': 'Lakin',
    'Status': 'pend',
    'Credit': 90
  },
]
export const CustomTable = (args: any) => {
  return (
    <Table THeadData={THeadValue} {...args}>
      {TBodyData.map((item, index) => {
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

    </Table>
  )
}

export const CustomSortedTable = (args: any) => {
  return (
    <SortedTable THeadData={THeadIconValue} {...args} TBodyData={TBodyData} />
  )
}