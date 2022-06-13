import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from './custom-input';

export const DatePicker = ({ ...rest }) => {      
    return (
        <ReactDatePicker customInput={<CustomInput />} {...rest} /> 
    )
};