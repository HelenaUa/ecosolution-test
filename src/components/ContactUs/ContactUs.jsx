import React from 'react';

export const ContactUs = () => {
    return (
        <div>
            <h2></h2>
            <div>
                <ul>
                    <li>
                        <p></p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                        </a>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <p></p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <p></p>
                        <a>
                            <svg>
                                <use></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <p></p>
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
                        <input type="name" name="name" required placeholder="John Rosie" />
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