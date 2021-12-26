import moment, { Moment } from 'moment-timezone';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { HiCalendar, HiChevronLeft, HiChevronRight, HiOutlineCalendar } from 'react-icons/hi';
import '../../../base.css'
import { textHTMLtag, textSizeType } from '../../../constant-enum-types';
import { Typo } from '../Typo/Typo';

type DatePickerTypes = {
  name: string;
  helper: string;
  label: string;
  isRequired: boolean;
  dateValue: Moment;
  setDateValue: (date: Moment) => void;
  onAction: (date: Moment) => void;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // 0 - 6

export const DatePicker: FC<DatePickerTypes> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState<moment.Moment>(props.dateValue);

  // onClickOutside condition
  const onClickOutside = (value: boolean) => {
    setIsOpen(value)
  }

  const onSelectDate = (selectDate: number, date: moment.Moment) => {
    props.setDateValue(moment(date).set("date", selectDate))
    props.onAction(moment(date).set("date", selectDate))
  }

  const onPrevMonth = (currentDate: moment.Moment) => {
    setTempDate(moment(currentDate).subtract(1, 'months'))
  }
  const onNextMonth = (currentDate: moment.Moment) => {
    setTempDate(moment(currentDate).add(1, 'months'))
  }

  return (
    <>
      <div onClick={() => onClickOutside(false)} className="datepicker__backdrop" />
      <div className="input relative z-20">
        <div className="label__container">
          <label className="label" htmlFor={`${props.name ? props.name : 'date'}`}>
            <Typo variant={textHTMLtag.P} size={textSizeType.SNAIL}>{props.label ? props.label : 'date'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</Typo>
          </label>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className="input__field">
          <input
            className="input--datepicker"
            id={props.name ? props.name : 'date'}
            name={props.name ? props.name : 'date'}
            value={moment(props.dateValue).format('DD MMM YYYY') as string}
            type="text"
            // onBlur={() => onClickOutside(false)}
            readOnly
          />
          <i className="input--date-icon">
            <HiOutlineCalendar className="w-4 h-4 text-gray-400" />
          </i>
        </div>
        <div className={`${isOpen ? 'opacity-100' : 'opacity-0'} datepicker__container `}>
          <div className="datepicker__header">
            <div className="flex justify-start items-center gap-1 w-3/4">
              <Typo size={textSizeType.SNAIL} variant={textHTMLtag.P} className="datepicker__month">{moment(tempDate).format('MMMM')}</Typo>
              <Typo size={textSizeType.SNAIL} variant={textHTMLtag.P} className="datepicker__year">{moment(tempDate).format('YYYY')}</Typo>
            </div>
            <div className="flex justify-center items-end gap-1 w-1/4">
              <HiChevronLeft onClick={() => onPrevMonth(tempDate)} className="datepicker__icon" />
              <HiChevronRight onClick={() => onNextMonth(tempDate)} className="datepicker__icon" />
            </div>
          </div>
          <div className="datepicker__days -mx-1">
            {DAYS.map(day => {
              return <span key={day} style={{ width: '14.18%' }} className="datepicker__day ">{day}</span>
            })}
          </div>
          <div className="datepicker__dates">
            {Array.from({ length: parseInt(moment(tempDate).startOf('month').format('d')) }, (_, i) => i + 1).map((blank) => {
              return <span key={blank} className="datepicker__blank-date" style={{ width: '14.18%' }} />
            })}
            {Array.from({ length: moment(tempDate).daysInMonth() }, (_, i) => i + 1).map((dayInMonth) => {
              return <span key={dayInMonth} onClick={() => onSelectDate(dayInMonth, tempDate)} className={`datepicker__date ${moment(tempDate).set("date", dayInMonth).format('D MM YYYY') === moment(props.dateValue).format('D MM YYYY') ? '--active' : '--inactive'}`} style={{ width: '14.18%' }}>{dayInMonth}</span>
            })}
          </div>
        </div>
      </div>
    </>
  );
};