import styled from '@emotion/styled';
import { colors } from '../../assets';

export const H1Styled = styled.h1`
    color: ${colors.Primary.FIERY_ROSE};
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
`;

export const MainWrapper = styled.div`
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 128px;
`;

export const FormStyled = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;