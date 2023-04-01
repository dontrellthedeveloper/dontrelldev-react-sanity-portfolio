import React from 'react';
import {Skills} from "../../container";
import './SkillPage.scss';
import {Helmet} from "react-helmet";

const SkillPage = () => {
    return (
        <div  className='skill-page__bg'>
            <Helmet>
                <title>Dontrell's Skills</title>
                <meta
                    name='description'
                    content='Web development skills for Dontrell Washington'
                />
                <meta name='keywords' content='Coding, Web Development, Engineering'/>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="%PUBLIC_URL%/dev2.png"
                />
            </Helmet>
            <Skills/>
        </div>
    );
};

export default SkillPage;
