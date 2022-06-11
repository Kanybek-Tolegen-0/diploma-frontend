import React, { useState } from 'react';
import image from './../../assets/images/authorization.png';
import { IconedInput } from './libs/iconed-input/component';
import { icons } from './../../assets';
import { Button } from './../../components';
import { H1Styled } from './styled';

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
        <div style={{ display: 'flex', gap: '128px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '32px'}}>
            <img src={image} alt={'authorization'}/>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '36px', alignItems: 'center'}}>
                <H1Styled>Войти</H1Styled>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
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
                </div>
                <Button style={{ minWidth: '300px' }} type={'submit'}>Войти</Button>
            </form>        
        </div>
    );
}