import React from "react";
import "./ProjectCard.css";
import Background from "../Project/background.png";

const ProjectCard = ({ project }) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + randomColor;
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  randomColor2 = "#" + randomColor2;
  var randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  randomColor3 = "#" + randomColor3;
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        objectFit: "contain",
        backgroundImage: `linear-gradient(to bottom right, ${randomColor}, ${randomColor2},${randomColor3})`,
      }}
      className="project-card"
    >
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectCard;
