import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div>
          <h1>Wasal Rasool @ 2022</h1>
        </div>
        <div>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="connect">
          <h6>Get in touch</h6>
        </div>
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/wasal-rasool-6b35971ba/"
          >
            <img src="./linkedin-icon.svg" alt="LINKED IN" />
          </a>
          <a target="_blank" href="needed">
            <img src="./instagram-icon.svg" alt="INTAGRAM" />
          </a>
          <a
            target="_blank"
            href="//api.whatsapp.com/send?phone=923094775474&text=Hello, we are one step ahead to get in touch"
          >
            {" "}
            <img src="./whatsapp-icon.svg" alt="WHATSAPP" />
          </a>
          <a target="_blank" href="https://github.com/wasalrasool">
            {" "}
            <img src="./github-icon.png" alt="GITHUB" />
          </a>
          <a
            target="_blank"
            href="mailto:wasalrasool37@gmail.com"
            className="mail-icon"
          >
            {" "}
            <img src="./gmail-icon.svg" alt="GMAIL" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
