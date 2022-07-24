import React from 'react';
import {NavigationDots, SocialMedia, VideoDots, VideoSocialMedia} from '../components'

const VideoWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`video__container ${classNames}`}>
            <VideoSocialMedia/>
            <div className='video__wrapper video__flex'>
                <Component/>

                <div className='video-copyright'>
                    <p className='p-text'>@2022 DONTRELL</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
            <VideoDots active={idName}/>
        </div>
    );
};

export default VideoWrap;
