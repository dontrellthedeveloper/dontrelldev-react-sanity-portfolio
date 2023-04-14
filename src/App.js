import React, {createContext, useState} from 'react';
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
import SingleSkill from "./pages/skill/SingleSkill";
import StarsCanvas from "./components/canvas/Stars";


export const ThemeContext = createContext(null)



const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((current)=> (current === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            <div className='app' id={theme}>
                <Helmet>
                    <title>Web Development by Dontrell Washington</title>
                    <meta
                        name='description'
                        content='Web development portfolio for Dontrell Washington'
                    />
                    <meta name='keywords' content='Coding, Web Development, Engineering'/>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="%PUBLIC_URL%/fav.png"
                    />
                </Helmet>
                <Navbar toggleTheme={toggleTheme} theme={theme}/>
                <Routes>
                    <Route exact path='/' element={<Homepage/>} />
                    <Route path='/:slug' element={<SingleProject/>} />
                    <Route path='/skill/:slug' element={<MainSkill/>} />
                    <Route path='/skill/:slug/:slug' element={<SingleSkill/>} />
                    <Route path='/portfolio' element={<WorkPage/>} />
                    <Route path='/skills' element={<SkillPage/>} />
                </Routes>
                <div style={{position: "relative", zIndex: '0'}}>
                    <Footer/>
                    <StarsCanvas />
                </div>

            </div>
        </ThemeContext.Provider>

    );
}

export default App;
