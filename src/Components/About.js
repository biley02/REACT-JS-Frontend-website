import React from 'react';
import web from '../img/about.jpg';
import {
    NavLink
} from 'react-router-dom';
import '../css/Home.css';
import Common from './Common.js';

const About = () => {
    return ( <
        div >
        <
        Common name = "Welcome to About Page"
        imgsrc = {
            web
        }
        visit = "/contact"
        btname = "Contact Now" / >
        <
        /div>
    );
};
export default About;