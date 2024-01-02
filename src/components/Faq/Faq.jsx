import React from 'react';
import { Element } from 'react-scroll';
import {FaqBox, 
        TitleFaq, 
        WrapperLeft,
        BtnFaq, 
        QuestionFaq, 
        Minus,
        Add,
        AnswerFaq, 
        WrapperFaq, 
        WrapperMore, 
        MoreQuestion, 
        BtnContactUs} from './Faq.styled';
import { useState } from 'react';


export const Faq = () => {
    const [textAdd, setTextAdd] = useState([false, true, true, true, true]);
   
    const handleToggle = index => {
        setTextAdd(prevStates => {
          return prevStates.map((_, i) => (i === index ? !prevStates[i] : true));
        });
    };

    return (
        <Element name="faq">
        <FaqBox id="fag">
            <TitleFaq>Frequently Asked Questions</TitleFaq>
            <WrapperLeft>
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq onClick={() => handleToggle(0)}> {textAdd[0] ? <Add /> : <Minus />}</BtnFaq>How do wind turbines and solar panels work together 
                            in a renewable energy system?
                        </QuestionFaq>
                        {!textAdd[0] && (<AnswerFaq>Wind turbines and solar panels generate electricity 
                            through different mechanisms. Wind turbines harness 
                            the kinetic energy of the wind to turn blades, which 
                            then drive a generator. Solar panels convert sunlight 
                            into electricity through the photovoltaic effect. When 
                            integrated into a renewable energy system, these technologies 
                            complement each other by providing a continuous and reliable 
                            power supply. Wind power is often more abundant during certain 
                            times, while solar power is consistent during daylight hours, 
                            resulting in a more stable overall energy output.
                        </AnswerFaq>
                        )}
                    </WrapperFaq>
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq onClick={() => handleToggle(1)}> {textAdd[1] ? <Add /> : <Minus />}</BtnFaq>What sets EcoSolution's renewable energy solutions apart 
                            from others on the market?
                        </QuestionFaq>
                        {!textAdd[1] && 
                        <AnswerFaq>Wind turbines and solar panels generate electricity 
                            through different mechanisms. Wind turbines harness 
                            the kinetic energy of the wind to turn blades, which 
                            then drive a generator. Solar panels convert sunlight 
                            into electricity through the photovoltaic effect. When 
                            integrated into a renewable energy system, these technologies 
                            complement each other by providing a continuous and reliable 
                            power supply. Wind power is often more abundant during certain 
                            times, while solar power is consistent during daylight hours, 
                            resulting in a more stable overall energy output.
                        </AnswerFaq>
                        }
                    </WrapperFaq>
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq onClick={() => handleToggle(2)}> {textAdd[2] ? <Add /> : <Minus />}</BtnFaq>How can businesses and communities benefit from integrating 
                            renewable energy solutions from EcoSolution?
                        </QuestionFaq>
                        {!textAdd[2] &&
                        <AnswerFaq>Wind turbines and solar panels generate electricity 
                            through different mechanisms. Wind turbines harness 
                            the kinetic energy of the wind to turn blades, which 
                            then drive a generator. Solar panels convert sunlight 
                            into electricity through the photovoltaic effect. When 
                            integrated into a renewable energy system, these technologies 
                            complement each other by providing a continuous and reliable 
                            power supply. Wind power is often more abundant during certain 
                            times, while solar power is consistent during daylight hours, 
                            resulting in a more stable overall energy output.
                        </AnswerFaq>
                        }
                    </WrapperFaq>
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq onClick={() => handleToggle(3)}>{textAdd[3] ? <Add /> : <Minus />}</BtnFaq>What measures does EcoSolution take to ensure the environmental 
                            sustainability of its products?
                        </QuestionFaq>
                        {!textAdd[3] &&
                        <AnswerFaq>Wind turbines and solar panels generate electricity 
                            through different mechanisms. Wind turbines harness 
                            the kinetic energy of the wind to turn blades, which 
                            then drive a generator. Solar panels convert sunlight 
                            into electricity through the photovoltaic effect. When 
                            integrated into a renewable energy system, these technologies 
                            complement each other by providing a continuous and reliable 
                            power supply. Wind power is often more abundant during certain 
                            times, while solar power is consistent during daylight hours, 
                            resulting in a more stable overall energy output.
                        </AnswerFaq>
                        }
                    </WrapperFaq>
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq onClick={() => handleToggle(4)}>{textAdd[4] ? <Add /> : <Minus />}</BtnFaq>How does EcoSolution engage with local communities and support a 
                            just transition to renewable energy?
                        </QuestionFaq>
                        {!textAdd[4] &&
                        <AnswerFaq>Wind turbines and solar panels generate electricity 
                            through different mechanisms. Wind turbines harness 
                            the kinetic energy of the wind to turn blades, which 
                            then drive a generator. Solar panels convert sunlight 
                            into electricity through the photovoltaic effect. When 
                            integrated into a renewable energy system, these technologies 
                            complement each other by providing a continuous and reliable 
                            power supply. Wind power is often more abundant during certain 
                            times, while solar power is consistent during daylight hours, 
                            resulting in a more stable overall energy output.
                        </AnswerFaq>
                        }
                    </WrapperFaq>
            </WrapperLeft>
            <WrapperMore>
                <MoreQuestion>Didn't find the answer to your question?</MoreQuestion>
                    <BtnContactUs
                        to="contactUs"
                        smooth={true}
                        duration={800}
                        offset={-112}
                    >Contact Us<div style={{
                                            width: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000000',
                                            marginLeft: '12px'}}></div>
                    </BtnContactUs>
            </WrapperMore>
        </FaqBox>
        </Element>
    )
}