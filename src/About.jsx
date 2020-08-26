import React from "react";
import web from "./img/about.jpg";
import { NavLink } from "react-router-dom";
import "./css/Home.css";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
