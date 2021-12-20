/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import moment from "moment-timezone";
import React from "react";
import { useState } from "react";
import { textSizeType } from "../../../constant-enum-types";
import { DatePicker } from "./DatePicker";


export default {
  title: "Component/Input",
  component: DatePicker,
};

export const DatePickerInput = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <DatePicker
      name="date"
      helper=""
      label="date"
      isRequired={true}
      dateValue={dateValue}
      onAction={action('Select Date')}
      setDateValue={(date: Date) => setDateValue(date)}
    />
  )
}
