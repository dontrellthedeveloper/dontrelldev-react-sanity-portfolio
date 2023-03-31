import React, {useState, useEffect} from 'react';
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from 'framer-motion';

import './Navbar.scss';
import {images} from "../../constants";
import {NavLink} from "react-router-dom";
import Switch from "react-switch";

const Navbar = ({toggleTheme, theme}) => {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <nav className={scroll ? 'app__navbar-scroll' : 'app__navbar'}>
            <div style={{display: 'flex', maxWidth: '1200px', width: '100%', margin: '0 auto'}}>
                <div className='app__navbar-logo'>
                    <NavLink to='/'>
                        <img src={images.logoDark} alt="logo"/>
                    </NavLink>
                </div>
                <ul className='app__navbar-links'>


                    <li className='app__flex p-text'>
                        {/*<div/>*/}
                        <NavLink to='/'>Home
                        </NavLink>
                    </li>

                    <li className='app__flex p-text'>
                        {/*<div/>*/}
                        <NavLink to='/portfolio'>Portfolio
                        </NavLink>
                    </li>

                    <li className='app__flex p-text'>
                        {/*<div/>*/}
                        <NavLink to='/skills'>Skills
                        </NavLink>
                    </li>



                    {/*{['home','about','work','skills','contact'].map((item)=> (*/}
                    {/*{['home','work','skills','contact'].map((item)=> (*/}
                    {/*    <li className='app__flex p-text' key={`link-${item}`}>*/}
                    {/*        <div/>*/}
                    {/*        <a href={`#${item}`}>{item}</a>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
                <div className='app__navbar-switch'>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        uncheckedIcon={false}
                        checkedIcon={false}

                        // onColor={}
                        // onHandleColor={}
                    />
                </div>

            </div>




            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <div
                        // whileInView={{x: [300, 0]}}
                        // transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {/*{['home','about','work','skills','contact'].map((item)=> (*/}
                            {/*    <li key={item}>*/}
                            {/*        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>*/}
                            {/*    </li>*/}
                            {/*))}*/}
                            <li>

                                <NavLink to='/' onClick={() => setToggle(false)}>Home
                                </NavLink>
                            </li>

                            <li>

                                <NavLink to='/portfolio' onClick={() => setToggle(false)}>Portfolio
                                </NavLink>
                            </li>

                            <li>

                                <NavLink to='/skills' onClick={() => setToggle(false)}>Skills
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
