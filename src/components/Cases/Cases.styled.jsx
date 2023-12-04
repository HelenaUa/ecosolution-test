import styled from 'styled-components';
import arrowRight from '../../images/cases/arrow-right-r.png';
import arrowLeft from '../../images/cases/arrow-right-l.png';
import arrowTop from '../../images/cases/arrow-right-top.png';


export const CasesBox = styled.section`
padding: 0px 10px 40px 10px;
background-color: #F3F5FA;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // padding-bottom: 100px;
    margin-right: 86px;
}

@media screen and (min-width: 769px) {
    // padding-bottom: 120px;
}`

export const WrapperCases = styled.div`
// display: flex;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    
    // justify-content: space-between;
    // margin-bottom: 38px;
}

@media screen and (min-width: 769px) {
    display: flex;
    // margin-bottom: 120px;
}`

export const TitleCases = styled.h2`
color: #173D33;
font-family: Oswald;
font-size: 28px;
font-weight: 400;
line-height: 28px; 
width: 264px;
text-transform: uppercase;
position: relative;
margin-bottom: 63px;
margin-left: 36px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 36px;
    line-height: 36px; 
    padding-right: 70px;
    margin-bottom: 33px;
    border-right: 1px solid #97D28B;
}

@media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 48px;
    width: 450px;
    padding-right: 152px;
    margin-bottom: 36px;
    border-right: 1px solid #97D28B;
}`

export const NavigationCases = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 16px;
margin-left: 36px;
    
@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 26px;
}
    
@media screen and (min-width: 769px) {
    margin-bottom: 36px;   
}`


export const CountCases = styled.div`
display: flex;
color: rgba(23, 61, 51, 0.25);
font-size: 28px;
font-weight: 300;
letter-spacing: -1.12px;`


export const BtnCases = styled.div`
display: flex;
gap: 12px;
position: absolute;
top: 1888px; 
left: 47%;

@media screen and (min-width: 481px) and (max-width: 768px) {
    top: 2210px; 
    left: 67%;
}

@media screen and (min-width: 769px) {
    top: 3006px; 
    left: 84%;
}`


export const BtnArrowLeft = styled.button`
display: inline-flex;
width: 66px;
height: 66px;
background-image: url('${arrowLeft}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
background-color: transparent;
border: 1px solid #173D33;

@media screen and (min-width: 481px) and (max-width: 768px) {
   
}

@media screen and (min-width: 769px) {
    width: 84px;
    height: 84px;
}`

export const BtnArrowRight = styled.button`
display: inline-flex;
width: 66px;
height: 66px;
background-image: url('${arrowRight}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
background-color: transparent;
border: 1px solid #173D33;

@media screen and (min-width: 481px) and (max-width: 768px) {
   
}

@media screen and (min-width: 769px) {
    width: 84px;
    height: 84px;
}`


export const ListCases = styled.ul`
display: flex;
overflow: hidden;
// gap: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0px;
}

@media screen and (min-width: 769px) {
    gap: 48px;
}`

export const ItemCases = styled.div`
max-width: 100%;
height: auto;
background-color: #eaedf1;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // width: 342px;
    // height: 322px;
    margin-right: 0px;
}

@media screen and (min-width: 769px) {
    width: 596px;
    height: 506px;
}`
 

export const WrapperItemCases = styled.div`
padding: 24px 12px 12px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // padding: 20px 12px 12px 12px;
    padding: 10px 10px 10px 10px;
}

@media screen and (min-width: 769px) {
    padding: 38px 48px;
}`


export const InfoTopCases = styled.div`
display: flex;
gap: 61px;
justify-content: space-between;
height: 87px;
margin-bottom: 12px;
position: relative;

&::before {
    content: '';
    display: block; 
    width: 296px; 
    height: 1px; 
    background-color: #97D28B;
    position: absolute;
    top: 86px; 
    left: 1%; 
    border-radius: 50%; 
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    height: 106px;
    margin-bottom: 18px;
    &::before {
        width: 296px; 
        top: 100px; 
        left: 1%;   
}

@media screen and (min-width: 769px) {
    height: 92px;
    margin-bottom: 24px;
    &::before {
        width: 900px; 
        top: 100px; 
        left: 1%;
    }`


export const BtnArrowTop = styled.button`
width: 60px;
height: 60px;
background-image: url('${arrowTop}');
background-repeat: no-repeat;
align-items: center;
background-position: center;
justify-content: center;
border-radius: 50%;
background-color: #97D28B;
border: none;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // width: 58px;
    // height: 58px;
    margin: 0px;
    padding: 0px;
}

@media screen and (min-width: 769px) {
    
}`


export const InfoBottomCases = styled.div`
display: flex;
justify-content: space-between;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // height: 1px;
    padding-bottom: 10px;
}

@media screen and (min-width: 769px) {
    padding-top: 14px;
}`


export const SlideContent = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
width: 175px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // font-size: 20px;
    // letter-spacing: -0.8px;
    width: 240px;
}

@media screen and (min-width: 769px) {
    font-size: 24px;
    letter-spacing: -0.96px;
    width: 357px;
}`

export const SlideInfo = styled.p`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 12px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.48px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    // font-size: 14px;
    // letter-spacing: -0.56px;
}

@media screen and (min-width: 769px) {
    font-size: 16px;
    letter-spacing: -0.64px;
}`
