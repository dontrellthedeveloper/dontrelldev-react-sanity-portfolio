import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import './About.scss';

import {urlFor, client} from "../../client";

import {AppWrap, MotionWrap} from "../../wrapper";


const About = () => {
    const [abouts, setAbouts] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setAbouts(data)
            })
    },[])


    useEffect(() => {
        const query = '*[_type == "skills"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setSkills(data)
            })
    },[])

    return (
        <>
         <h2 className='head-text'>
             I know That <span>Good Apps</span><br/>means <span>Good Business</span>
         </h2>

            <div className='app__profiles'>
                {skills.map((skill, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={skill.name + index}
                    >
                        <img src={urlFor(skill.imgUrl)} alt={skill.name}/>
                        <h2 className="bold-text" style={{marginTop: 20}}>{skill.name}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{skill.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);
