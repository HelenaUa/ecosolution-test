// import css from './Header.styled';
import React from 'react';
import { HeaderBox, Logo, BtnHeader, BtnMenu } from './Header.styled';

export const Header = () => {
    return (
        <HeaderBox>
            <Logo />
            <BtnMenu />
            <BtnHeader>Get in touch</BtnHeader>
        </HeaderBox>
    )
}