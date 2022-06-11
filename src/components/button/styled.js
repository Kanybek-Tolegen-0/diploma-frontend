import styled from '@emotion/styled';
import { colors } from '../../../src/assets';

export const ButtonStyled = styled.button`
    ${({color, padding, backgroundColor, borderRadius, fontSize, lineHeight, fontWeight}) => (
        `color: ${color || colors.Basic.WHITE};
        background: ${backgroundColor || colors.Primary.FIERY_ROSE};
        font-size: ${fontSize || 20}px;
        line-height: ${lineHeight || 24}px;
        font-weight: ${fontWeight || 500};
        padding: ${padding || '12px 44px'};
        border-radius: ${borderRadius || '8px'};
        outline: none;
        border: none;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
            transition: 0.2s linear all;
        }
        &:disabled {
            background: ${colors.Basic.GREY};
            color: ${colors.Basic.LIGHT_GREY};
        }
    `)}
`;