// import css from './Header.styled';
import React from 'react';
import { HeaderBox, Logo, BtnHeader, BtnMenu } from './Header.styled';

export const Header = () => {
    return (
        <HeaderBox>
            <Logo />
            <BtnMenu />
            <BtnHeader>Get in touch<div style={{
                                            width: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000000',
                                            marginLeft: '12px'}}></div>
            </BtnHeader>
        </HeaderBox>
    )
}