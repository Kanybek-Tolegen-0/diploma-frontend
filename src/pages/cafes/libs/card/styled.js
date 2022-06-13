import styled from '@emotion/styled';
import { colors } from '../../../../assets';

export const CardStyled = styled.div`
    min-width: 256px;
    border-radius: 24px;
    box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transition: 0.2s linear all;
    }
`;

export const ImageWrapperStyled = styled.div`
    min-width: 256px;
    min-height: 303px;
    border-radius: 24px 24px 0px 0px;
`;

export const CafeInfoContainer = styled.div`
    border-radius: 0px 0px 24px 24px;
    padding: 16px 16px 36px 16px;
`;

export const H1Styled = styled.h1`
    color: ${colors.Primary.FIERY_ROSE};
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    font-variant: small-caps;
`;

export const PStyled = styled.p`
    color: ${colors.Basic.BLACK};
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top: 16px;
`;