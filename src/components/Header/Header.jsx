import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HeaderBox, 
         Logo,  
         BtnHeader,
         Backdrop, 
         BtnMenu } from './Header.styled';
import { Modal } from 'components/Modal/Modal';   
     

export const Header = () => {
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
        };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const headerStyle = {
        backgroundColor: isScrolled ? 'rgba(234, 237, 241, 1)' : 'initial',
        transition: 'background-color 0.3s ease',
    };

    const closeModal = () => {
        setModalIsOpened(!modalIsOpened);
        setShowBackdrop(!modalIsOpened);
        if (modalIsOpened) {
            document.body.style.overflow = 'initial';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    return (  
        <HeaderBox style={headerStyle}>
            <Logo />
            <BtnMenu onClick={closeModal}/>
            {showBackdrop && (
                <Backdrop onClick={closeModal}></Backdrop>
            )}
            {modalIsOpened && <Modal close={closeModal}/>}
            <Link
                to="contactUs"
                smooth={true}
                duration={800}
                offset={-112}>
                <BtnHeader>Get in touch<div style={{
                                            width: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000000',
                                            marginLeft: '12px'}}></div>
                </BtnHeader>
            </Link>
        </HeaderBox>     
    )
}