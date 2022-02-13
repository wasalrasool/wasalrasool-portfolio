import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <nav>
        <div className="LogoBox">
          <div className="logo">
            {/* <img src="./wasal-logo-text.png" alt="Wasal Rasool" /> */}
            WASAL RASOOL
          </div>
        </div>
        <div className="links">
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
