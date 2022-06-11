import React, { useState } from 'react';
import image from './../../assets/images/authorization.png';
import { IconedInput } from './libs/iconed-input/component';
import { icons } from './../../assets';
import { Button } from './../../components';
import { H1Styled, MainWrapper, FormStyled, InputWrapper } from './styled';

export const Authorization = () => {
    const [username, onUsernameChange] = useState('');
    const [password, onPasswordChange] = useState('');

    const handleUsernameChange = (e) => (onUsernameChange(e.target.value));
    const handlePasswordChange = (e) => (onPasswordChange(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <MainWrapper>
            <img src={image} alt={'authorization'}/>
            <FormStyled onSubmit={handleSubmit}>
                <H1Styled>Войти</H1Styled>
                <InputWrapper>
                    <IconedInput
                        style={{ minWidth: '300px' }}
                        value={username}
                        icon={icons.user}
                        type={'username'}
                        placeholder={'логин'}
                        onChange={handleUsernameChange}
                        required
                        />

                    <IconedInput
                        style={{ minWidth: '300px' }}
                        value={password}
                        icon={icons.password}
                        type={'password'}
                        placeholder={'пароль'}
                        onChange={handlePasswordChange}
                        required
                        />
                </InputWrapper>
                <Button
                    style={{ minWidth: '300px' }}
                    type={'submit'}>
                        Войти
                </Button>
            </FormStyled>        
        </MainWrapper>
    );
}