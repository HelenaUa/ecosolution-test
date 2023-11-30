import styled from 'styled-components';
import menu from 'images/header/menu.png';
import logo from 'images/header/logo.png';


export const HeaderBox = styled.section`
position: fixed;
top: 0;
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
background-color: #F3F5FA;
padding: 20px 10px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
}

@media screen and (min-width: 769px) {
    justify-content: center;
}`


export const Logo = styled.div`
width: 269px;
height: 40px;
background-image: url('${logo}')`


export const BtnMenu = styled.div`
width: 40px;
height: 39px;
background-image: url('${menu}');
cursor: pointer;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: 36%;
}

@media screen and (min-width: 769px) {
    margin-left: 36%;
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
    margin-left: 2%;
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
    margin-left: 2%;
    width: 140px;
    height: 39px;
    border-radius: 500px;
    border: none;
    cursor: pointer;
}`