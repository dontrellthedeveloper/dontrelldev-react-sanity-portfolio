import React from 'react';
import videoBg from '../../assets/websitewarehouse10.mp4';
import './VideoHeader.scss';
import {AppWrap, MotionWrap, VideoWrap} from "../../wrapper";

const VideoHeader = () => {
    return (
        <div className='video-bg'>
            <div className="video-overlay"></div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="video-text">
                <h1>👋👨🏾‍💻</h1>
                <h3>Hi, I'm Dontrell</h3>
            </div>
        </div>
    );
};

// export default VideoHeader;

export default VideoWrap(
    MotionWrap(VideoHeader, 'app__video'),
    'home',
    'app__primarybg'
);