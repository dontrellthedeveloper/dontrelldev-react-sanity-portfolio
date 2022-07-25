import React from 'react';
import './App.scss';

import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import {Navbar} from './components'
import VideoHeader from "./container/VideoHeader/VideoHeader";

const App = () => {
    return (
            <div className='app'>
                <Navbar/>
                <VideoHeader/>
                {/*<Header/>*/}
                {/*<About/>*/}
                <Work/>
                <Skills/>
                <Testimonial/>
                <Footer/>
            </div>
    );
}

export default App;