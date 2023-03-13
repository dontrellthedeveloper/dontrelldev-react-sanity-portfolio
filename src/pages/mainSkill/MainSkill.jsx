import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrap} from "../../wrapper";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {client, urlFor} from "../../client";
import {Link, useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AiFillChrome, AiFillGithub, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLink} from "react-icons/ai";

import './MainSkill.scss';
import {Helmet} from "react-helmet";
import ReactTooltip from "react-tooltip";
import {TbListDetails} from "react-icons/tb";
import {Work} from "../../container";
import {BallCanvas} from "../../components/canvas";

const MainSkill = () => {
    const [mainSkill, setMainSkill] = useState(null);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const [skillsBackEnd, setSkillsBackEnd] = useState([]);
    const [skillsFrontEnd, setSkillsFrontEnd] = useState([]);
    const [skillsCloud, setSkillsCloud] = useState([]);
    const [skillsDatabase, setSkillsDatabase] = useState([]);
    const [worksFrontEnd, setWorksFrontEnd] = useState([]);
    const [worksBackEnd, setWorksBackEnd] = useState([]);
    const [worksDatabase, setWorksDatabase] = useState([]);
    const [worksCloud, setWorksCloud] = useState([]);
    const [certifications, setCertifications] = useState([]);


    const {slug} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const skillsBackEndQuery = '*[_type == "skillsBackEnd"] | order(order asc)';
        const skillsFrontEndQuery = '*[_type == "skillsFrontEnd"] | order(order asc)';
        const skillsCloudQuery = '*[_type == "skillsCloud"] | order(order asc)';
        const skillsDatabaseQuery = '*[_type == "skillsDatabase"] | order(order asc)';
        const certificationsQuery = '*[_type == "certifications"] | order(order asc)';


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



    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            description,
            skillWebsite,
            imgUrl{
                asset->{
                    _id,
                    url
                }
            }

        }`).then((data) => setMainSkill(data[0]))
            .catch(console.error)
    }, [slug]);


    useEffect(() => {
        const frontEndQuery = '*[_type == "works" && workType == "frontend"] | order(order asc)';
        const backEndQuery = '*[_type == "works" && workType == "backend"] | order(order asc)';
        const databaseQuery = '*[_type == "works" && workType == "database" || workType2 == "database" || workType3 == "database"] | order(order asc)';
        const cloudQuery = '*[_type == "works" && workType == "cloud"|| workType2 == "cloud" || workType3 == "cloud"] | order(order asc)';

        client.fetch(frontEndQuery)
            .then((data) => {
                setWorksFrontEnd(data)
            })

        client.fetch(backEndQuery)
            .then((data) => {
                setWorksBackEnd(data)
            })

        client.fetch(databaseQuery)
            .then((data) => {
                setWorksDatabase(data)
            })

        client.fetch(cloudQuery)
            .then((data) => {
                setWorksCloud(data)
            })
    },[])



    if(!mainSkill) return <div>Loading.....</div>
    if(!skillsFrontEnd) return <div>Loading.....</div>
    if(!skillsBackEnd) return <div>Loading.....</div>
    if(!skillsDatabase) return <div>Loading.....</div>
    if(!skillsCloud) return <div>Loading.....</div>
    if(!worksFrontEnd) return <div>Loading.....</div>
    if(!worksBackEnd) return <div>Loading.....</div>
    if(!worksCloud) return <div>Loading.....</div>
    if(!worksDatabase) return <div>Loading.....</div>




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
                    href={urlFor(mainSkill.imgUrl).width(800).height(800).url()}
                />
            </Helmet>


            <h4 className='head-text'  style={{marginTop: '30px', marginRight: '0', fontSize: '2rem'}}>{mainSkill.name}</h4>

            <div className='single-product__markdown2' style={{textAlign: 'center', padding: '1.5rem'}}>

                <div className='row app__flex'>
                    <Link to='#'  onClick={() => navigate(-1)} className='work__all-projects' style={{textDecoration: 'none', marginRight: '10px'}}>
                        <p><AiOutlineArrowLeft/> Back</p>
                    </Link>
                    <p> | </p>
                    <Link to='/skills' style={{marginLeft: '10px'}}  className='work__all-projects'>
                        <p> All Skills <AiOutlineArrowRight/></p>
                    </Link>
                </div>


            </div>


            <div className='app__flex' style={{height: '350px', width: '350px', backgroundColor:'#fff', display: 'block', margin: '30px auto', borderRadius: '10px' }} >
                <BallCanvas icon={urlFor(mainSkill.imgUrl)} />
            </div>


            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
            </motion.div>




            <div className='main-skills__items' style={{textAlign: 'center'}}>
                {/*<ReactMarkdown children={singleProject.bio} remarkPlugins={[remarkGfm]} />*/}
                <div className='app__skills-container' style={{margin: '3rem auto'}}>
                    <div>

                        {mainSkill.slug.current === 'cloud' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Cloud Certifications</h4>

                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {certifications?.map((certification) => (
                                        <motion.div
                                            whileInView={{opacity: [0,1]}}
                                            transition={{duration: 0.5}}
                                            className='app__cert-item app__flex'
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
                            </>
                            )}

                        {mainSkill.slug.current === 'frontend' && (
                            <>
                                <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Front-End Skills</h4>
                                <motion.div className='app__skills-list' style={{marginRight: '0'}}>
                                    {skillsFrontEnd?.map((skill) => (
                                        <Link to={'/skill/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
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
                                        <Link to={'/skill/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
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
                                        <Link to={'/skill/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
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
                                        <Link to={'/skill/' + skill.skillType + '/' + skill.slug.current} style={{textDecoration: 'none'}}>
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



            {mainSkill.slug.current === 'frontend' && (
            <div style={{maxWidth: '1200px'}}>

                <div className='app__work-filter'>
                    <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Front-End Projects</h4>
                </div>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
                {worksFrontEnd.map((work, index) => (

                    <div className='app__work-item app__flex' key={index} >

                        <Link to={'/' + work.slug.current}>
                            <div className='app__work-img app__flex'>

                                <img src={urlFor(work.imgUrl)} alt={work.name} />

                                <motion.div
                                    whileHover={{opacity: [0,1]}}
                                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                    className='app__work-hover app__flex'
                                >
                                    {work.codeLink && (
                                        <a href={work.codeLink} target='_blank' rel="noreferrer">
                                            <motion.div
                                                whileInView={{scale: [0, 1]}}
                                                whileHover={{scale: [1,0.9]}}
                                                transition={{duration: 0.25}}
                                                className='app__flex'
                                            >
                                                <TbListDetails/>
                                            </motion.div>
                                        </a>
                                    )}
                                </motion.div>
                            </div>

                        </Link>


                        <div className='app__work-content app__flex'>


                            <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                <h4 className='bold-text'>{work.title}</h4>
                            </Link>

                            <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{work.description}
                                </p>
                            </Link>

                            <div className='app__flex'>
                                <a href={work.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillChrome className='work__mobile-link-svg'/></div></a>
                                <a href={work.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>
                            </div>

                            <div className='app__work-tag2 app__flex'>
                                <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}} >
                                    <p className='p-text'>{work.tags[0]}</p>
                                </Link>
                            </div>


                            <div className='app__work-tag app__flex'>
                                <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}}>
                                    <p className='p-text'>Click for Details</p>
                                </Link>
                            </div>

                        </div>
                    </div>

                ))}
            </motion.div>
            </div>
            )}


            {mainSkill.slug.current === 'backend' && (
                <div style={{maxWidth: '1200px'}}>

                    <div className='app__work-filter'>
                        <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Full-Stack Projects</h4>
                    </div>

                    <motion.div
                        animate={animateCard}
                        transition={{duration: 0.5, delayChildren: 0.5}}
                        className='app__work-portfolio'
                    >
                        {worksBackEnd.map((work, index) => (

                            <div className='app__work-item app__flex' key={index} >

                                <Link to={'/' + work.slug.current}>
                                    <div className='app__work-img app__flex'>

                                        <img src={urlFor(work.imgUrl)} alt={work.name} />

                                        <motion.div
                                            whileHover={{opacity: [0,1]}}
                                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                            className='app__work-hover app__flex'
                                        >
                                            {work.codeLink && (
                                                <a href={work.codeLink} target='_blank' rel="noreferrer">
                                                    <motion.div
                                                        whileInView={{scale: [0, 1]}}
                                                        whileHover={{scale: [1,0.9]}}
                                                        transition={{duration: 0.25}}
                                                        className='app__flex'
                                                    >
                                                        <TbListDetails/>
                                                    </motion.div>
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>

                                </Link>


                                <div className='app__work-content app__flex'>


                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <h4 className='bold-text'>{work.title}</h4>
                                    </Link>

                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{work.description}
                                        </p>
                                    </Link>

                                    <div className='app__flex'>
                                        <a href={work.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillChrome className='work__mobile-link-svg'/></div></a>
                                        <a href={work.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>
                                    </div>

                                    <div className='app__work-tag2 app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}} >
                                            <p className='p-text'>{work.tags[0]}</p>
                                        </Link>
                                    </div>


                                    <div className='app__work-tag app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}}>
                                            <p className='p-text'>Click for Details</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </motion.div>
                </div>
            )}


            {mainSkill.slug.current === 'database' && (
                <div style={{maxWidth: '1200px'}}>

                    <div className='app__work-filter'>
                        <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>Database/Headless CMS Projects</h4>
                    </div>

                    <motion.div
                        animate={animateCard}
                        transition={{duration: 0.5, delayChildren: 0.5}}
                        className='app__work-portfolio'
                    >
                        {worksDatabase.map((work, index) => (

                            <div className='app__work-item app__flex' key={index} >

                                <Link to={'/' + work.slug.current}>
                                    <div className='app__work-img app__flex'>

                                        <img src={urlFor(work.imgUrl)} alt={work.name} />

                                        <motion.div
                                            whileHover={{opacity: [0,1]}}
                                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                            className='app__work-hover app__flex'
                                        >
                                            {work.codeLink && (
                                                <a href={work.codeLink} target='_blank' rel="noreferrer">
                                                    <motion.div
                                                        whileInView={{scale: [0, 1]}}
                                                        whileHover={{scale: [1,0.9]}}
                                                        transition={{duration: 0.25}}
                                                        className='app__flex'
                                                    >
                                                        <TbListDetails/>
                                                    </motion.div>
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>

                                </Link>


                                <div className='app__work-content app__flex'>


                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <h4 className='bold-text'>{work.title}</h4>
                                    </Link>

                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{work.description}
                                        </p>
                                    </Link>

                                    <div className='app__flex'>
                                        <a href={work.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillChrome className='work__mobile-link-svg'/></div></a>
                                        <a href={work.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>
                                    </div>

                                    <div className='app__work-tag2 app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}} >
                                            <p className='p-text'>{work.tags[0]}</p>
                                        </Link>
                                    </div>


                                    <div className='app__work-tag app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}}>
                                            <p className='p-text'>Click for Details</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </motion.div>
                </div>
            )}


            {mainSkill.slug.current === 'cloud' && (
                <div style={{maxWidth: '1200px'}}>

                    <div className='app__work-filter'>
                        <h4 className='head-text app__skills-heading'  style={{marginTop: '30px', marginRight: '0'}}>AWS Projects</h4>
                    </div>

                    <motion.div
                        animate={animateCard}
                        transition={{duration: 0.5, delayChildren: 0.5}}
                        className='app__work-portfolio'
                    >
                        {worksCloud.map((work, index) => (

                            <div className='app__work-item app__flex' key={index} >

                                <Link to={'/' + work.slug.current}>
                                    <div className='app__work-img app__flex'>

                                        <img src={urlFor(work.imgUrl)} alt={work.name} />

                                        <motion.div
                                            whileHover={{opacity: [0,1]}}
                                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                            className='app__work-hover app__flex'
                                        >
                                            {work.codeLink && (
                                                <a href={work.codeLink} target='_blank' rel="noreferrer">
                                                    <motion.div
                                                        whileInView={{scale: [0, 1]}}
                                                        whileHover={{scale: [1,0.9]}}
                                                        transition={{duration: 0.25}}
                                                        className='app__flex'
                                                    >
                                                        <TbListDetails/>
                                                    </motion.div>
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>

                                </Link>


                                <div className='app__work-content app__flex'>


                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <h4 className='bold-text'>{work.title}</h4>
                                    </Link>

                                    <Link to={'/' + work.slug.current} style={{textDecoration: 'none'}}>
                                        <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{work.description}
                                        </p>
                                    </Link>

                                    <div className='app__flex'>
                                        <a href={work.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillChrome className='work__mobile-link-svg'/></div></a>
                                        <a href={work.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>
                                    </div>

                                    <div className='app__work-tag2 app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}} >
                                            <p className='p-text'>{work.tags[0]}</p>
                                        </Link>
                                    </div>


                                    <div className='app__work-tag app__flex'>
                                        <Link to={'/' + work.slug.current} style={{textDecoration: 'none', fontWeight: '900'}}>
                                            <p className='p-text'>Click for Details</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default AppWrap(
    MotionWrap(MainSkill, 'app__works'),
    'singleskill',
    'app__primarybg'
);
