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
    
      <div className="tabs__container">
        {props.tabItems.map((item, index) => {
          return (
            <button key={index} onClick={() => onSelectHandler(item.name)} type="button" className={`${currentTab === item.name ? 'rounded-full bg-white text-red-500' : 'text-gray-500'} tab__container `}>
              {item.icon}
              <span className={`tab ${currentTab === item.name ? 'font-semibold' : 'font-normal'}`}>{item.name}</span>
            </button>
          )
        })}
      </div>
  );
};