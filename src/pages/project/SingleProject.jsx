import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrap} from "../../wrapper";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {client, urlFor} from "../../client";
import {Link, useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AiFillChrome, AiFillGithub, AiOutlineArrowLeft, AiOutlineLink} from "react-icons/ai";

import './SingleProject.scss';

const SingleProject = () => {
    const [singleProject, setSingleProject] = useState(null);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const {slug} = useParams();

    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            tags,
            projectLink,
            codeLink,
            description,
            bio,
            bio2,
            imgUrl{
                asset->{
                    _id,
                    url
                }
            },
            imgUrl2{
                asset->{
                    _id,
                    url
                }
            },
            imgUrl3{
                asset->{
                    _id,
                    url
                }
            },
            imgUrl4{
                asset->{
                    _id,
                    url
                }
            },

        }`).then((data) => setSingleProject(data[0]))
            .catch(console.error)
    }, [slug]);

    if(!singleProject) return <div>Loading.....</div>



    const markdown = singleProject.bio

    return (
        <div>
            {/*{singleProject.imgUrl && (*/}
            {/*    <div>*/}
            {/*        <img src={urlFor(singleProject.imgUrl).width(800).height(800).url()}/>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className='single-product__markdown2' style={{textAlign: 'center'}}>
                <ReactMarkdown children={singleProject.bio2} remarkPlugins={[remarkGfm]} />
                <Link to='/portfolio' className='work__all-projects'>
                    <p style={{marginBottom: '20px'}}><AiOutlineArrowLeft/> All Projects</p>
                </Link>
            </div>




                <motion.div
                    animate={animateCard}
                    transition={{duration: 0.5, delayChildren: 0.5}}
                    className='app__work-portfolio'
                >
                    <div className='app__work-item2 app__flex' style={{marginTop: '0'}}>
                        <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                        <div className='app__work-img2 app__flex'>
                            <img src={urlFor(singleProject.imgUrl2)} alt={singleProject.title} />
                            <motion.div
                                whileHover={{opacity: [0,1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className='app__work-hover app__flex'
                            >
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1,0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        {/*<AiFillEye/>*/}
                                        <AiFillChrome/>
                                    </motion.div>
                                </a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer">
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
                        </a>
                        <div className='app__work-content app__flex' style={{display: "none"}}>
                            <div className='app__flex'>
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiOutlineLink className='work__mobile-link-svg'/></div></a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>

                            </div>
                            <h4 className='bold-text'>{singleProject.title}</h4>
                            <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{singleProject.description}</p>




                            {/*<div className='app__work-tag2 app__flex'>*/}
                            {/*    <p className='p-text'>{singleProject.tags[0]}</p>*/}
                            {/*</div>*/}


                            <div className='app__work-tag app__flex'>
                                <p className='p-text'>Click to Visit Website</p>
                            </div>

                        </div>
                    </div>
                </motion.div>




            <div className='single-product__markdown' style={{textAlign: 'center'}}>
                <ReactMarkdown children={singleProject.bio} remarkPlugins={[remarkGfm]} />
            </div>


            <div className='app__work-item-img'>

                <motion.div
                    animate={animateCard}
                    transition={{duration: 0.5, delayChildren: 0.5}}
                    className='app__work-portfolio'
                >
                    <div className='app__work-item2 app__flex' style={{width: '100%'}}>
                        <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                        <div className='app__work-img2 app__flex'>
                            <img src={urlFor(singleProject.imgUrl3)} alt={singleProject.title} />
                            <motion.div
                                whileHover={{opacity: [0,1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className='app__work-hover app__flex'
                            >
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1,0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        {/*<AiFillEye/>*/}
                                        <AiFillChrome/>
                                    </motion.div>
                                </a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer">
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
                        </a>
                        <div className='app__work-content app__flex' style={{display: "none"}}>
                            <div className='app__flex'>
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiOutlineLink className='work__mobile-link-svg'/></div></a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>

                            </div>
                            <h4 className='bold-text'>{singleProject.title}</h4>
                            <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{singleProject.description}</p>




                            {/*<div className='app__work-tag2 app__flex'>*/}
                            {/*    <p className='p-text'>{singleProject.tags[0]}</p>*/}
                            {/*</div>*/}


                            {/*<div className='app__work-tag app__flex'>*/}
                            {/*    <p className='p-text'>Click to visit Website</p>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={animateCard}
                    transition={{duration: 0.5, delayChildren: 0.5}}
                    className='app__work-portfolio'
                >
                    <div className='app__work-item2 app__flex' style={{width: '100%'}}>
                        <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                        <div className='app__work-img2 app__flex'>
                            <img src={urlFor(singleProject.imgUrl4)} alt={singleProject.title} />
                            <motion.div
                                whileHover={{opacity: [0,1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className='app__work-hover app__flex'
                            >
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1,0.9]}}
                                        transition={{duration: 0.25}}
                                        className='app__flex'
                                    >
                                        {/*<AiFillEye/>*/}
                                        <AiFillChrome/>
                                    </motion.div>
                                </a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer">
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
                        </a>
                        <div className='app__work-content app__flex' style={{display: "none"}}>
                            <div className='app__flex'>
                                <a href={singleProject.projectLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiOutlineLink className='work__mobile-link-svg'/></div></a>
                                <a href={singleProject.codeLink} target='_blank' rel="noreferrer"><div className='app__flex work__mobile-links'><AiFillGithub className='work__mobile-link-svg'/></div></a>

                            </div>
                            <h4 className='bold-text'>{singleProject.title}</h4>
                            <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{singleProject.description}</p>




                            {/*<div className='app__work-tag2 app__flex'>*/}
                            {/*    <p className='p-text'>{singleProject.tags[0]}</p>*/}
                            {/*</div>*/}


                            {/*<div className='app__work-tag app__flex'>*/}
                            {/*        <p className='p-text'>Click for More Details</p>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default AppWrap(
    MotionWrap(SingleProject, 'app__works'),
    'singleproduct',
    'app__primarybg'
);
