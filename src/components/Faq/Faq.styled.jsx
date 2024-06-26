import styled from 'styled-components';
import { Link } from 'react-scroll';
import add from '../../images/faq/add.png';
import minus from '../../images/faq/minus.png';


export const FaqBox = styled.section`
display: flex;
flex-direction: column;
padding: 0px 10px 36px 10px;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
background-color: #F3F5FA;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 60px;
    justify-content: flex-start;
    align-content: flex-start;
    height: 840px;
}

@media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-content: flex-start;
    padding-bottom: 20px;
    height: 900px;
}`


export const TitleFaq = styled.h2`
color: #173D33;
font-family: Oswald;
font-size: 28px;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
width: 320px;
margin-bottom: 41px;
margin-right: 42px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 36px;
    line-height: 36px; 
    width: 347px;
    position: absolute;
    top: 2720px; 
    left: 52%;
    margin-right: 0px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
    position: absolute;
    top: 3755px; 
    left: 60%;
    margin-right: 0px;
}`


export const WrapperLeft = styled.div`
margin-right: 42px;
@media screen and (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 2740px; 
    left: 5%;
    margin-right: 0px;
}

@media screen and (min-width: 1280px) {
    position: absolute;
    top: 3776px; 
    left: 5%;
    margin-right: 0px;
}`


export const WrapperFaq = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 325px;

&::before {
    content: '';
    display: block; 
    width: 296px; 
    height: 1px; 
    background-color: #97D28B;
    position: absolute;
    top: -14px; 
    left: 1%; 
    border-radius: 50%; 
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 300px;
    &::before {
        width: 310px; 
        top: -14px; 
        left: -1%; 
    }
}

@media screen and (min-width: 1280px) {
    width: 564px;
    &::before {
        width: 596px; 
        top: -20px; 
        left: -1%; 
    }
}`


export const BtnFaq = styled.button`
display: inline-block;
border: none;
color: #97D28B;
background-color: rgba(0, 0, 0, 0);
cursor: pointer;`


export const QuestionFaq = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
display: flex;
justify-content: center;
align-items: center;
width: 296px;
margin-bottom: 26px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 298px;
}

@media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
    width: 544px;
    margin-bottom: 39px;
}`


export const Add = styled.div`
width: 16px;
height: 16px;
background-image: url('${add}');
background-repeat: no-repeat;
color: #97D28B;
display: flex;
align-items: center;
background-position: center;
justify-content: center;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 28px;
    height: 28px;
}

@media screen and (min-width: 1280px) {
    width: 28px;
    height: 28px;
}`


export const Minus = styled.div`
width: 16px;
height: 16px;
background-image: url('${minus}');
background-repeat: no-repeat;
color: #97D28B;
display: flex;
align-items: center;
background-position: center;
justify-content: center

@media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 28px;
    height: 28px;
}

@media screen and (min-width: 1280px) {
    width: 28px;
    height: 28px;
}`


export const AnswerFaq = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 14px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.56px;
width: 264px;
margin-bottom: 35px;
margin-left: 26px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 264px;
}

@media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
    width: 508px;
    margin-bottom: 42px;
    margin-left: 38px;
}`


export const WrapperMore = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
margin-right: 42px;

@media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 97%;
    margin-right: 0px;
    margin-left: 48%;
}

@media screen and (min-width: 1280px) {
    margin-top: 56%;
    margin-right: 0px;
    margin-left: 53%;
}`


export const MoreQuestion = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;

@media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
}`


export const BtnContactUs = styled(Link)`
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
margin-left: 2%;
width: 140px;
height: 39px;
border-radius: 500px;
border: none;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;

&:hover,
&:focus{
    background-color: #DCEFD8;
`
