import styled from 'styled-components';
import { Form, Field } from 'formik';
import arrow from 'images/main/arrow-right.png';

export const ContactBox = styled.section`
display: flex;
flex-direction: column;
padding: 0px 10px 61px 10px;
justify-content: center;
align-items: center;
flex-wrap: nowrap;

@media screen and (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 141px;
}

@media screen and (min-width: 769px) {
    padding-bottom: 161px;
}`


export const DivContact = styled.div`
display: flex;
flex-direction: column;
// width: 100%;

@media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    gap: 100px;
}

@media screen and (min-width: 769px) {
    flex-direction: row;
    gap: 130px;
}`


export const TitleContact = styled.h2`
color: #173D33;
font-family: Oswald;
font-size: 28px;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
margin-bottom: 24px;
text-align: center;

@media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
}

@media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 120px;
}`


export const WrapperContact = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 244px;

@media screen and (min-width: 769px) {
    width: 466px;
}`


export const DataContact = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-bottom: 10px;
margin-bottom: 24px;

@media screen and (min-width: 769px) {
    margin-bottom: 32px;
}`


export const NameContact = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;`


export const LinkContact = styled.a`
display: flex;
flex-direction: row;
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 20px;;
font-weight: 400;
line-height: normal;
letter-spacing: -0.8px;
position: relative;

@media screen and (min-width: 769px) {
    font-size: 24px;
    letter-spacing: -0.96px;
}`


export const FormCon = styled(Form)`
display: flex;
flex-direction: column;
gap: 28px;
padding: 25px;
background-color: #EAEDF1;
width: 320px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 300px;
}

@media screen and (min-width: 769px) {
    width: 510px;
}`


export const Input = styled(Field)`
color: #828382;
font-family: Fira Sans;
font-size: 18px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
padding-left: 5px;
height: 30px;
background-color: #EAEDF1;
border: none;
border-bottom: 1px solid #97D28B;
border-radius:none;
max-width: 296px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 294px;
}

@media screen and (min-width: 769px) {
    font-size: 20px;
    letter-spacing: -0.8px;
    max-width: 500px;
}`


export const BtnContact = styled.button`
color: #173D33;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.64px;
display: flex;
height: 39px;
padding-left: 13px;
margin-left: 200px;
margin-bottom: 24px;
justify-content: center;
align-items: center;
gap: 12px;
width: 99px;
border: 1px solid #97D28B;
border-radius: 500px;
background-color: white;
cursor: pointer;
&:hover,
&:focus{
    background-color: lightgray;
    border: 1px solid #97D28B;
    
@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: 219px;
}
    
@media screen and (min-width: 769px) {
    margin-bottom: 28px;  
    margin-left: 410px;
}`


export const Arrow = styled.div`
width: 32px;
height: 32px;
background-image: url('${arrow}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
background-color: #97D28B;`


export const LabelStyle = styled.label`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
display: flex;
gap: 5px;
flex-direction: column;`   


