import React, {useEffect, useState} from 'react';
import videoBg from '../../assets/websitewarehouse10.mp4';
import './VideoHeader.scss';
import { VideoWrap} from "../../wrapper";
import {motion} from "framer-motion";
import {images} from "../../constants";
import {client, urlFor} from "../../client";
import {AiFillGithub, AiOutlineLink} from "react-icons/ai";
import Tilt from "react-tilt";
import { fadeIn } from "../../utils/motion";

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


        <Div100vh className='video-bg'>
            <div className="video-overlay"></div>
            <AutoPlaySilentVideo/>
            {/*<div dangerouslySetInnerHTML={{*/}
            {/*    __html: `<video autoplay loop muted playsinline>*/}
            {/*                    <source src=${videoBg} type="video/mp4" />*/}
            {/*                            Your browser does not support the video tag.*/}
            {/*                     </video>`,*/}
            {/*}}>*/}

            {/*</div>*/}
            <Div100vh className="video-text">

                <h2 className='video-head-text'>
                    {/*I know That <span>Good Apps</span><br/>means <span>Good Business</span>*/}

                    <motion.div
                        whileInView={{x: [-100,0], opacity: [0,1]}}
                        transition={{duration: 0.5}}
                        className='video__header-info'
                    >
                        <div className='video__header-badge'>
                            {/*<div className='badge-cmp video__flex'>*/}
                            {/*    <span>👋</span>*/}
                            {/*    <div style={{marginLeft: 20}}>*/}
                            {/*        <p className='p-text'>Hello, I'm</p>*/}
                            {/*        <h1 className='head-text'>Dontrell</h1>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className='tag-cmp video__flex'>*/}
                            {/*    <p className='p-text'>Web Developer</p>*/}
                            {/*    <p className='p-text'>Mobile Developer</p>*/}
                            {/*</div>*/}
                        </div>
                    </motion.div>
                </h2>


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





                <div className='video__profiles'
                     // style={{width: '1100px', height: '800px'}}
                >

                    {/*<ComputersCanvas />*/}

                    {skills.map((skill, index) => (


                        <Tilt
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }}
                            className='xs:w-[250px] w-full'>
                            {/*<motion.div*/}
                            {/*    variants={fadeIn("right", "spring", index * 0.5, 0.75)}*/}
                            {/*    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'*/}
                            {/*>*/}


                            <motion.div
                                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                whileInView={{opacity: 1}}
                                // whileHover={{scale: 1.1}}
                                transition={{duration: 0.5, type: 'tween'}}
                                className="video__profile-item"
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


                                            {/*<a href='https://github.com/dontrellthedeveloper' target='_blank' rel="noreferrer">*/}

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

                                        {/*<h2 className="p-text video__card-text" style={{ textAlign: 'center'}}>Visit GitHub*/}
                                        {/*</h2>*/}
                                    </div>
                                    {/*<h2 className="p-text video__card-text" style={{ textAlign: 'center'}}>{about.title}</h2>*/}
                                    {/*<p className="video__card-desc bold-text" style={{marginTop: 20}}>{about.description}</p>*/}
                                    {/*<div className='video__work-tag video__flex'>*/}
                                    {/*    <p className='p-text'>{about.title}</p>*/}
                                    {/*</div>*/}
                                </div>
                            </motion.div>
                        </Tilt>





                        // <div className='app__work-item app__flex' key={index}>
                        //     <div className='app__work-img app__flex'>
                        //         <img src={urlFor(about.imgUrl)} alt={about.title} />
                        //
                        //         <motion.div
                        //         whileHover={{opacity: [0,1]}}
                        //         transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                        //         className='app__work-hover app__flex'
                        //         >
                        //             <a href='#' target='_blank' rel="noreferrer">
                        //                 <motion.div
                        //                 whileInView={{scale: [0, 1]}}
                        //                 whileHover={{scale: [1,0.9]}}
                        //                 transition={{duration: 0.25}}
                        //                 className='app__flex'
                        //                 >
                        //                     <AiFillEye/>
                        //                 </motion.div>
                        //             </a>
                        //             <a href='#' target='_blank' rel="noreferrer">
                        //                 <motion.div
                        //                 whileInView={{scale: [0, 1]}}
                        //                 whileHover={{scale: [1,0.9]}}
                        //                 transition={{duration: 0.25}}
                        //                 className='app__flex'
                        //                 >
                        //                     <AiFillGithub/>
                        //                 </motion.div>
                        //             </a>
                        //         </motion.div>
                        //     </div>
                        //
                        //     <div className='app__work-content app__flex'>
                        //         <h4 className='bold-text'>{about.title}</h4>
                        //         <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{about.description}</p>
                        //
                        //         <div className='app__work-tag app__flex'>
                        //             <p className='p-text'>#</p>
                        //         </div>
                        //     </div>
                        // </div>





                    ))}
                </div>

                {/*<Tilt*/}
                {/*    options={{*/}
                {/*        max: 45,*/}
                {/*        scale: 1,*/}
                {/*        speed: 450,*/}
                {/*    }}*/}
                {/*    className='xs:w-[250px] w-full'>*/}
                {/*    <motion.div*/}
                {/*        variants={fadeIn("right", "spring", index * 0.5, 0.75)}*/}
                {/*        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'*/}
                {/*    >*/}
                {/*        <div*/}

                {/*            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'*/}
                {/*        >*/}
                {/*            <img*/}
                {/*                src=""*/}
                {/*                alt='web-development'*/}
                {/*                className='w-16 h-16 object-contain'*/}
                {/*            />*/}

                {/*            <h3 className='text-white text-[20px] font-bold text-center'>*/}
                {/*                Test*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*    </motion.div>*/}
                {/*</Tilt>*/}

            </Div100vh>
        </Div100vh>

    );
};

// export default VideoHeader;

export default VideoWrap(VideoHeader, 'home');

// export default VideoWrap(VideoHeader, 'home');