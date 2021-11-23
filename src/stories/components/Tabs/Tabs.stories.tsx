/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Tabs } from "./Tabs";
import { action } from "@storybook/addon-actions";
import { AiFillClockCircle, AiFillCustomerService, AiFillPieChart} from "react-icons/ai";


export default {
  title: "Component/Tabs",
  component: Tabs,
};

export const Tab = () => {
  const tabsValue = [
    {
      name: 'User',
      icon: <AiFillCustomerService className="w-4 h-4 fill-current" />
    },
    {
      name: 'Time',
      icon: <AiFillClockCircle className="w-4 h-4 fill-current" />
    },
    {
      name: 'Data',
      icon: <AiFillPieChart className="w-4 h-4 fill-current" />
    },
  ]
  return (
    <Tabs
      onSelect={action('clicked')}
      tabItems={tabsValue}
    />
  )
};
