import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const VideoSocialMedia = () => {
    return (
        <div className='video__social'>
            {/*<a href="https://twitter.com/dontrellthedev_" rel='noreferrer' target='_blank'>*/}
            {/*    <BsTwitter/>*/}
            {/*</a>*/}
            {/*<a href='https://www.facebook.com/dontrellwashington20' rel='noreferrer' target='_blank'>*/}
            {/*    <FaFacebookF/>*/}
            {/*</a>*/}
            {/*<a href='https://www.instagram.com/dontrelldev' rel='noreferrer' target='_blank'>*/}
            {/*    <BsInstagram/>*/}
            {/*</a>*/}

            <a href="https://www.linkedin.com/in/dontrell-washington/" rel='noreferrer' target='_blank'>
                <BsLinkedin/>
            </a>

            <a href="https://github.com/dontrellthedeveloper" rel='noreferrer' target='_blank'>
                <BsGithub/>
            </a>
        </div>
    );
};

export default VideoSocialMedia;
