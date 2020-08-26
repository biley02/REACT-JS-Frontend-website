import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/about" component={About} />{" "}
        <Route exact path="/service" component={Service} />{" "}
        <Route exact path="/contact" component={Contact} />{" "}
        <Redirect
          to="/
        "
        />{" "}
      </Switch>{" "}
    </div>
  );
}

export default App;
