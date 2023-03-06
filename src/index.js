import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';

import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";

// render(
//     <Router>
//         <ScrollToTop />
//         <App/>
//     </Router>
//     , document.getElementById('root'));


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>,
)