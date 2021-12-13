/* eslint-disable import/no-anonymous-default-export */
import moment from "moment-timezone";
import React from "react";
import { useState } from "react";
import { textSizeType } from "../../../constant-enum-types";
import { DatePicker } from "./DatePicker";


export default {
  title: "Component/DatePicker",
  component: DatePicker,
};

export const PlainDatePicker = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <DatePicker
      name="date"
      helper=""
      label="date"
      isRequired={true}
      dateValue={dateValue}
      setDateValue={(date: Date) => setDateValue(date)}
    />
  )
}
