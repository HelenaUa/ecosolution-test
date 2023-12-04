import React from 'react';
import { Element } from 'react-scroll';
import {ContactBox, 
        TitleContact, 
        DivContact, 
        WrapperContact, 
        DataContact, 
        NameContact, 
        LinkContact, 
        FormCon, 
        Input, 
        BtnContact, 
        Arrow, 
        LabelStyle} from './ContactUs.styled';
import call from 'images/contact/call.png';
import sms from 'images/contact/sms.png';
import map from 'images/contact/map.png';
import facebook from 'images/contact/facebook.png';
import instagram from 'images/contact/instagram.png';
import { Formik, ErrorMessage } from 'formik';


export const ContactUs = () => {
    return (
        <Element name="contactUs">
        <ContactBox id="contactUs">
            <TitleContact>Contact us</TitleContact>
                <DivContact>
                    <WrapperContact>
                        <DataContact>
                            <NameContact>Phone:</NameContact>
                            <LinkContact href='tel:+380981234567'>
                            <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${call}`} alt='icon phone'/>38 (098) 12 34 567
                            </LinkContact>
                            <LinkContact href='tel:+380931234567'>
                            <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${call}`} alt='icon phone'/>38 (093) 12 34 567
                            </LinkContact>
                        </DataContact>
                        <DataContact>
                            <NameContact>E-mail:</NameContact>
                            <LinkContact href='mailto:office@ecosolution.com'>
                            <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${sms}`} alt='icon envelope'/>office@ecosolution.com
                            </LinkContact>
                        </DataContact>
                        <DataContact>
                            <NameContact>Address:</NameContact>
                            <LinkContact href='https://goo.gl/maps/U55JzRCZsnBUYqKL8'>
                            <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${map}`} alt='icon map'/>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                            </LinkContact>
                        </DataContact>
                        <DataContact>
                            <NameContact style={{marginBottom: '20px'}}>Social Networks:</NameContact>
                            <div style={{display: 'flex', flexDirection: 'row', gap: '32px'}}> 
                                <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${facebook}`} alt='icon facebook'/>
                                <img style={{marginRight: '4px', width: '24px', height: '24px'}} srcSet={`${instagram}`} alt='icon instagram'/>
                            </div>
                        </DataContact>
                    </WrapperContact>

                    <div>
                        <Formik initialValues={{ name: '', email: '', phone: '', message: '' }}>
                            <FormCon autoComplete="off">
                                <LabelStyle htmlFor="name">
                                    Full name:
                                <Input
                                    type="text"
                                    name="name"
                                    // value={name}
                                    // onChange={onChangeName}
                                    placeholder="John Rosie"
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                    required
                                />
                                <ErrorMessage name="name" component="div" />
                                </LabelStyle>
                                <LabelStyle htmlFor="email">
                                    E-mail:
                                <Input
                                    type="text"
                                    name="email"
                                    // value={phone}
                                    // onChange={onChangePhone}
                                    placeholder="johnrosie@gmail.com"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                    required
                                />
                                <ErrorMessage name="phone" component="div" />
                                </LabelStyle>
                                <LabelStyle htmlFor="phone" >
                                    Phone:
                                <Input
                                    type="tel"
                                    name="phone"
                                    // value={phone}
                                    // onChange={onChangePhone}
                                    placeholder="380961234567"
                                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                    required
                                />
                                <ErrorMessage name="phone" component="div" />
                                </LabelStyle>
                                <LabelStyle htmlFor="message" >
                                    Message:
                                <Input style={{height: '130px', alignItems: 'flex-start'}}
                                    type="tel"
                                    name="message"
                                    // value={phone}
                                    // onChange={onChangePhone}
                                    placeholder="Your message"
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                    required
                                />
                                <ErrorMessage name="phone" component="div" />
                                </LabelStyle>
                                
                                <BtnContact type="submit">Send<Arrow /></BtnContact>
                            </FormCon>
                        </Formik> 
                    </div>
                </DivContact>
        </ContactBox>
        </Element>
    )
}