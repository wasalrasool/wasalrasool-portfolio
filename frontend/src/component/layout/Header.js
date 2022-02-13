import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  const toggler = useRef(null);
  const logo = useRef(null);
  const menuBar = useRef(null);
  const [toggle, setToggle] = useState(true);

  const navToggler = (e) => {
    if (toggle === true) {
      toggler.current.classList.add("show-links");
      logo.current.classList.add("remove-logo");
      menuBar.current.classList.remove("menu-bar-position");
    } else {
      toggler.current.classList.remove("show-links");
      logo.current.classList.remove("remove-logo");
      menuBar.current.classList.add("menu-bar-position");
    }

    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <Fragment>
      <nav className="nav">
        <div className="LogoBox">
          <div ref={logo} className="logo">
            {/* <img src="./wasal-logo-text.png" alt="Wasal Rasool" /> */}
            <h1>WASAL RASOOL</h1>
          </div>
        </div>
        <div ref={menuBar} className="menu-bar menu-bar-position">
          <button onClick={(e) => navToggler(e)}>
            {" "}
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <div ref={toggler} className="links">
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
          <li>
            <Link to="/myresume">
              <button>Resume</button>
            </Link>
          </li>
          <li>
            <a href="url">
              <button>Linkedin</button>
            </a>
          </li>
          <li>
            <a href="url">
              <button>GitHub</button>
            </a>
          </li>
          <li>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </li>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
