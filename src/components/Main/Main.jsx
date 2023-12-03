import React from 'react';
import { Element, Link } from 'react-scroll';
import { MainBox, 
         WrapperTitle, 
         TitleMain, 
         WrapperText, 
         TextMain, 
         BtnMain, 
         Arrow, 
         WrapperAddressMain,
         AddressMain, 
         EmailMain, 
         EcoMain, 
         ImgMain} from './Main.styled';
import main1x from 'images/main/main-s-@1x.jpg';
import main2x from 'images/main/main-s-@2x.jpg';
// import arrow from 'images/main/arrow-right.png';

export const Main = () => {
    return (
        <Element name="main">
        <MainBox id="main">
            <WrapperTitle>
                <TitleMain>RENEWABLE ENERGY For any task</TitleMain>
                <WrapperText>
                    <TextMain>Development and implementation of renewable 
                              non-polluting energy sources, generating power 
                              generation using energy wind, sun, water, biomass
                    </TextMain>
                    <Link  
                        to="cases"
                        smooth={true}
                        duration={800}
                        offset={-112}>
                        <BtnMain>Learn more<Arrow /></BtnMain>
                    </Link>
                </WrapperText>
            </WrapperTitle>
            <WrapperAddressMain>
                <AddressMain>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</AddressMain>
                <EmailMain>office@ecosolution.com</EmailMain>
                <EcoMain>ecosolution © 2023</EcoMain>
            </WrapperAddressMain>
            <ImgMain 
             srcSet={`${main1x} 1x, ${main2x} 2x`} alt='wind generator on the field'
            // srcset="
            //              ./images/main/main-l-@1x.jpg 1242w,
            //              ./images/main/main-m-@1x.jpg 709w,
            //              ./images/main/main-s-@1x.jpg 420w,
            //              ./images/main/main-l-@2x.jpg 2484w,
            //              ./images/main/main-m-@2x.jpg 1418w,
            //              ./images/main/main-s-@2x.jpg 840w
            //              " 
            //              sizes="(min-width: 1200px) 608px, (min-width: 768px) 336px, (min-width: 480px) 280px, 100vw"
            //              src="../images/main/main-s-@1x.jpg"
            //              alt=""
            />
        </MainBox>
        </Element>
    )
}