
import React from 'react';
import { icons } from '../../../../../assets';
import { ButtonStyled, BoxStyled } from './styled';
import { months } from './../mocks/months';

export const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }) => {
    return (
      <div
        style={{
          display: "flex",
          minWidth: '400px',
          background: 'none',
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: '32px', justifyContent: 'space-between'}}>
          <ButtonStyled
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {icons.leftArrow}
          </ButtonStyled>
          <div style={{display: 'flex', gap: '8px'}}>
            <BoxStyled>{months[new Date(date).getMonth()]}</BoxStyled>
            <BoxStyled>{new Date(date).getFullYear()}</BoxStyled>
          </div>
          <ButtonStyled
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {icons.rightArrow}
          </ButtonStyled>
        </div>
      </div>
    );}