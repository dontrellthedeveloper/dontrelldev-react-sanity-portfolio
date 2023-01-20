import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <App/>
    </Router>
    , document.getElementById('root'));