import React from 'react';
import {Navbar} from "../components";
import VideoHeader from "../container/VideoHeader/VideoHeader";
import {About, Footer, Skills, Testimonial, Work} from "../container";
import Tech from "../container/Tech";

const Homepage = () => {
    return (
        <>
            <VideoHeader/>
            <Work/>
            <Skills/>
            {/*<About/>*/}


            {/*<Testimonial/>*/}
        </>
    );
};

export default Homepage;
