import React from 'react';
import { Button } from './../../components';
import { H1Styled, MainWrapper, InfoWrapper } from './styled';
import image from './../../assets/images/main_page_image.png'

export const Main = () => (
    <MainWrapper>
        <InfoWrapper>
            <H1Styled>заказывайте места в любой кафешке<br/>города алматы</H1Styled>
            <Button
                padding={'20px 24px'}
                fontWeight={600}
                style={{
                        maxWidth: '256px',
                        fontVariant: 'small-caps'
                }}>
                    перейти к кафешкам
            </Button>
        </InfoWrapper>
        <img src={image} alt={'Изоброжение для главного экрана'} />
    </MainWrapper>
);