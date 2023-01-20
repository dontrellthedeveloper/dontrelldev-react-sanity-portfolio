import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {HashRouter as Router} from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
    <Router basename="/index.html">
        <ScrollToTop />
        <App/>
    </Router>
    , document.getElementById('root'));