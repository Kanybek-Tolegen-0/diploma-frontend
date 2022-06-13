import React from 'react';
import { filterPassedTime } from './libs/filterPassedTime';
import { timeBoxes } from '../mocks/timeBoxes';
import { colors } from '../../../../../assets';

export const CustomTimeInput = ({ date, value, onChange, selectedTime, setSelectedTime }) => {
    const currentTimeBoxes = filterPassedTime(date, timeBoxes);
    
    return (
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '8px', rowGap: '16px'}}>
        {currentTimeBoxes.length > 1
          ? currentTimeBoxes.map((time) => (
              <button
                key={time.label}
                onClick={() => {
                  onChange(time.value);
                  setSelectedTime(time);
                }}
                style={{
                  padding: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  backgroundColor: selectedTime === time && colors.Primary.FIERY_ROSE,
                  color: selectedTime === time && "white"
                }}
              >
                {time.label}
              </button>
            ))
          : "There are no available dates for today, please select another day"}
      </div>
    );
}