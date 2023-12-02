import React from 'react';
import {FaqBox, TitleFaq, BtnFaq, QuestionFaq, AnswerFaq, WrapperFaq, WrapperMore, MoreQuestion, BtnContactUs} from './Faq.styled';
// import { useState } from 'react';
// import { BtnContact } from 'components/ContactUs/ContactUs.styled';

export const Faq = () => {
    // const [text, setText] = useState();
    // const [buttonText, setButtonText] = useState();

    return (
        <FaqBox>
            <TitleFaq>Frequently Asked Questions</TitleFaq>
            
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq>+</BtnFaq>How do wind turbines and solar panels work together 
                            in a renewable energy system?
                        </QuestionFaq>
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
                    </WrapperFaq>
                
                
                    <WrapperFaq>
                    
                        <QuestionFaq><BtnFaq>+</BtnFaq>What sets EcoSolution's renewable energy solutions apart 
                            from others on the market?
                        </QuestionFaq>
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
                    </WrapperFaq>
                
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq>+</BtnFaq>How can businesses and communities benefit from integrating 
                            renewable energy solutions from EcoSolution?
                        </QuestionFaq>
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
                    </WrapperFaq>
                
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq>+</BtnFaq>What measures does EcoSolution take to ensure the environmental 
                            sustainability of its products?
                        </QuestionFaq>
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
                    </WrapperFaq>
                
                
                    <WrapperFaq>
                        <QuestionFaq><BtnFaq>+</BtnFaq>How does EcoSolution engage with local communities and support a 
                            just transition to renewable energy?
                        </QuestionFaq>
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
                    </WrapperFaq>
                
        
            <WrapperMore>
                <MoreQuestion>Didn't find the answer to your question?</MoreQuestion>
                <BtnContactUs>Contact Us<div style={{
                                            width: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000000',
                                            marginLeft: '12px'}}></div>
                </BtnContactUs>
            </WrapperMore>
        </FaqBox>
    )
}