import styled from 'styled-components';


export const ElectricityBox = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F3F5FA;`


export const TitleElectricity = styled.h2`
color: #173D33;
text-align: center;
font-family: Oswald;
font-size: 28px;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
width: 286px;
margin-bottom: 96px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 36px;
    line-height: 36px; 
    width: 368px;
    margin-bottom: 135px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
    margin-bottom: 120px;
}`


export const WrapperElectricity = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 36px;
position: relative;

&::before {
    content: '';
    display: block; 
    width: 1px; 
    height: 48px; 
    background-color: #97D28B;
    position: absolute;
    top: -70px; 
    left: 50%; 
    border-radius: 50%; 
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 100px;
    &::before {
        height: 87px; 
        top: -110px; 
        left: 50%;
    }
}

@media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    &::before {
        height: 87px; 
        top: -60%; 
        left: 50%;
    }
}`


export const NumberElectricity = styled.p`
color: #97D28B;
text-align: center;
font-family: Oswald;
font-size: 48px;
font-weight: 700;
line-height: 48px;
text-transform: uppercase;
margin-right: 8px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 100px;
    line-height: 100px;
    margin-right: 24px;
}

@media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
    margin-right: 24px;
}`


export const UnitElectricity = styled.span`
color: #173D33;
text-align: center;
font-family: Oswald;
font-size: 24px;
font-weight: 400;
line-height: 24px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 28px;
    line-height: 48px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
}`