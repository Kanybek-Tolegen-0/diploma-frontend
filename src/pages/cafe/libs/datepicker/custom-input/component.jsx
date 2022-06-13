import React, { forwardRef } from "react";
import { ButtonStyled } from "./styled";

export const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <ButtonStyled onClick={onClick} ref={ref}>{value}</ButtonStyled>
));
