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

const App = () => {
    return (
            <div className='app'>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Homepage/>} exact />
                    <Route path='/:slug' element={<SingleProject/>} />
                    <Route path='/portfolio' element={<WorkPage/>} />
                    <Route path='/skills' element={<SkillPage/>} />
                </Routes>
                <Footer/>
            </div>
    );
}

export default App;