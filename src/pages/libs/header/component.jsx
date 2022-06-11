import React from 'react';
import { Button } from '../../../components';
import { colors } from './../../../assets';
import { H1Styled, H2Styled, PStyled } from './styled';
import logo from './../../../assets/images/logo.png';

export const Header = ({ isLogged }) => (
    <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={logo} alt={'logo'} />
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <H1Styled>RESTOCHOICE</H1Styled>
                <H2Styled>Booking online</H2Styled>
                <PStyled>Сервис онлайн бронирования столиков в ресторане</PStyled>
            </div>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
            <Button backgroundColor={colors.Primary.CHARLESTON_GREEN}>
                Аккаунт
            </Button>
            <Button backgroundColor={colors.Primary.DARK_ORANGE}>
                    Мои Брони
            </Button>
        </div>
    </div>
);