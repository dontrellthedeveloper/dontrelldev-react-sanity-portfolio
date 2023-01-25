import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrap} from "../../wrapper";

import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import rangeParser from 'parse-numeric-range'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import liquid from 'react-syntax-highlighter/dist/cjs/languages/prism/liquid';
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git';
import sass from 'react-syntax-highlighter/dist/cjs/languages/prism/sass';
import pug from 'react-syntax-highlighter/dist/cjs/languages/prism/pug';

import remarkGfm from 'remark-gfm'

import {client, urlFor} from "../../client";
import {Link, useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AiFillChrome, AiFillGithub, AiOutlineArrowLeft, AiOutlineLink} from "react-icons/ai";

import './SingleSkill.scss';
import {Helmet} from "react-helmet";
import ReactTooltip from "react-tooltip";



SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('liquid', liquid)
SyntaxHighlighter.registerLanguage('git', git)
SyntaxHighlighter.registerLanguage('sass', sass)
SyntaxHighlighter.registerLanguage('pug', pug)


const SingleSkill = () => {

    // const syntaxTheme = oneDark;
    // const syntaxTheme = materialOceanic;
    const syntaxTheme = nord;

    const MarkdownComponents = {

        // const styleMarkdown = css({
        //     '.codeStyle, pre, code, code span': {
        //         // Your SyntaxHighlighter override styles here
        //     },
        //     code: {
        //         // Your general code styles here
        //     },
        //     'pre code': {
        //         // Your code-block styles here
        //     },
        //     'h3 code': {
        //         color: 'inherit'
        //     },
        //     'span.linenumber': {
        //         display: 'none !important'
        //     },
        //     '[data="highlight"]': {
        //         // Your custom line highlight styles here
        //     }
        // })

        // SyntaxHighlight code will go here
        code({ node, inline, className, ...props }) {

            const match = /language-(\w+)/.exec(className || '')
            const hasMeta = node?.data?.meta

            const applyHighlights = (applyHighlights) => {
                if (hasMeta) {
                    const RE = /{([\d,-]+)}/
                    const metadata = node.data.meta?.replace(/\s/g, '')
                    const strlineNumbers = RE?.test(metadata)
                        ? RE?.exec(metadata)[1]
                        : '0'
                    const highlightLines = rangeParser(strlineNumbers)
                    const highlight = highlightLines
                    const data = highlight.includes(applyHighlights)
                        ? 'highlight'
                        : null
                    return { data }
                } else {
                    return {}
                }
            }

            return match ? (
                <SyntaxHighlighter
                    style={syntaxTheme}
                    language={match[1]}
                    PreTag="div"
                    className="codeStyle"
                    showLineNumbers={true}
                    wrapLines={hasMeta ? true : false}
                    useInlineStyles={true}
                    lineProps={applyHighlights}
                    {...props}
                />
            ) : (
                <code className={className} {...props} />
            )
        },
    }


    const [singleSkill, setSingleSkill] = useState(null);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});



    const {slug} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const query = '*[_type == "experiences"] | order(order asc)';


        // client.fetch(query)
        //     .then((data) => {
        //         setExperience(data)
        //     })



    },[])



    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            skillType,
            bgColor,
            bio,
            icon{
                asset->{
                    _id,
                    url
                }
            }

        }`).then((data) => setSingleSkill(data[0]))
            .catch(console.error)
    }, [slug]);


    if(!singleSkill) return <div>Loading.....</div>



    // const markdown = singleProject.bio

    return (


        <div>
            <Helmet>
                <title>{singleSkill.name}</title>
                <meta
                    name='description'
                    content={singleSkill.name}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    // href="%PUBLIC_URL%/logo152.png"
                    href={urlFor(singleSkill.icon).width(800).height(800).url()}
                />
            </Helmet>


            <h4 className='head-text'  style={{marginTop: '30px', marginRight: '0', fontSize: '2rem'}}>{singleSkill.name}</h4>

            <div className='single-product__markdown2' style={{textAlign: 'center', padding: '1.5rem'}}>
                <Link to={'/skill/' + singleSkill.skillType } style={{textDecoration: 'none'}}>
                {/*<Link to='#' onClick={() => navigate(-1)} className='work__all-projects'>*/}
                    <p><AiOutlineArrowLeft/> All {singleSkill.skillType.charAt(0).toUpperCase() + singleSkill.skillType.slice(1)} Skills</p>
                </Link>
            </div>




            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
                <div className='app__skill-item3 app__flex' style={{marginTop: '0'}}>

                    <div className='app__work-img2 app__flex'>
                        <img src={urlFor(singleSkill.icon)} alt={singleSkill.name} />
                        <motion.div
                            whileHover={{opacity: [0,1]}}
                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                            className='app__work-hover app__flex'
                        >
                            {/*<a href={singleProject.projectLink} target='_blank' rel="noreferrer">*/}
                            {/*    <motion.div*/}
                            {/*        whileInView={{scale: [0, 1]}}*/}
                            {/*        whileHover={{scale: [1,0.9]}}*/}
                            {/*        transition={{duration: 0.25}}*/}
                            {/*        className='app__flex'*/}
                            {/*    >*/}
                            {/*        /!*<AiFillEye/>*!/*/}
                            {/*        <AiFillChrome/>*/}
                            {/*    </motion.div>*/}
                            {/*</a>*/}
                            <a href='https://github.com/dontrellthedeveloper' target='_blank' rel="noreferrer">
                                <motion.div
                                    whileInView={{scale: [0, 1]}}
                                    whileHover={{scale: [1,0.9]}}
                                    transition={{duration: 0.25}}
                                    className='app__flex'
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>


                    <div className='app__work-content app__flex' style={{display: "none"}}>

                        <h4 className='bold-text'>{singleSkill.name}</h4>
                        <p className='p-text' style={{marginTop: 10, textAlign: "center"}}>{singleSkill.name}</p>




                        {/*<div className='app__work-tag2 app__flex'>*/}
                        {/*    <p className='p-text'>{singleProject.tags[0]}</p>*/}
                        {/*</div>*/}


                        <div className='app__work-tag app__flex'>
                            <p className='p-text'>Click to Visit Website</p>
                        </div>

                    </div>
                </div>
            </motion.div>





            <div className='single-skill__markdown' style={{textAlign: 'center'}}>
                {/*<ReactMarkdown children={singleSkill.bio} remarkPlugins={[remarkGfm]} />*/}

                <ReactMarkdown
                    components={MarkdownComponents}
                    // css={styleMarkdown}
                >
                    {singleSkill.bio}
                </ReactMarkdown>
            </div>


        </div>
    );
};

export default AppWrap(
    MotionWrap(SingleSkill, 'app__works'),
    'singleskill',
    'app__primarybg'
);
