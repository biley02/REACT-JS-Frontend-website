import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

export default class Navbar extends Component {
  render() {
    var style = {
      fontWeight: "bold",
      borderBottom: "1px solid #565387",
    };
    return (
      <>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink
                  className="navbar-brand"
                  to="#"
                  style={{
                    fontSize: "2rem",
                    color: "#565387",
                    fontWeight: "bold",
                  }}
                >
                  Navbar
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink
                        exact
                        activeStyle={style}
                        className="nav-link"
                        to="/"
                      >
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName
                        activeStyle={style}
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeStyle={style}
                        className="nav-link"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeStyle={style}
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}
