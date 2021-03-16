import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Service from './Components/Service.js';
import Contact from './Components/Contact.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory
} from 'react-router-dom';
import {
    AnimatePresence
} from 'framer-motion';

function App() {
    return ( <
        div >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = "/"
        component = {
            Home
        }
        />  <
        Route exact path = "/about"
        component = {
            About
        }
        />  {' '} <
        Route exact path = "/service"
        component = {
            Service
        }
        />  {' '} <
        Route exact path = "/contact"
        component = {
            Contact
        }
        /> <Redirect to=" /
        " /> {' '} < /
        Switch > {
            ' '
        } {
            ' '
        } <
        /div>
    );
}

export default App;