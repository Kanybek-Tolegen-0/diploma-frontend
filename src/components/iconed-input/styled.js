import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../assets';

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
    ${({ color, placeholderColor, fontSize, fontWeight, lineHeight, fontVariant
     }) => css`
        width: 100%;
        border: none;
        outline: none;
        color: ${color || colors.Primary.FIERY_ROSE};
        font-size: ${fontSize || '14px'};
        line-height: ${lineHeight || '20px'};
        font-weight: ${fontWeight || 500};
        &::placeholder {
            color: ${placeholderColor || colors.Basic.GREY};
            transition: 0.2s linear all;
        }
    `}
`;