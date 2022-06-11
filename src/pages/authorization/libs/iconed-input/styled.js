import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from './../../../../assets';

export const IconedInputStyled = styled.div`
    ${({ padding, borderRadius, border}) => css`
        display: flex;
        align-items: center;
        gap: 12px;
        padding: ${padding || '16px 12px'};
        border-radius: ${borderRadius || '8px'};
        border: ${border || `2px solid ${colors.Primary.FIERY_ROSE}`};
    `}
`;

export const InputStyled = styled.input`
    ${({ color, placeholderColor, fontSize, fontWeight, lineHeight
     }) => css`
        border: none;
        outline: none;
        text-transform: uppercase;
        color: ${colors.Primary.FIERY_ROSE || color};
        font-size: ${fontSize || '14px'};
        line-height: ${lineHeight || '20px'};
        &::placeholder {
            color: ${colors.Basic.GREY}
        }
    `}
`;