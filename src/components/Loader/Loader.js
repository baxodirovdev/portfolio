import React from "react";
import "./Loader.css";
import samuraiLoader from "../../assets/images/samurai-head-illustration_228886-49.jpg";


export const Loader = () => {
  return (
    <div className="loader">
      <img src={samuraiLoader} alt="samuraiLoader" />
    </div>
  );
};
