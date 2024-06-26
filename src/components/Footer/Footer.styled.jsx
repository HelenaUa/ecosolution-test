import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from 'images/header/logo.png';
import arrow from 'images/footer/arrow-right.png';


export const FooterBox = styled.footer`
display: flex;

flex-direction: column;
padding: 20px 10px;
background-color: #F3F5FA;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
    padding: 36px 38px 36px 34px;
}

@media screen and (min-width: 1280px) {
    justify-content: space-between;
    padding: 36px 70px 36px 40px;
}`


export const WrapperLogoFooter = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 24px;
position: relative;

&::before {
    content: '';
    display: block; 
    width: 78%; 
    height: 1px; 
    background-color: #97D28B;
    position: absolute;
    top: -30px; 
    left: 50px; 
    border-radius: 50%; 
} 

@media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    gap: 97px;
    flex-wrap: nowrap;
    &::before {
        width: 99%; 
        top: -28px; 
        left: 6px;
    }
}
    
@media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 400px;
    flex-wrap: nowrap;
    &::before {
        width: 99%; 
        top: -22px; 
        left: 5px;
    }
}`


export const LogoFooter = styled.div`
width: 269px;
height: 40px;
background-image: url('${logo}');
margin-left: 10%;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 1%;
}

@media screen and (min-width: 1280px) {
    margin-left: 1%;
}`


export const SocialFooter = styled.div`
@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 23%;
}

@media screen and (min-width: 1280px) {
    margin-right: 8%;
}`


export const BtnFooter = styled(Link)`
width: 32px;
height: 32px;
background-image: url('${arrow}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
border: none;
background-color: #97D28B;
display: inline-block;
position: absolute;
top: 4px; 
left: 80%;
cursor: pointer;

&:hover,
&:focus {
    background-color: #DCEFD8;
  }

@media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 4px; 
    left: 95%;
}

@media screen and (min-width: 1280px) {
    top: 4px; 
    left: 97%;
}`


export const WrapperAddressFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    justify-content: space-between;
}

@media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
}`


export const LinkFooter = styled.a`
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
margin-bottom: 16px;

&:hover,
&:focus {
    color: #97D28B;
  }`