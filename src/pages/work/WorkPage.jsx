import React from 'react';
import './Workpage.scss';
import {Work} from "../../container";
import {Helmet} from "react-helmet";

const WorkPage = () => {
    return (
        <div  className='portfolio-page__bg'>
            <Helmet>
                <title>Dontrell's Portfolio</title>
                <meta
                    name='description'
                    content='Web development portfolio for Dontrell Washington'
                />
                <meta name='keywords' content='Coding, Web Development, Engineering'/>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="%PUBLIC_URL%/fav.png"
                />
            </Helmet>
            <Work/>
        </div>
    );
};

export default WorkPage;
