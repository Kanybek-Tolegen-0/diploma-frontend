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
    iconPosition = 'left',
    required,
    onChange,
    ...rest 
}) => (
    <IconedInputStyled padding={padding} style={{ ...style }} {...rest}>
        {(icon && iconPosition === 'left') ? icon : null}
        <InputStyled
            color={color}
            type={type}
            placeholder={placeholder}
            placeholderColor={placeholderColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onChange={onChange}
            required={required}
            style={{ flex: iconPosition === 'right' ? 1 : 'unset' }}
            />
        {(icon && iconPosition === 'right') ? icon : null }
    </IconedInputStyled>
);