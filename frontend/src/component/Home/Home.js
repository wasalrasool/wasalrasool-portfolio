import React, { Fragment, useState } from "react";
import LaptopManSvg from "../../svg/LaptopManSvg.js";
import ProjectCard from "../Project/ProjectCard.js";
import MailManSvg from "../../svg/MailManSvg.js";

import "./Home.css";

const Home = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const contactSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", contactName);
    myForm.set("email", contactEmail);
    myForm.set("message", contactMessage);

    // need to dispatch the sendEmail and send myForm in it
  };

  return (
    <Fragment>
      <div className="home">
        <section className="cover">
          <div className="cover-left">
            <div className="a-1">
              <h3>
                Hi, I am <span>Wasal Rasool</span>
              </h3>
            </div>
            <div className="a-2">
              <h3>i write code</h3>
            </div>
            <div className="a-3">
              <img title="NODE JS" src="./nodejs-icon.svg" alt="Nodejs" />
              <img
                title="REACT JS"
                className="reactjs-icon"
                src="./reactjs-icon.svg"
                alt="Reactjs"
              />
              <img title="JAVASCRIPT" src="./js-icon.svg" alt="JavaScript" />
              <img title="MONGO DB" src="./mongodb-icon.svg" alt="MongoDb" />
              <img title="HTML" src="./html-icon.svg" alt="html5" />
              <img title="CSS" src="./css-icon.svg" alt="CSS" />
              <img title="C++" src="./c-icon.svg" alt="C++" />
            </div>
            <div className="a-4">
              <a href="#contact">
                <button className="blue-btn">Contact</button>
              </a>
              <button className="dark-blue-btn">View Resume</button>
            </div>
          </div>
          <div className="cover-right">
            <LaptopManSvg />
          </div>
        </section>
        <section className="about">
          <div className="about-me">
            <div>
              <h6>
                a little <span>about</span> me ...
              </h6>
            </div>
            <div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                natus et architecto aut. Numquam, eos. Ducimus perspiciatis
                dicta asperiores voluptatum?
              </p>
            </div>
          </div>
          <div className="featured-work">
            <div>
              <h6>
                featured <span>work</span>
              </h6>
            </div>
            <div className="project-cards">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </section>
        <section className="github">
          {/* <div class="calendar">Loading the data just for you.</div> */}
        </section>

        <section className="blogs"></section>
        <section className="more-work"></section>
        <section className="contact" id="contact">
          <div className="svg-div">
            <div>
              {" "}
              <h5>
                <span>contact</span> me
              </h5>
            </div>
            <MailManSvg className="mail-man-svg" />
          </div>
          <div className="form-div">
            <form onSubmit={contactSubmitHandler}>
              <input
                type="text"
                placeholder="Name"
                required
                value={contactName}
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value);
                }}
              />
              <textarea
                className="message-text"
                type="text"
                placeholder="Message"
                required
                value={contactMessage}
                onChange={(e) => {
                  setContactMessage(e.target.value);
                }}
              />
              <input type="submit" value="SEND" />
            </form>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
