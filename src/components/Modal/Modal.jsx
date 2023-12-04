import React from 'react';
import { Link } from 'react-scroll';
import {ModalBox, 
        WrapperBtnClose,
        BtnClose,
        Close,  
        TitleItem, 
        ArrowMenu, 
        WrapperSocial} from './Modal.styled';
import facebook from 'images/modal/facebook.png';
import instagram from 'images/modal/instagram.png'; 


export const Modal = ({ close }) => {
    return (
        <ModalBox>
            <WrapperBtnClose>
                <BtnClose onClick={close}><Close />close</BtnClose>
            </WrapperBtnClose>
            <div>
            <ul>
                <li>
                    <Link
                        to="main"
                        smooth={true}
                        duration={800}
                        offset={-112}
                        onClick={close}
                    >
                        <TitleItem>Main<ArrowMenu /></TitleItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        offset={-112}
                        onClick={close}
                    >
                        <TitleItem>About<ArrowMenu style={{color: 'rgba(255, 255, 255, 1)'}}/></TitleItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="cases"
                        smooth={true}
                        duration={800}
                        offset={-112}
                        onClick={close}
                    >
                        <TitleItem>Cases<ArrowMenu /></TitleItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="faq"
                        smooth={true}
                        duration={800}
                        offset={-112}
                        onClick={close}
                    >
                    <TitleItem>FAQ<ArrowMenu /></TitleItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="contactUs"
                        smooth={true}
                        duration={800}
                        offset={-112}
                        onClick={close}
                    >
                    <TitleItem>Contact Us<ArrowMenu /></TitleItem>
                    </Link>
                </li>
            </ul>
            <WrapperSocial>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                ><img style={{marginRight: '4px', color: '#ffffff', width: '24px', height: '24px'}} srcSet={`${facebook}`} alt='logo facebook'/>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                ><img style={{marginRight: '4px', color: '#ffffff', width: '24px', height: '24px'}} srcSet={`${instagram}`} alt='logo instagram'/>
                </a>
            </WrapperSocial>
            </div>
        </ModalBox>  
    )
}
