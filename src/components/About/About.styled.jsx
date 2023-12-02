import styled from 'styled-components';


export const AboutBox = styled.section`
display: flex;
flex-direction: column;
padding: 0px 10px 36px 10px;
justify-content: center;
align-items: center;

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


export const TitleAbout = styled.p`
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
    width: 35%; //272px
    margin-right: 12%; //94px
}

@media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 48px;
    width: 28%; //365px
    margin-right: 30%; //416px
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
        top: 2px; /* Встановлюємо відстань зверху від батьківського елемента */
        left: -15px; /* Встановлюємо відстань зліва від батьківського елемента */
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
        top: 3px; /* Встановлюємо відстань зверху від батьківського елемента */
        left: -105px; /* Встановлюємо відстань зліва від батьківського елемента */
        border-radius: 50%; 
    }
}`

// export const GridAbout = styled.div`
// display: grid;
// grid-template-columns: calc((320px - 24px) / 2) calc((320px - 24px) / 2);
// grid-gap: 3%; 
// width: 67%; 
// margin-bottom: 36px;

// @media screen and (min-width: 481px) and (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(2, auto);
//     grid-template-areas:
//       "a b c"
//       "d e f";
//     grid-gap: 24px;
//     max-width: 67%;
//     margin: 0 auto;
   
//     // margin-bottom: 100px;
// }

// @media screen and (min-width: 769px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//     grid-template-areas:
//       "a b c"
//       "d e f";
//     gap: 24px;
//     max-width: 67%;
//     margin: 0 auto;
//     }
// }`


export const GridAboutFirst = styled.div`
display: grid;
grid-template-columns: calc((320px - 24px) / 2) calc((320px - 24px) / 2);
grid-gap: 3%; 
width: 67%; 
margin-bottom: 36px;`


export const GridAboutSecond = styled.div`
display: grid;
grid-template-columns: calc((320px - 24px) / 2) calc((320px - 24px) / 2);
grid-gap: 3%; 
width: 67%; 
margin-bottom: 36px;`


export const DivAbout = styled.div`
height: 224px;
padding: 13px 12px 0px 12px;
background-color: #EAEDF1;

@media screen and (min-width: 481px) and (max-width: 768px) {
    width: 159px;
    grid-area: ${({ area }) => area};
    // width: 159px;
    // height: 197px;
}

@media screen and (min-width: 769px) {
    width: 274px;
    grid-area: ${({ area }) => area};
}`

export const TitleGridAbout = styled.p`
color: #173D33;
font-family: Oswald;
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
        top: 63px; /* Встановлюємо відстань зверху від батьківського елемента */
        left: -1px; /* Встановлюємо відстань зліва від батьківського елемента */
        border-radius: 50%; 
    }
`

export const TextGridAbout = styled.span`
color: #173D33;
text-align: justify;
font-family: Fira Sans;
font-size: 14px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.56px;
// width: 124px;`

export const ImgAbout = styled.img`
display: none;

@media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    height: 100%;
    grid-area: ${({ area }) => area};
    // width: 340px;  
}

@media screen and (min-width: 769px) {
    display: flex;
    height: 100%;
    grid-area: ${({ area }) => area};
    // width: 340px;
}`




