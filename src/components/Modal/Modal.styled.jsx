import styled from 'styled-components';
import close from '../../images/modal/close.png';
import arrow from '../../images/modal/arrow-menu.png';


export const ModalBox = styled.section`
position: absolute;
right: 0;
top: 0;
border-radius: 25px;
z-index: 10;
background-color: rgba(23, 61, 51, 0.75);
backdrop-filter: blur(12.5px);
width: calc(100% - 48px);
height: calc(100vh - 72px);
border-radius: 25px;
margin: 30px 20px;

@media screen and (min-width: 481px) and (max-width: 768px) {
  margin: 30px 20px;
  width: 320px;
  height: calc(100vh - 72px);
  max-height: 701px;
}

@media screen and (min-width: 769px) {
  margin: 20px 60px;
  width: 365px;
  height: calc(100vh - 72px);
  max-height: 873px;
}`


export const WrapperBtnClose = styled.div`
position: relative;
display: flex;
flex-direction: row;
margin-top: 24px;
margin-left: 19px;

    ::after {
        content: '';
        display: block;
        width: 90%;
        height: 1px;
        position: absolute;
        background-color: #ffffff;
        top: 28px; 
        left: 10px;
    }`


export const Close = styled.div`
width: 20px;
height: 20px;
background-image: url('${close}');
background-repeat: no-repeat;
color: #ffffff;
display: flex;
align-items: center;
background-position: center;
justify-content: center;
cursor: pointer;`


export const BtnClose = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 4px;
background-color: inherit;
border: none;
cursor: pointer;
color: #FFF;
font-family: Fira Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;
margin-bottom: 24px;

    &:focus,
        &:hover {
        color: #97D28B;
    }
}`

export const ItemModal = styled.li`
`

export const TitleItem = styled.p`
display: flex;
flex-direction: row;
align-items: baseline;
gap: 5px;
color: #FFF;
font-family: Fira Sans;
font-size: 24px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.96px;

&:focus,
    &:hover {
        color: #97D28B;
    }`

export const ArrowMenu = styled.div`
width: 16px;
height: 16px;
background-image: url('${arrow}');
background-repeat: no-repeat;
color: #ffffff;
display: flex;
align-items: center;
background-position: center;
justify-content: center;
cursor: pointer;`
 

export const WrapperSocial = styled.div`
display: flex;
gap: 8px;
margin-top: 800px;
margin-left: 24px;

@media screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 440px;
}

@media screen and (min-width: 769px) {
    margin-top: 600px;
}`

export const LinkSocial = styled.a`
`


// export const Facebook = styled.div`
// width: 20px;
// height: 20px;
// background-image: url('${facebook}');
// background-repeat: no-repeat;
// color: #ffffff;
// display: flex;
// align-items: center;
// background-position: center;
// justify-content: center;
// cursor: pointer;`