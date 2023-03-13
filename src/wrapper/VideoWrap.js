import React from 'react';
import {NavigationDots, SocialMedia, VideoDots, VideoSocialMedia} from '../components'
import Div100vh from 'react-div-100vh';
import {motion} from 'framer-motion';

const VideoWrap = (Component, idName, classNames) => function HOC() {
    return (
        <Div100vh id={idName} className={`video__container ${classNames}`}>
            <VideoSocialMedia/>
            <motion.div
                whileInView={{y: [100,50,0], opacity: [0,0,1]}}
                transition={{duration: 0.5}}
                className='video__wrapper video__flex'>
                <Component/>

                <div className='video-copyright'>
                    <p className='p-text'>@2023 Dontrell Washington</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </motion.div>
            <VideoDots active={idName}/>
        </Div100vh>
    );
};

export default VideoWrap;
