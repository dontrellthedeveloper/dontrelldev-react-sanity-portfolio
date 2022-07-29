import React, {useRef, useEffect} from "react"
import videoBg from '../assets/websitewarehouse10.mp4';

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={videoBg} type="video/mp4"/>
        </video>
    );
}