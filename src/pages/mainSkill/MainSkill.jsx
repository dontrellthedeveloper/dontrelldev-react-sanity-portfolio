import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrap} from "../../wrapper";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {client, urlFor} from "../../client";
import {Link, useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AiFillChrome, AiFillGithub, AiOutlineArrowLeft, AiOutlineLink} from "react-icons/ai";

import './MainSkill.scss';
import {Helmet} from "react-helmet";
import ReactTooltip from "react-tooltip";

const MainSkill = () => {
    const [mainSkill, setMainSkill] = useState(null);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const [skillsBackEnd, setSkillsBackEnd] = useState([]);
    const [skillsFrontEnd, setSkillsFrontEnd] = useState([]);
    const [skillsCloud, setSkillsCloud] = useState([]);
    const [skillsDatabase, setSkillsDatabase] = useState([]);

    const {slug} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const query = '*[_type == "experiences"] | order(order asc)';
        const skillsBackEndQuery = '*[_type == "skillsBackEnd"] | order(order asc)';
        const skillsFrontEndQuery = '*[_type == "skillsFrontEnd"] | order(order asc)';
        const skillsCloudQuery = '*[_type == "skillsCloud"] | order(order asc)';
        const skillsDatabaseQuery = '*[_type == "skillsDatabase"] | order(order asc)';

        // client.fetch(query)
        //     .then((data) => {
        //         setExperience(data)
        //     })


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

    },[])



    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            description,
            imgUrl{
                asset->{
                    _id,
                    url
                }
            }

        }`).then((data) => setMainSkill(data[0]))
            .catch(console.error)
    }, [slug]);


    if(!mainSkill) return <div>Loading.....</div>



    // const markdown = singleProject.bio

    return (
        <div>
            <Helmet>
                <title>{mainSkill.name}</title>
                <meta
                    name='description'
                    content={mainSkill.description}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    // href="%PUBLIC_URL%/logo152.png"
                    href={urlFor(mainSkill.imgUrl).width(800).height(800).url()}
                />
            </Helmet>


            <h4 className='head-text'  style={{marginTop: '30px', marginRight: '0', fontSize: '2rem'}}>{mainSkill.name}</h4>

            <div className='single-product__markdown2' style={{textAlign: 'center', padding: '1.5rem'}}>
                {/*<Link to='#' onClick={() => navigate(-1)} className='work__all-projects'>*/}
                <Link to='/skills' className='work__all-projects'>
                    <p><AiOutlineArrowLeft/> All Skills</p>
                </Link>
            </div>




            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
                <div className='app__skill-item2 app__flex' style={{marginTop: '0'}}>

                        <div className='app__work-img2 app__flex'>
                            <img src={urlFor(mainSkill.imgUrl)} alt={mainSkill.name} />
                            <motion.div
                                whileHover={{opacity: [0,1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className='app__work-hover app__flex'
                            >
                                {/*<a href={singleProject.projectLink} target='_blank' rel="noreferrer">*/}
                                {/*    <motion.div*/}
                                {/*        whileInView={{scale: [0, 1]}}*/}
                                {/*        whileHover={{scale: [1,0.9]}}*/}
                                {/*        transition={{duration: 0.25}}*/}
                                {/*        className='app__flex'*/}
                                {/*    >*/}
                                {/*        /!*<AiFillEye/>*!/*/}
                                {/*        <AiFillChrome/>*/}
                                {/*    </motion.div>*/}
                                {/*</a>*/}
                                <a href='https://github.com/dontrellthedeveloper' target='_blank' rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1,0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        <AiFillGithub/>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>


                    <div className='app__work-content app__flex' style={{display: "none"}}>
                        {/*<div className='app__flex'>*/}
                        {/*    <a href={singleProject.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiOutlineLink className='work__mobile-link-svg'/></div></a>*/}
                        {/*    <a href={singleProject.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>*/}

                        {/*</div>*/}
                        <h4 className='bold-text'>{mainSkill.name}</h4>
                        <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{mainSkill.description}</p>




                        {/*<div className='app__work-tag2 app__flex'>*/}
                        {/*    <p className='p-text'>{singleProject.tags[0]}</p>*/}
                        {/*</div>*/}


                        <div className='app__work-tag app__flex'>
                            <p className='p-text'>Click to Visit Website</p>
                        </div>

                    </div>
                </div>
            </motion.div>




            <div className='main-skills__items' style={{textAlign: 'center'}}>
                {/*<ReactMarkdown children={singleProject.bio} remarkPlugins={[remarkGfm]} />*/}
                <div className='app__skills-container' style={{margin: '3rem auto'}}>
                    <div>

                        {mainSkill.slug.current === 'frontend' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Front-End Skills</h4>
                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {skillsFrontEnd?.map((skill) => (
                                        <Link to={'/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
                                            <motion.div
                                                whileInView={{opacity: [0,1]}}
                                                transition={{duration: 0.5}}
                                                className='app__skills-item app__flex'
                                                key={skill.name}
                                            >
                                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                                </div>
                                                <p className='p-text skill-name_overflow'>{skill.name}</p>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </>

                        )}


                        {mainSkill.slug.current === 'backend' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Back-End Skills</h4>
                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {skillsBackEnd?.map((skill) => (
                                        <Link to={'/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
                                            <motion.div
                                                whileInView={{opacity: [0,1]}}
                                                transition={{duration: 0.5}}
                                                className='app__skills-item app__flex'
                                                key={skill.name}
                                            >
                                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                                </div>
                                                <p className='p-text skill-name_overflow'>{skill.name}</p>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </>

                        )}


                        {mainSkill.slug.current === 'database' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Database Skills</h4>
                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {skillsDatabase?.map((skill) => (
                                        <Link to={'/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
                                            <motion.div
                                                whileInView={{opacity: [0,1]}}
                                                transition={{duration: 0.5}}
                                                className='app__skills-item app__flex'
                                                key={skill.name}
                                            >
                                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                                </div>
                                                <p className='p-text skill-name_overflow'>{skill.name}</p>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </>

                        )}


                        {mainSkill.slug.current === 'cloud' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Cloud Skills</h4>
                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {skillsCloud?.map((skill) => (
                                        <Link to={'/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
                                            <motion.div
                                                whileInView={{opacity: [0,1]}}
                                                transition={{duration: 0.5}}
                                                className='app__skills-item app__flex'
                                                key={skill.name}
                                            >
                                                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                                                </div>
                                                <p className='p-text skill-name_overflow' style={{fontSize: '11px'}}>{skill.name}</p>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </>

                        )}
                    </div>



                </div>
            </div>

        </div>
    );
};

export default AppWrap(
    MotionWrap(MainSkill, 'app__works'),
    'singleskill',
    'app__primarybg'
);
