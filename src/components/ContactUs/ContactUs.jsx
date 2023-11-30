import React from 'react';

export const ContactUs = () => {
    return (
        <div>
            <h2>Contact us</h2>
            <div>
                <ul>
                    <li>
                        <p>Phone:</p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                            38 (098) 12 34 567
                        </a>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                            38 (093) 12 34 567
                        </a>
                    </li>
                    <li>
                        <p>E-mail:</p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                            office@ecosolution.com
                        </a>
                    </li>
                    <li>
                        <p>Address:</p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                        </a>
                    </li>
                    <li>
                        <p>Social Networks:</p>
                        <svg>
                            <use></use>
                        </svg>
                        <svg>
                            <use></use>
                        </svg>
                    </li>
                </ul>
            </div>
            <div>
                <form>
                    <label>
                        <span>Full name:</span>
                        <input required placeholder="John Rosie" />
                    </label>
                    <label>
                        <span>E-mail:</span>
                        <input type="email" name="email" required placeholder="johnrosie@gmail.com" />
                    </label>
                    <label>
                        <span>Phone:</span>
                        <input type="phone" name="phone" required placeholder="380961234567" />
                    </label>
                    <label>
                        <span>Message:</span>
                        <input type="message" name="message" required placeholder="Your message" />
                    </label>  
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}