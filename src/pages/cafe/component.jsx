import React, { useState } from 'react';
import { DatePicker } from './libs/datepicker';
import { CustomHeader } from './libs/datepicker/custom-header';
import { CustomTimeInput } from './libs/datepicker/custom-time-input';
import { CalendarContainer } from './libs/datepicker/calendar-container';
export const Cafe = () => {
    const min = new Date(); //min date
    const max = new Date(2022, 11, 31); //max date

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
  
    return (
        <div>
            <DatePicker
                    inline
                    dateFormat={"dd/MM/yyyy"}
                    showTimeInput
                    customTimeInput={<CustomTimeInput selectedTime={selectedTime} setSelectedTime={setSelectedTime} />}           
                    calendarContainer={CalendarContainer} 
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setSelectedTime(null);
                      console.log("date", date);
                    }}
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled }) => 
                        <CustomHeader
                            date={date}
                            decreaseMonth={decreaseMonth}
                            increaseMonth={increaseMonth}
                            prevMonthButtonDisabled={prevMonthButtonDisabled}
                            nextMonthButtonDisabled={nextMonthButtonDisabled}
                        />}
                    minDate={min}
                    maxDate={max}
                    required/>
        </div>
    )
};