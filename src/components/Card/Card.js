import React from "react";
import "./Card.css";

export const Card = ({ samuraiImg, title, subTitle }) => {
  return (
    <div className="card">
      <div className="card__slide top">
        <div className="card__content">
          <div className="card__image">
            <img src={samuraiImg} alt="samuraiImg" />
          </div>
        </div>
      </div>
      <div className="card__slide bottom">
        <div className="card__content">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};
