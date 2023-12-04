import styled from 'styled-components';
import arrow from 'images/main/arrow-right.png';


export const MainBox = styled.section`
display: flex;
flex-direction: column;
padding: 206px 10px 28px 10px;
justify-content: center;
align-items: center;

@media screen and (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 80px;
}

@media screen and (min-width: 769px) {
    padding-bottom: 100px;
}`


export const WrapperTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 24px;
    padding-left: 26px;
    width: 100%;
}

@media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 24px;
    padding-left: 26px;
    width: 100%;
}`


export const WrapperText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: block;
    width: 320px;
}

@media screen and (min-width: 769px) {
    display: block;
    width: 420px;
}`


export const TitleMain = styled.h1`
color: #173D33;
font-family: Oswald;
font-size: 36px;
font-weight: 400;
line-height: 36px;
text-transform: uppercase;
width: 320px;
margin-bottom: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    font-size: 48px;
    line-height: 48px; 
    width: 301px;
    margin-right: 10%;
}

@media screen and (min-width: 769px) {
    display: flex;
    align-items: flex-start;
    font-size: 64px;
    line-height: 64px; 
    width: 485px;
    margin-right: 20%;
}`


export const TextMain = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
width: 69%;
margin-bottom: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 105%;
    margin-bottom: 43px;
}

@media screen and (min-width: 769px) {
    width: 96%;
    margin-bottom: 43px;
}`


export const BtnMain = styled.button`
display: flex;
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.64px;
width: 141px;
height: 39px;
border-radius: 500px;
border: 1px solid #97D28B;
padding-left: 13px;
margin-bottom: 48px;
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
cursor: pointer;

&:hover,
&:focus{
    background-color: lightgray;
    border: 1px solid #97D28B;`


export const Arrow = styled.div`
width: 32px;
height: 32px;
background-image: url('${arrow}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
background-color: #97D28B;
margin-left: 12px;`


export const WrapperAddressMain = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before {
    content: '';
    display: block; 
    width: 320px; 
    height: 1px; 
    background-color: #97D28B;
    position: absolute;
    top: -22px; 
    left: -15px; 
    border-radius: 50%; 
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 4%;
    flex-wrap: nowrap;
    width: 100%;
    &::before {
        width: 97%;
        left: 20px;
    }
}

@media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 2%;
    flex-wrap: nowrap;
    width: 100%;
    &::before {
        width: 98%;
        left: 20px;
    }
}`


export const AddressMain = styled.p`
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
margin-bottom: 8px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 8%;
    margin-bottom: 0;
    width: 289px;
}

@media screen and (min-width: 769px) {
    margin-right: 37%;
    margin-bottom: 0;
    width: 289px;
}`


export const EmailMain = styled.p`
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 4%;
    width: 163px;
}

@media screen and (min-width: 769px) {
    margin-right: 11%;
    width: 163px;
}`


export const EcoMain = styled.p`
display: none;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: block;
    color: #173D33;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    width: 129px;
}

@media screen and (min-width: 769px) {
    display: block;
    color: #173D33;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    width: 129px;
}`


export const ImgMain = styled.img`
width: 320px;
margin-top: 16px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 96%;
}

@media screen and (min-width: 769px) {
    width: 97%;
}`

