import styled from 'styled-components';


export const AboutBox = styled.section`
display: flex;
flex-direction: column;
padding: 0px 10px 36px 10px;
justify-content: center;
align-items: center;
background-color: #F3F5FA;

@media screen and (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 100px;
}

@media screen and (min-width: 769px) {
    padding-bottom: 121px;
}`


export const WrapperTitleAbout = styled.div`
margin-bottom: 36px;
@media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    width: 100%;
    padding-left: 3%;
    margin-bottom: 100px;
}

@media screen and (min-width: 769px) {
    display: flex;
    width: 100%;
    padding-left: 3%;
    margin-bottom: 122px;
}`


export const TitleAbout = styled.h2`
color: #173D33;
font-family: Oswald;
font-size: 28px;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
width: 319px;
margin-bottom: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px; 
    width: 35%; 
    margin-right: 12%; 
}

@media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 48px;
    width: 28%; 
    margin-right: 30%;
}`


export const TextAbout = styled.div`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
width: 320px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 342px;
    position: relative;

    &::before {
        content: '';
        display: block; 
        width: 1px; 
        height: 110px; 
        background-color: #97D28B;
        position: absolute;
        top: 2px; 
        left: -15px; 
        border-radius: 50%; 
    }
}

@media screen and (min-width: 769px) {
    width: 459px;
    position: relative;

    &::before {
        content: '';
        display: block; 
        width: 1px; 
        height: 87px; 
        background-color: #97D28B;
        position: absolute;
        top: 3px; 
        left: -105px; 
        border-radius: 50%; 
    }
}`


export const GridAboutFirst = styled.div`
display: grid;
grid-template-columns: calc((320px - 24px) / 2) calc((320px - 24px) / 2);
grid-gap: 3%; 
width: 67%; 
margin-bottom: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 159px 159px 342px;
    grid-gap: 24px;
    width: 100%; 
    padding-left: 3%;
}

@media screen and (min-width: 769px) {
    grid-template-columns: 274px 274px 596px;
    grid-gap: 48px;
    width: 100%;
    margin-bottom: 48px;
    padding-left: 3%;
}`


export const GridAboutSecond = styled.div`
display: grid;
grid-template-columns: calc((320px - 24px) / 2) calc((320px - 24px) / 2);
grid-gap: 3%; 
width: 67%; 

@media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 342px 159px 159px;
    grid-gap: 24px;
    width: 100%;
    padding-left: 3%;
}

@media screen and (min-width: 769px) {
    grid-template-columns: 596px 274px 274px;
    grid-gap: 48px;
    width: 100%;
    padding-left: 3%;
}`


export const DivAbout = styled.div`
height: 224px;
padding: 13px 12px 0px 12px;
background-color: #EAEDF1;
text-align: justify;

@media screen and (min-width: 481px) and (max-width: 768px) {
    padding-top: 17px;
    padding-left: 12px;
    padding-right: 12px;
}

@media screen and (min-width: 769px) {
    height: 339px;
    padding-top: 48px;
    padding-left: 24px;
    padding-right: 24px;
}`


export const TitleGridAbout = styled.p`
color: #173D33;
font-family: Oswald;
text-align: justify;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-transform: uppercase;
margin-bottom: 46px;
position: relative;

    &::after {
        content: '';
        display: block; 
        width: 124px; 
        height: 1px; 
        background-color: #97D28B;
        position: absolute;
        top: 63px; 
        left: -1px; 
        border-radius: 50%; 
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 64px;
        &::after { 
            width: 135px; 
            top: 83px; 
            left: -1px; 
        }
    }
    
    @media screen and (min-width: 769px) {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 119px;
        &::after { 
            width: 226px; 
            top: 123px; 
            left: -1px; 
        }
}`


export const Icon = styled.img`
width: 16px;
height: 16px;
margin-right: 4px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 5px;
}

@media screen and (min-width: 769px) {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}`


export const TextGridAbout = styled.span`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 14px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.56px;

@media screen and (min-width: 769px) {
    font-size: 16px;
    letter-spacing: -0.64px;
}`


export const ImgAbout = styled.img`
display: none;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    height: 100%;
    width: 340px;  
}

@media screen and (min-width: 769px) {
    display: flex;
    height: 100%;
    width: 594px;
}`




