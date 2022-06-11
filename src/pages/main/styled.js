import styled from '@emotion/styled';
import { colors } from '../../assets';

export const H1Styled = styled.h1`
    color: ${colors.Primary.DARK_ORANGE};
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    font-variant: small-caps;
`;

export const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 369px;
    gap: 36px;
`;