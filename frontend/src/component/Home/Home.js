import React, { Fragment, useEffect, useState } from "react";
import LaptopManSvg from "../../svg/LaptopManSvg.js";
import { Link } from "react-router-dom";
import ProjectCard from "../Project/ProjectCard.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MailManSvg from "../../svg/MailManSvg.js";
import { fetchProjects } from "../../features/projectSlice";
import Particles from "../../particles/Particles.js";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // only thing i understood dont use useEffect twice
  // instea make the state slice lie that to be able to select
  const { projects, loading } = useSelector((state) => state.projects);

  // fetched the projects -- ok

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const contactSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", contactName);
    myForm.set("email", contactEmail);
    myForm.set("message", contactMessage);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const url = "/api/v1/sendemail";

    axios
      .post(url, myForm, config)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
      });

    toast.success("Email sent successfully", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast.info("You can check your inbox for confirmation", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000,
    });
    setContactEmail("");
    setContactMessage("");
    setContactName("");
  };

  return (
    <Fragment>
      <div className="home">
        <section className="cover">
          <Particles className="tsparticles" />
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
              <Link to="/myresume">
                {" "}
                <button className="dark-blue-btn">View Resume</button>
              </Link>
            </div>
          </div>
          <div className="cover-right">
            <LaptopManSvg />
          </div>
          <div className="background-text">
            &lt;&lt;&lt;Developer&gt;&gt;&gt;
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
              {projects &&
                projects.map((project) => <ProjectCard project={project} />)}
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
            <ToastContainer
              style={{
                backgroundColor: "black !important",
                color: "black !important",
              }}
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
