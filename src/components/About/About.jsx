import React from 'react';
import { AboutBox, 
         WrapperTitleAbout, 
         TitleAbout, 
         Icon, 
         TextAbout, 
         GridAboutFirst, 
         GridAboutSecond, 
         ImgBox,
         ImgAbout, 
         DivAbout, 
         TitleGridAbout, 
         TextGridAbout } from './About.styled';
import about11x from 'images/about/about1-@1x.jpg';
import about12x from 'images/about/about1-@2x.jpg';
import about21x from 'images/about/about2-@1x.jpg';
import about22x from 'images/about/about2-@2x.jpg';
import CpuCharge from 'images/about/cpu-charge.png';
import GlobalEdit from 'images/about/global-edit.png';
import MaximizeCircle from 'images/about/maximize-circle.png';
import Ranking from 'images/about/ranking.png';


export const About = () => {
    return (
        // <AboutBox id="about">
        //     <WrapperTitleAbout>
        //         <TitleAbout>Main values of our company</TitleAbout>
        //         <TextAbout>EcoSolution envisions a world where sustainable energy 
        //            solutions power a brighter and cleaner future for all. 
        //            We aspire to be at the forefront of the global shift 
        //            towards renewable energy, leading the way in innovative 
        //            technologies that harness the power of nature to meet 
        //            the world's energy needs.
        //         </TextAbout>
        //     </WrapperTitleAbout>

        //     <GridAboutFirst> 
        //         <DivAbout>
        //             <TitleGridAbout>
        //                 <Icon srcSet={`${MaximizeCircle}`} alt='icon'/>Openness
        //             </TitleGridAbout>
        //             <TextGridAbout>to the world, people, new ideas and projects</TextGridAbout>
        //         </DivAbout>
        //         <DivAbout>
        //             <TitleGridAbout>
        //                 <Icon srcSet={`${GlobalEdit}`} alt='icon'/>Responsibility
        //             </TitleGridAbout>
        //             <TextGridAbout>we are aware that the results of our work have 
        //                 an impact on our lives and the lives of future generations
        //             </TextGridAbout>
        //         </DivAbout>
        //         <ImgAbout srcSet={`${about11x} 1x, ${about12x} 2x`} alt='wind farms fields and two men'/>
        //     </GridAboutFirst>

        //     <GridAboutSecond>
        //         <ImgAbout srcSet={`${about21x} 1x, ${about22x} 2x`} alt='man worker firld by solar panels'/>
        //         <DivAbout>
        //             <TitleGridAbout>
        //                 <Icon srcSet={`${CpuCharge}`} alt='icon'/>Innovation
        //             </TitleGridAbout>
        //             <TextGridAbout>we use the latest technology to implement non-standard solutions</TextGridAbout>
        //         </DivAbout>
        //         <DivAbout>
        //             <TitleGridAbout>
        //                 <Icon srcSet={`${Ranking}`} alt='icon'/>Quality
        //             </TitleGridAbout>
        //             <TextGridAbout>we do not strive to be the first among others, but we want to be
        //                 the best in our business
        //             </TextGridAbout>
        //         </DivAbout>
        //     </GridAboutSecond>       
        // </AboutBox>

        <AboutBox id="about">
        <WrapperTitleAbout>
            <TitleAbout>Main values of our company</TitleAbout>
            <TextAbout>EcoSolution envisions a world where sustainable energy 
               solutions power a brighter and cleaner future for all. 
               We aspire to be at the forefront of the global shift 
               towards renewable energy, leading the way in innovative 
               technologies that harness the power of nature to meet 
               the world's energy needs.
            </TextAbout>
        </WrapperTitleAbout>

        <GridAboutFirst> 
            <DivAbout>
                <TitleGridAbout>
                    <Icon srcSet={`${MaximizeCircle}`} alt='icon'/>Openness
                </TitleGridAbout>
                <TextGridAbout>to the world, people, new ideas and projects</TextGridAbout>
            </DivAbout>
            <DivAbout>
                <TitleGridAbout>
                    <Icon srcSet={`${GlobalEdit}`} alt='icon'/>Responsibility
                </TitleGridAbout>
                <TextGridAbout>we are aware that the results of our work have 
                    an impact on our lives and the lives of future generations
                </TextGridAbout>
            </DivAbout>

            <ImgBox>
            <ImgAbout srcSet={`${about11x} 1x, ${about12x} 2x`} alt='wind farms fields and two men'/>
            </ImgBox>

        <ImgBox>
            <ImgAbout srcSet={`${about21x} 1x, ${about22x} 2x`} alt='man worker firld by solar panels'/>
        </ImgBox>
            <DivAbout>
                <TitleGridAbout>
                    <Icon srcSet={`${CpuCharge}`} alt='icon'/>Innovation
                </TitleGridAbout>
                <TextGridAbout>we use the latest technology to implement non-standard solutions</TextGridAbout>
            </DivAbout>
            <DivAbout>
                <TitleGridAbout>
                    <Icon srcSet={`${Ranking}`} alt='icon'/>Quality
                </TitleGridAbout>
                <TextGridAbout>we do not strive to be the first among others, but we want to be
                    the best in our business
                </TextGridAbout>
            </DivAbout>
        </GridAboutFirst>
    </AboutBox>
    )
}