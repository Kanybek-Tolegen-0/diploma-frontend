import React, { useState } from 'react';
import image from './../../assets/images/authorization.png';
import { icons } from './../../assets';
import { Button, IconedInput } from './../../components';
import { H1Styled, MainWrapper, FormStyled, InputWrapper } from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Authorization = () => {
    const [username, onUsernameChange] = useState('');
    const [password, onPasswordChange] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    
    const handleUsernameChange = (e) => (onUsernameChange(e.target.value));
    const handlePasswordChange = (e) => (onPasswordChange(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/token/', {
            username: username,
            password: password
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(result => {
            localStorage.setItem('access_token', result.data.access);
            localStorage.setItem('refresh_token', result.data.refresh);
          }).catch(error => {
            setLoginError('Неправильный логин/пароль');
        });
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
                { loginError }
                <Button
                    style={{ minWidth: '300px' }}
                    type={'submit'}>
                        Войти
                </Button>
            </FormStyled>        
        </MainWrapper>
    );
}