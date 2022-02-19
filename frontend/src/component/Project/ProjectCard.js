import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const colorSet = {
    randomColor: "",
    randomColor2: "",
    randomColor3: "",
  };

  const randomColorGenerator = () => {
    colorSet.randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorSet.randomColor = "#" + colorSet.randomColor;
    //
    colorSet.randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    colorSet.randomColor2 = "#" + colorSet.randomColor2;
    //
    colorSet.randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    colorSet.randomColor3 = "#" + colorSet.randomColor3;
  };

  randomColorGenerator();

  if (
    colorSet.randomColor === "#000000" &&
    colorSet.randomColor2 === "#000000" &&
    colorSet.randomColor3 === "#000000"
  ) {
    randomColorGenerator();
  }

  return (
    <div
      style={{
        objectFit: "contain",
        backgroundImage: `linear-gradient(to bottom right, ${colorSet.randomColor}, ${colorSet.randomColor2},${colorSet.randomColor3})`,
      }}
      className="project-card"
    >
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectCard;
