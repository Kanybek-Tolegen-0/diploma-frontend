import styled from "@emotion/styled";
import { colors } from './../../../../../assets';

export const ButtonStyled = styled.button`
    background: ${colors.Primary.FIERY_ROSE};
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: ${colors.Basic.WHITE};
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transition: 0.2s linear all;
    }
`
