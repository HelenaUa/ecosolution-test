import styled from 'styled-components';
import menu from 'images/header/menu.png';
import logo from 'images/header/logo.png';


export const HeaderBox = styled.section`
position: fixed;
z-index: 1000;
top: 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
background-color: #F3F5FA;
padding: 36px 20px 36px 0px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: space-between;
    padding: 36px 24px 36px 24px;
}

@media screen and (min-width: 769px) {
    justify-content: space-between;
    padding: 36px 24px 36px 24px;
}`


export const Logo = styled.div`
display: flex;
width: 269px;
height: 40px;
background-image: url('${logo}');
background-repeat: no-repeat;
margin-right: 13px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 0px;
}

@media screen and (min-width: 769px) {
    margin-right: 0px;
}`


export const BtnMenu = styled.div`
width: 39px;
height: 39px;
background-image: url('${menu}');
background-repeat: no-repeat;
background-color: #DCEFD8;
display: flex;
align-items: center;
border-radius: 50%;
background-position: center;
justify-content: center;
cursor: pointer;

&:hover {
    background-color: #97D28B;
  }
  
@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: 30%;
}

@media screen and (min-width: 769px) {
    margin-left: 56%;
}`


export const BtnHeader = styled.button`
display: none;

@media screen and (min-width: 481px) and (max-width: 768px) {
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
}

@media screen and (min-width: 769px) {
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