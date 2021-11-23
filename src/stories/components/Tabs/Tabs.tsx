import React, { FC, useState } from 'react';
import { AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import '../../../base.css';

type TabsTypes = {
  tabItems: {
    name: string;
    icon: JSX.Element;
  }[],
  onSelect: (value:string) => void
}

export const Tabs: FC<TabsTypes> = (props) => {
  const [currentTab, setCurrentTab] = useState(props.tabItems[0].name);

  const onSelectHandler = (value:string) => {
    setCurrentTab(value);
    props.onSelect(value);
  }

  return (
    
      <div className="bg-gray-200 text-xs text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
        {props.tabItems.map((item, index) => {
          return (
            <button key={index} onClick={() => onSelectHandler(item.name)} type="button" className={`${currentTab === item.name ? 'rounded-full bg-white text-red-500' : 'text-gray-500'} gap-1 inline-flex items-center transition-colors duration-50 ease-in focus:outline-none hover:text-red-500 focus:text-red-500 rounded-full px-2 sm:px-4 py-2`}>
              {item.icon}
              <span className={`${currentTab === item.name ? 'font-semibold' : 'font-normal'} text-md`}>{item.name}</span>
            </button>
          )
        })}
      </div>
  );
};