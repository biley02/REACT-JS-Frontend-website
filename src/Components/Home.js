import React from 'react';
import web from '../img/3255469.jpg';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import Common from './Common.js';

const Home = () => {
	return (
		<div>
			<Common name="Welcome to My Web page" imgsrc={web} visit="/service" btname="Get Started" />
		</div>
	);
};
export default Home;
