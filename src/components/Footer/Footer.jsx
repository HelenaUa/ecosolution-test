import React from 'react';
import {FooterBox, WrapperLogoFooter, LogoFooter, BtnFooter, WrapperAddressFooter, LinkFooter} from './Footer.styled';
import facebook from 'images/contact/facebook.png';
import instagram from 'images/contact/instagram.png';


export const Footer = () => {
    return (
        <FooterBox>
            <WrapperLogoFooter>
                <LogoFooter />
                <div style={{display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', alignItems: 'center',marginBottom: '24px'}}> 
                    <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${facebook}`} alt='logo facebook'/>
                    <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${instagram}`} alt='logo instagram'/>
                </div>
                <BtnFooter></BtnFooter>
            </WrapperLogoFooter>
            <WrapperAddressFooter>
                <LinkFooter href="https://goo.gl/maps/U55JzRCZsnBUYqKL8" >
                            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </LinkFooter>
                <LinkFooter href="mailto:office@ecosolution.com">office@ecosolution.com</LinkFooter>
                <LinkFooter>ecosolution © 2023</LinkFooter>
            </WrapperAddressFooter>
        </FooterBox>
    )
}