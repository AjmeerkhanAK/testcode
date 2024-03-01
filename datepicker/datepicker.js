import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
const Customedatepicker = ({
    defaultDate= new Date(),
    disableFutureDates=false,
    disablepastDates=false,
    hideLeftSidebar=false,
}) => {
const [startdate,setStartDate] =useState(defaultDate)
const isDateDisable =(date)=>{
    if(disableFutureDates && date >new Date())
{
    return true;
}
if (disablepastDates && date < new Date()) {
    return true;
}
return false
}
  return (
    <div>
        <DatePicker selected = {startdate}
        onChange={(date)=>setStartDate(date)}
        filterDate={isDateDisable}
        customInput={<button>{changeButtonName}</button>}
        popperClassName='react-datepicker-left'
        calendarClassName='custom-calendar'
        >
        </DatePicker>
           </div>
  )
}

export default Customedatepicker