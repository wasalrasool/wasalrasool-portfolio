import React from "react";
import "./ProjectCard.css";
import Background from "../Project/background.png";

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})`, objectFit: "contain" }}
      className="project-card"
    >
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectCard;
