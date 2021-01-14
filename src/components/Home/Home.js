import React from "react";
import "./Home.css";
import samurai from "../../assets/images/samurai2.jpg";
import { Particle } from "../Particles/Particle";
import ReactTyped from "react-typed";
export const Home = ({ winWidth }) => {
  return (
    <div className="home">
      <div className="home__box">
        {winWidth && <Particle />}

        <div className="home__info">
          <h1>HI I AM AKMAL</h1>
          <div className="home__typed">
            <ReactTyped
              strings={[
                "FRONT-END DEVELOPER",
                "REACT JS DEVELOPER",
                "IT BLOGGER",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></ReactTyped>
          </div>
        </div>
      </div>
      <div className="home__box">
        <div className="header__samuraiImg">
          <img src={samurai} alt="samurai" />
        </div>
      </div>
    </div>
  );
};
