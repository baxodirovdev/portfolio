import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  technologies,
  link,
  image,
  filter,
  classFilter,
}) => {
  return (
    <div
      className={`projectCard animate__animated ${
        filter === classFilter || classFilter === "0"
          ? "animation__bounceIn "
          : "animation__bounceOut"
      }`}
    >
      <div className="projectCard__card">
        <img className="projectCard__img" src={image} alt="samurai" />
      </div>
      <div className="projectCard__text">
        <div>{title}</div>
        <span>{technologies}</span>
      </div>
      <button className="projectCard__button">
        <a href={link} target="_blank" rel="noreferrer">
          Link
        </a>
      </button>
    </div>
  );
};
