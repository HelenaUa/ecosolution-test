import React from 'react';
import { Element } from 'react-scroll';
import { useState } from 'react';
import {CasesBox, 
        WrapperCases, 
        TitleCases, 
        NavigationCases, 
        CountCases, 
        BtnCases, 
        BtnArrowLeft,
        BtnArrowRight,
        BtnArrowTop,
        ItemCases, 
        ListCases,
        WrapperItemCases, 
        InfoTopCases, 
        InfoBottomCases,
        SlideContent, 
        SlideInfo} from './Cases.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';
import card11x from '../../images/cases/card-1-@1x.jpg';
import card12x from '../../images/cases/card-1-@2x.jpg';
import card21x from '../../images/cases/card-2-@1x.jpg';
import card22x from '../../images/cases/card-2-@2x.jpg';
import card31x from '../../images/cases/card-3-@1x.jpg';
import card32x from '../../images/cases/card-3-@2x.jpg';
import card41x from '../../images/cases/card-4-@1x.jpg';
import card42x from '../../images/cases/card-4-@2x.jpg';
import card51x from '../../images/cases/card-5-@1x.jpg';
import card52x from '../../images/cases/card-5-@2x.jpg';


export const Cases = () => {
    const slides = [
      {
        image1x: card11x,
        image2x: card12x,
        alt: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
        content:
          'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
        info: {
          title: 'Wind Power for auto field irrigation',
          date: 'July 2023',
        },
      },
      {
        image1x: card21x,
        image2x: card22x,
        alt: 'Zhytomyr city Private Enterprise “Bosch”',
        content: 'Zhytomyr city Private Enterprise “Bosch”',
        info: {
          title: 'Solar Panels for industrial use',
          date: 'November 2023',
        },
      },
      {
        image1x: card31x,
        image2x: card32x,
        alt: 'Kharkiv city Private Enterprise “Bosch”',
        content: 'Kharkiv city Private Enterprise “Bosch”',
        info: {
          title: 'Solar Panels for industrial use',
          date: 'August 2023',
        },
      },
      {
        image1x: card41x,
        image2x: card42x,
        alt: 'Poltava city Private Enterprise “Bosch”',
        content: 'Poltava city Private Enterprise “Bosch”',
        info: {
          title: 'Solar Panels for industrial use',
          date: 'May 2022',
        },
      },
      {
        image1x: card51x,
        image2x: card52x,
        alt: 'Dnipro city Private Enterprise “Bosch”',
        content: 'Dnipro city Private Enterprise “Bosch”',
        info: {
          title: 'Solar Panels for industrial use',
          date: 'September 2022',
        },
      },
    ];

    const [count, setCount] = useState(1);
    const isMobile = useMediaQuery({ maxWidth: 480 });

    let slidesPerView = 2;
    if (isMobile) {
        slidesPerView = 1;
    } else  {
        slidesPerView = 2;
    }

return (
  <Element name="cases" style={{backgroundColor: '#F3F5FA'}}>
    <CasesBox id="cases">
        <WrapperCases>
            <TitleCases>Successful cases of our company</TitleCases>
            <NavigationCases>
                <CountCases>
                <div style={{color: '#173D33'}}>0{count}</div> /05
                </CountCases>
            </NavigationCases>
            <BtnCases>
                <BtnArrowLeft className='custom_prev' type="button" />
                <BtnArrowRight className='custom_next' type="button" />
            </BtnCases>
        </WrapperCases>

        <Swiper spaceBetween={24} 
                slidesPerView={slidesPerView}
                loop={true}
                onSlideChange={swiper => setCount(swiper.realIndex + 1)}
                navigation={{
                    nextEl: ".custom_next",
                    prevEl: ".custom_prev"
                }}
                modules={[Navigation]}
        >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                        <ListCases>
                            <li style={{marginRight: '0px'}}>
                            <ItemCases>
                                <picture>
                                <source
                                    media="(min-width: 769px)"
                                    srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                                    width="596px"
                                    height="296px"
                                />
                                <source 
                                    media="(min-width: 481px) and (max-width: 768px)"
                                    srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                                    width="342px"
                                    height="168px"
                                />
                                <source
                                    media="(max-width: 480px)"
                                    srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                                    width="320px"
                                    height="157px"
                                />
                                <img src={slide.image1x} alt={slide.alt}/>
                                </picture>
                                <WrapperItemCases>
                                    <InfoTopCases>
                                        <SlideContent>{slide.content}</SlideContent>
                                        <BtnArrowTop type="button"/> 
                                    </InfoTopCases>

                                    <InfoBottomCases>
                                        <SlideInfo>{slide.info.title}</SlideInfo>
                                        <SlideInfo>{slide.info.date}</SlideInfo>
                                    </InfoBottomCases>
                                </WrapperItemCases>
                            </ItemCases>
                            </li>
                        </ListCases>
                        </SwiperSlide>
                    ))}

        </Swiper>
    </CasesBox>
    </Element>
  )
  }

