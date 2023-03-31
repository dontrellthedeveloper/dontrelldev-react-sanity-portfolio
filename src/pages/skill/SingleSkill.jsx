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
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import docker from 'react-syntax-highlighter/dist/cjs/languages/prism/docker';
import graphql from 'react-syntax-highlighter/dist/cjs/languages/prism/graphql';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';
import mongodb from 'react-syntax-highlighter/dist/cjs/languages/prism/mongodb';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';

import remarkGfm from 'remark-gfm'

import {client, urlFor} from "../../client";
import {Link, useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AiFillChrome, AiFillGithub, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLink} from "react-icons/ai";

import './SingleSkill.scss';
import {Helmet} from "react-helmet";
import ReactTooltip from "react-tooltip";
import {TbListDetails} from "react-icons/tb";
import {BallCanvas} from "../../components/canvas";



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
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('docker', docker)
SyntaxHighlighter.registerLanguage('graphql', graphql)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('mongodb', mongodb)
SyntaxHighlighter.registerLanguage('json', json)


const SingleSkill = () => {


    const syntaxTheme = nord;

    const MarkdownComponents = {

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


    },[])



    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            skillType,
            skillWebsite,
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
                    href={urlFor(singleSkill.icon).width(800).height(800).url()}
                />
            </Helmet>


            <h4 className='head-text'  style={{marginTop: '30px', marginRight: '0', fontSize: '2rem'}}>{singleSkill.name}</h4>

            <div className='single-product__markdown2' style={{textAlign: 'center', padding: '1.5rem'}}>
                <div className='row app__flex'>
                    <Link to='#'  onClick={() => navigate(-1)} className='work__all-projects' style={{textDecoration: 'none', marginRight: '10px'}}>
                        <p><AiOutlineArrowLeft/> Back</p>
                    </Link>
                    <p> | </p>
                    <Link to={'/skill/' + singleSkill.skillType } style={{marginLeft: '10px'}}  className='work__all-projects'>
                        <p> All {singleSkill.skillType.charAt(0).toUpperCase() + singleSkill.skillType.slice(1)} Skills <AiOutlineArrowRight/></p>
                    </Link>
                </div>

            </div>



                <div className='app__flex single-skill__canvas' style={{height: '300px', width: '300px', display: 'block', margin: '30px auto', borderRadius: '10px' }} >
                    <BallCanvas icon={urlFor(singleSkill.icon)} />
                </div>



            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
            >
            </motion.div>





            <div className='single-skill__markdown' style={{textAlign: 'center'}}>

                <ReactMarkdown
                    components={MarkdownComponents}
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
