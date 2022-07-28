import React from 'react';
import './App.scss';

import {Footer, Skills, Testimonial, Work} from './container';
import {Navbar} from './components'
import VideoHeader from "./container/VideoHeader/VideoHeader";

const App = () => {
    return (
            <div className='app'>
                <Navbar/>
                <VideoHeader/>
                <Work/>
                <Skills/>
                <Testimonial/>
                <Footer/>
            </div>
    );
}

export default App;