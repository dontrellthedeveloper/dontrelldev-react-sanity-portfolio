import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from "framer-motion";

import { client } from '../../client';
import './Footer.scss';
import EarthCanvas from "../../components/canvas/Earth";

import { slideIn } from "../../utils/motion";



const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };



    return (
        <>
            <motion.div
                // style={{height: '600px', width: '600px'}}
                variants={slideIn("right", "tween", 0.2, 1)}
                className='earth__canvas-styles xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>

            <h2 className="head-text" style={{color: '#fff'}}>Let's Chat</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email2} alt="email" />
                    <a href="mailto:dontrellthedeveloper@gmail.com" className="p-text" rel="noreferrer">dontrellthedeveloper@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+1 (404) 301-9007" className="p-text">+1 (754) 422-0765</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <form
                    action='https://formspree.io/f/myyvznjz'
                    method='POST'
                    className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Name..." name="name"
                               // value={username}
                               // onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Email..." name="email"
                               // value={email}
                               // onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Phone Number..." name="phone"
                            // value={email}
                            // onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                    <textarea
                        className="p-text"
                        placeholder="Message..."
                        // value={message}
                        name="message"
                        // onChange={handleChangeInput}
                    />
                    </div>
                    <button type="submit" className="p-text"
                            // onClick={handleSubmit}
                    >
                        {!loading ? 'Send Message' : 'Sending...'}
                    </button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>

            )}
        </>
    );
};

// export default Footer;

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    '',
);






