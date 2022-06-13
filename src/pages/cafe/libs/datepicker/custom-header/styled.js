import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    background: #FE5F1E;
    box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transition: 0.2s linear all;
    }
`;

export const BoxStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    font-weight: 700;
    font-size: 24px;
    background: #FFFFFF;
    border: 2px solid #0047FF;
    box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
    border-radius: 6px;
`;