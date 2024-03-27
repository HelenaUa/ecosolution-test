import styled from 'styled-components';
import { Link } from 'react-scroll';
import menu from 'images/header/menu.png';
import logo from 'images/header/logo.png';


export const HeaderBox = styled.header`
position: fixed;
z-index: 1000;
top: 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
min-width: 360px;
background-color: #F3F5FA;
// padding: 36px 20px 36px 0px;
padding: 36px 0;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
    padding: 36px 24px 36px 24px;
}

@media screen and (min-width: 1280px) {
    justify-content: space-between;
    padding: 36px 24px 36px 24px;
}`


export const Logo = styled.a`
display: flex;
width: 269px;
height: 40px;
background-image: url('${logo}');
background-repeat: no-repeat;
margin-right: 13px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 0px;
}

@media screen and (min-width: 1280px) {
    margin-right: 0px;
}`


export const BtnMenu = styled.button`
width: 39px;
height: 39px;
background-image: url('${menu}');
background-repeat: no-repeat;
background-color: #DCEFD8;
display: inline-block;
align-items: center;
border: none;
border-radius: 50%;
background-position: center;
justify-content: center;
cursor: pointer;

&:hover,
&:focus {
    background-color: #97D28B;
  }
  
@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 30%;
}

@media screen and (min-width: 1280px) {
    margin-left: 56%;
}`


export const BtnHeader = styled(Link)`
display: none;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    color: #173D33;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    background-color: #97D28B;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin-right: 60px;
    width: 140px;
    height: 39px;
    border-radius: 500px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover,
    &:focus {
        background-color: #DCEFD8;
    }
}

@media screen and (min-width: 1280px) {
    display: inline-flex;
    color: #173D33;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    background-color: #97D28B;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin-right: 60px;
    width: 140px;
    height: 39px;
    border-radius: 500px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover,
    &:focus {
        background-color: #DCEFD8;
    }
}`


export const Backdrop =styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(23, 61, 51, 0.25);
backdrop-filter: blur(2px);
z-index: 4;`