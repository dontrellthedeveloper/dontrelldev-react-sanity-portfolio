import React from 'react';
import {Navbar} from "../components";
import VideoHeader from "../container/VideoHeader/VideoHeader";
import {Footer, Skills, Testimonial, Work} from "../container";

const Homepage = () => {
    return (
        <>
            <VideoHeader/>
            <Work/>
            <Skills/>


            {/*<Testimonial/>*/}
        </>
    );
};

export default Homepage;
