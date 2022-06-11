import React from 'react';
import { IconedInputStyled, InputStyled } from './styled';
export const IconedInput = ({
    icon,
    padding,
    type,
    placeholder,
    placeholderColor,
    color,
    fontSize,
    fontWeight,
    style,
    required,
    onChange,
    ...rest 
}) => (
    <IconedInputStyled padding={padding} style={{...style}} {...rest}>
        {icon ?? null}
        <InputStyled
            type={type}
            placeholder={placeholder}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onChange={onChange}
            required={required}
            />
    </IconedInputStyled>
);