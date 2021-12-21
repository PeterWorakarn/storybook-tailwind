import moment, { Moment } from 'moment-timezone';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { HiCalendar, HiChevronLeft, HiChevronRight, HiOutlineCalendar } from 'react-icons/hi';
import '../../../base.css'

type DatePickerTypes = {
  name: string;
  helper: string;
  label: string;
  isRequired: boolean;
  dateValue: Moment;
  setDateValue: (date: Moment) => void;
  onAction: (date: Moment) => void;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
enum MONTHS {
  'January' = 'January',
  'February' = 'February',
  'March' = 'March',
  'April' = 'April',
  'May' = 'May',
  'June' = 'June',
  'July' = 'July',
  'August' = 'August',
  'September' = 'September',
  'October' = 'October',
  'November' = 'November',
  'December' = 'December'
}

const monthArr = Object.values(MONTHS)

export const DatePicker: FC<DatePickerTypes> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [month, setMonth] = useState<MONTHS>(MONTHS[moment(props.dateValue).format('MMMM') as MONTHS])
  const [year, setYear] = useState(moment(props.dateValue).format('YYYY'))
  const [blankDay, setBlankDay] = useState(moment(props.dateValue).startOf('month').format('ddd'))
  const [daysInMonth, setDaysInMonth] = useState<number>(moment(props.dateValue).daysInMonth());

  useEffect(() => {
    // recalculate days in month
    setDaysInMonth(moment(`${month} ${year}`).daysInMonth())
    // recalculate blankDays in month
    setBlankDay(moment(`${month} ${year}`).startOf('month').format('ddd'))
  }, [month, year])

  const onPrevMonth = (currentMonth: MONTHS) => {
    // find current position
    const currentPos = monthArr.indexOf(currentMonth)
    if (currentPos !== 0) {
      setMonth(monthArr[currentPos - 1])
    } else {
      // do something to change new year
      setYear(`${parseInt(year) - 1}`)
      // do something to reset month
      setMonth(monthArr[11])
    }
    // 
  }
  const onNextMonth = (currentMonth: MONTHS) => {
    const currentPos = monthArr.indexOf(currentMonth)
    if (currentPos !== 11) {
      setMonth(monthArr[currentPos + 1])
    } else {
      // do something to change new year
      setYear(`${parseInt(year) + 1}`)
      // do something to reset month
      setMonth(monthArr[0])
    }
  }
  const onSelectDate = (currentDay: number, currentMonth: MONTHS, currentYear: string) => {
    const selectDate = moment(`${currentDay} ${currentMonth} ${currentYear}`, 'DD MMM YYYY')
    // console.log(moment(selectDate).format('DD MMM YYYY'))
    // console.log(moment(selectDate).toDate())
    props.setDateValue(selectDate)
    props.onAction(selectDate)
  }

  const isCurrentDate = (day: number) => {
    if (moment(props.dateValue).format('D') === `${day}` && moment(props.dateValue).format('MMMM') === month && moment(props.dateValue).format('YYYY') === year) {
      return true;
    }
    return false;
  }

  // onClickOutside condition
  const onClickOutside = (value: boolean) => {
    setIsOpen(value)
  }

  return (
    <>
      <div onClick={() => onClickOutside(false)} className="datepicker__backdrop" />
      <div className="input relative z-20">
        <div className="label__container">
          <label className="label" htmlFor={`${props.name ? props.name : 'date'}`}>
            <p>{props.label ? props.label : 'date'}{props.isRequired && <i className="not-italic text-red-500">*</i>}</p>
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
            <div className="flex justify-start items-center gap-2 w-3/4">
              <p className="datepicker__month">{month}</p>
              <p className="datepicker__year">{year}</p>
            </div>
            <div className="flex justify-center items-end gap-1 w-1/4">
              <HiChevronLeft onClick={() => onPrevMonth(month)} className="datepicker__icon" />
              <HiChevronRight onClick={() => onNextMonth(month)} className="datepicker__icon" />
            </div>
          </div>
          <div className="datepicker__days -mx-1">
            {DAYS.map(day => {
              return <span key={day} style={{ width: '14.18%' }} className="datepicker__day ">{day}</span>
            })}
          </div>
          <div className="datepicker__dates">
            {Array.from({ length: DAYS.indexOf(blankDay)}, (_, i) => i + 1).map((blank) => {
              return <span key={blank} className="datepicker__blank-date" style={{ width: '14.18%' }} />
            })}
            {/* Calculate how many days of that months  */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((dayInMonth) => {
              return <span key={dayInMonth} onClick={() => onSelectDate(dayInMonth, month, year)} className={`datepicker__date ${isCurrentDate(dayInMonth) ? '--active' : '--inactive'}`} style={{ width: '14.18%' }}>{dayInMonth}</span>
            })}
          </div>
        </div>
      </div>
    </>
  );
};