import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Footer, Skills, Testimonial, Work} from './container';
import Homepage from "./pages/Homepage";
import {Navbar} from './components'
import VideoHeader from "./container/VideoHeader/VideoHeader";
import SingleProject from "./pages/project/SingleProject";
import WorkPage from "./pages/work/WorkPage";
import SkillPage from "./pages/skills/SkillPage";
import {Helmet} from "react-helmet";
import MainSkill from "./pages/mainSkill/MainSkill";

const App = () => {
    return (
            <div className='app'>
                <Helmet>
                    <title>Web Development by Dontrell</title>
                    <meta
                        name='description'
                        content='Web development portfolio for Dontrell Washington'
                    />
                    <meta name='keywords' content='Coding, Web Development, Engineering'/>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="%PUBLIC_URL%/dev2.png"
                    />
                </Helmet>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Homepage/>} />
                    <Route path='/:slug' element={<SingleProject/>} />
                    <Route path='/skill/:slug' element={<MainSkill/>} />
                    <Route path='/portfolio' element={<WorkPage/>} />
                    <Route path='/skills' element={<SkillPage/>} />
                </Routes>
                <Footer/>
            </div>
    );
}

export default App;