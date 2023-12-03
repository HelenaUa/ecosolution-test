import styled from 'styled-components';
import add from '../../images/faq/add.png';
import minus from '../../images/faq/minus.png';

export const FaqBox = styled.section`
display: flex;
flex-direction: column;
padding: 0px 10px 36px 10px;
justify-content: center;
align-items: center;
flex-wrap: nowrap;

@media screen and (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 100px;
    justify-content: flex-start;
    // flex-direction: row;
}

@media screen and (min-width: 769px) {
    padding-bottom: 126px;
    justify-content: flex-start;
    // flex-direction: row;
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

@media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px; 
    width: 347px;
    // margin-bottom: 135px;
    position: absolute;
    top: 4px; 
    left: 80%;
}

@media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
    // margin-bottom: 120px;
}`

export const WrapperFaq = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 325px;

&::before {
    content: '';
    display: block; 
    width: 320px; 
    height: 1px; 
    background-color: #97D28B;
    position: absolute;
    top: -14px; 
    left: 1%; 
    border-radius: 50%; 
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 300px;
    &::before {
        width: 310px; 
        top: -14px; 
        left: -1%; 
    }
}

@media screen and (min-width: 769px) {
    width: 564px;
    &::before {
        width: 596px; 
        top: -20px; 
        left: -1%; 
    }
}`


export const BtnFaq = styled.button`
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

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 298px;
}

@media screen and (min-width: 769px) {
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

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 28px;
    height: 28px;
}

@media screen and (min-width: 769px) {
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

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 28px;
    height: 28px;
}

@media screen and (min-width: 769px) {
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

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 264px;
    // margin-left: 28px;
}

@media screen and (min-width: 769px) {
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
gap: 12px;`


export const MoreQuestion = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    
}

@media screen and (min-width: 769px) {
    font-size: 24px;
    letter-spacing: -0.96px;
}`


export const BtnContactUs = styled.button`
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
cursor: pointer;`
