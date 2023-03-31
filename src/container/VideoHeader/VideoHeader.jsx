import React, {useEffect, useState} from 'react';
import videoBg from '../../assets/websitewarehouse10.mp4';
import './VideoHeader.scss';
import { VideoWrap} from "../../wrapper";
import {motion} from "framer-motion";
import {images} from "../../constants";
import {client, urlFor} from "../../client";
import {AiFillGithub, AiOutlineLink} from "react-icons/ai";
import Tilt from "react-tilt";
import {fadeIn, slideIn} from "../../utils/motion";

import Div100vh from 'react-div-100vh'
import { use100vh } from 'react-div-100vh'
import AutoPlaySilentVideo from "../../components/VideoSilent";
import {Link} from "react-router-dom";
import {TbListDetails} from "react-icons/tb";
import ComputersCanvas from "../../components/canvas/Computer";

const scaleVariants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}






const VideoHeader = () => {
    const [abouts, setAbouts] = useState([]);
    const [skills, setSkills] = useState([]);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const height = use100vh()

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


        <div className='video-bg' style={{height: '100vh'}}>
            <div className="video-overlay"></div>
            <AutoPlaySilentVideo/>

            <div className="video-text">


                <motion.div
                    whileInView={{opacity: [0,1]}}
                    transition={{duration: 0.5, delayChildren: 0.5}}
                    className='video__header-img'
                >
                    <img src={images.profile2} alt="profile_bg"/>
                    <motion.img
                        whileInView={{scale: [0,1]}}
                        transition={{duration: 1, ease: 'easeInOut'}}
                        className='overlay_circle'
                        src={images.circle}
                        alt='profile_cirle'
                    />
                </motion.div>





                <motion.div
                    className='video__profiles'
                >



                    {skills.map((skill, index) => (

                            <motion.div
                                whileInView={{opacity: 1}}
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.5, type: 'tween'}}
                                className="app__profile-item"
                                key={skill.name + index}
                            >


                                <div className='video__about-item '>
                                    <div className='video__work-img video__flex'>


                                        <img src={urlFor(skill.imgUrl)} alt={skill.name}/>


                                        <motion.div
                                            whileHover={{opacity: [0,1]}}
                                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                            className='video__work-hover video__flex'
                                        >

                                                <Link to={'/skill/' + skill.slug.current}>

                                                <motion.div
                                                    whileInView={{scale: [0, 1]}}
                                                    whileHover={{scale: [1,0.9]}}
                                                    transition={{duration: 0.25}}
                                                    className='video__flex'
                                                >
                                                    <TbListDetails/>
                                                </motion.div>

                                                </Link>
                                            {/*</a>*/}
                                        </motion.div>
                                        <h2 className="p-text video__card-text" style={{ textAlign: 'center'}}>{skill.description}
                                        </h2>


                                    </div>
                                </div>
                            </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>

    );
};


export default VideoWrap(VideoHeader, 'home');

