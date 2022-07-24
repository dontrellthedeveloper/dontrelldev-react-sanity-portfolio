import React from 'react';
import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const VideoSocialMedia = () => {
    return (
        <div className='video__social'>
            <a href="https://twitter.com/dontrellthedev_" target='_blank'>
                <BsTwitter/>
            </a>
            <a href='https://www.facebook.com/dontrellwashington20' target='_blank'>
                <FaFacebookF/>
            </a>
            <a href='https://www.instagram.com/dontrellthedeveloper' target='_blank'>
                <BsInstagram/>
            </a>
        </div>
    );
};

export default VideoSocialMedia;
