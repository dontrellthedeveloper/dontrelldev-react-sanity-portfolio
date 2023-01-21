import React, {useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import ReactTooltip from "react-tooltip";

import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client';

import './Skills.scss';

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [skillsBackEnd, setSkillsBackEnd] = useState([]);
    const [skillsFrontEnd, setSkillsFrontEnd] = useState([]);
    const [skillsCloud, setSkillsCloud] = useState([]);
    const [skillsDatabase, setSkillsDatabase] = useState([]);
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"] | order(order asc)';
        const skillsQuery = '*[_type == "experiences"] | order(order asc)';
        const skillsBackEndQuery = '*[_type == "skillsBackEnd"] | order(order asc)';
        const skillsFrontEndQuery = '*[_type == "skillsFrontEnd"] | order(order asc)';
        const skillsCloudQuery = '*[_type == "skillsCloud"] | order(order asc)';
        const skillsDatabaseQuery = '*[_type == "skillsDatabase"] | order(order asc)';
        const certificationsQuery = '*[_type == "certifications"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setExperience(data)
            })

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data)
            })

        client.fetch(skillsFrontEndQuery)
            .then((data) => {
                setSkillsFrontEnd(data)
            })

        client.fetch(skillsBackEndQuery)
            .then((data) => {
                setSkillsBackEnd(data)
            })

        client.fetch(skillsCloudQuery)
            .then((data) => {
                setSkillsCloud(data)
            })

        client.fetch(skillsDatabaseQuery)
            .then((data) => {
                setSkillsDatabase(data)
            })

        client.fetch(certificationsQuery)
            .then((data) => {
                setCertifications(data)
            })
    },[])

    return (
        <div style={{maxWidth: '1400px'}}>
            <h2 className='head-text'>Development Skills</h2>
            <div className='app__skills-container' style={{margin: '3rem auto'}}>
                <div>
                    <h4 className='head-text app__skills-heading'>Front-End Skills</h4>
                    <motion.div className='app__skills-list'>
                        {skillsFrontEnd?.map((skill) => (
                            <motion.div
                                whileInView={{opacity: [0,1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                                key={skill.name}
                            >
                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                </div>
                                <p className='p-text'>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>



                    <h4 className='head-text app__skills-heading'  style={{marginTop: '30px'}}>Back-End Skills</h4>
                    <motion.div className='app__skills-list'>
                        {skillsBackEnd?.map((skill) => (
                            <motion.div
                                whileInView={{opacity: [0,1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                                key={skill.name}
                            >
                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                </div>
                                <p className='p-text'>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <h4 className='head-text app__skills-heading'  style={{marginTop: '30px'}}>Database Skills</h4>
                    <motion.div className='app__skills-list'>
                        {skillsDatabase?.map((skill) => (
                            <motion.div
                                whileInView={{opacity: [0,1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                                key={skill.name}
                            >
                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                </div>
                                <p className='p-text'>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>


                    <h4 className='head-text app__skills-heading'  style={{marginTop: '30px'}}>Cloud Skills</h4>
                    <motion.div className='app__skills-list'>
                        {skillsCloud?.map((skill) => (
                            <motion.div
                                whileInView={{opacity: [0,1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                                key={skill.name}
                            >
                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                </div>
                                <p className='p-text' style={{fontSize: '11px'}}>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

                <div>
                    <h4 className='head-text app__skills-heading'>Certifications</h4>
                    <motion.div className='app__skills-list'>
                        {certifications?.map((certification) => (
                            <motion.div
                                whileInView={{opacity: [0,1]}}
                                transition={{duration: 0.5}}
                                className='app__skills-item app__flex'
                                key={certification.title}
                            >
                                <a href={certification.verifyLink} target='_blank' rel="noreferrer">
                                <div className='app__flex' style={{height: '150px', width: '150px'}}>
                                    <img style={{height: '100%', width: '100%'}} src={urlFor(certification.imgUrl)} alt={certification.title}/>
                                </div>
                                </a>
                                <p className='p-text'>{certification.title}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <h4 className='head-text app__skills-heading'  style={{marginTop: '30px'}}>Experience</h4>
                    <motion.div className='app__skills-exp'>
                        {experience?.map((experience) => (
                            <motion.div
                                className='app__skills-exp-item'
                                key={experience.year}
                            >
                                <div className='app__skills-exp-year'>
                                    <p className='bold-text'>{experience.year}</p>
                                </div>
                                <motion.div className='app__skills-exp-works'>
                                    {experience?.works?.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{opacity: [0,1]}}
                                                transition={{duration: 0.5}}
                                                className='app__skills-exp-work'
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}
                                            >
                                                <h4 className='bold-text'>{work.name}</h4>
                                                <p className='p-text'>{work.company}</p>
                                            </motion.div>
                                            <ReactTooltip
                                                id={work.name}
                                                effect='solid'
                                                arrowColor='#fff'
                                                className='skills=tooltip'
                                            >
                                                {work.desc}
                                            </ReactTooltip>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}



                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
);
