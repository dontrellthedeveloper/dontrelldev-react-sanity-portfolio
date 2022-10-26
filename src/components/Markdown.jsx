import React from 'react';
import ReactMarkdown from 'react-markdown'

const MyComponent = () => {
    return (
        <div>

        </div>
    );
};

export default MyComponent;



import ReactDom from 'react-dom'



const markdown = `Just a link: https://reactjs.com.`

ReactDom.render(
    <ReactMarkdown children={markdown} />,
    document.body
)