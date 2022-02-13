import React from "react";
import "./ProjectCard.css";
import Background from "../Project/background.png";

const ProjectCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})`, objectFit: "contain" }}
      className="project-card"
    >
      <h1>Librtem</h1>
    </div>
  );
};

export default ProjectCard;
