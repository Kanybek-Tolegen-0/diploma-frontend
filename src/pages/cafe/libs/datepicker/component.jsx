import React from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from './custom-input';

export const DatePicker = ({ ...rest }) => {
    registerLocale('ru', ru);
    return (
        <ReactDatePicker
            locale={'ru'}
            customInput={<CustomInput />}
            {...rest} /> 
    )
};