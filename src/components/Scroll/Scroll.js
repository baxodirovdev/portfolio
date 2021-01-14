import React from "react";
import "./Scroll.css";
import { Link } from "react-scroll";
import me from "../../assets/images/me3.jpg";
import { CardInfo } from "../CardInfo/CardInfo";
import { Code, FitnessCenter, Headset } from "@material-ui/icons";

export const Scroll = () => {
  const data = {
    education: [
      {
        title: "College",
        number: "2015 - 2018",
        industry: "Yangiariq Industrail economic professional college",
        name: "Computer and Software engineering",
        arrow: true,
        bgColor:
          "linear-gradient(111.85deg,hsla(0,0%,100%,.3) -.81%,hsla(0,0%,100%,0) 107.31%),#1483f7",
      },
      {
        title: "University",
        number: "2018 Sen - 2018 Nov",
        industry: "Urgench State University",
        name: "Tourism and Economics",
        arrow: false,
        bgColor:
          "linear-gradient(251.96deg,hsla(0,0%,100%,.2) 5.49%,hsla(0,0%,100%,0) 97.88%),#8530f1",
      },
    ],
    experiance: [
      {
        title: "Revolution Team",
        number: "2020 Jun - 2018 Oct ",
        industry: "Office",
        name: "Intern Front-end developer",
        arrow: true,
        bgColor:
          "linear-gradient(105.01deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,0) 98.77%),#f16a30",
      },
      {
        title: "Freelancer",
        number: "2020 Nov - Current ",
        industry: "Remote",
        name: "Front-end developer",
        arrow: false,
        bgColor:
          "linear-gradient(245.78deg,hsla(0,0%,100%,.3) -1.9%,hsla(0,0%,100%,0) 100.58%),#161e3a",
      },
    ],
  };

  return (
    <div className="scroll">
      <div className="wrapper">
        <nav className="nav__wrapper" id="navbar-example">
          <ul className="nav">
            <li role="presentation">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav__counter">Me</span>
              </Link>
            </li>
            <li role="presentation">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav__counter">Education</span>
              </Link>
            </li>

            <li role="presentation">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav__counter">Experiance</span>
              </Link>
            </li>

            <li role="presentation">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav__counter">Hobby</span>
              </Link>
            </li>
          </ul>
        </nav>

        <section className="section section1" id="section1">
          <div className="section1__info">
            <h1>AKMAL BAKHODIROV</h1>
            <h3>FRONT-END DEVELOPER</h3>
            <p>
              I work to make a better web, one that is fast, easy to use,
              beautiful, accessible to all, and frustration-free.
            </p>
          </div>
          <div className="section1__image">
            <img src={me} alt="me" />
          </div>
        </section>

        <section className="section section2" id="section2">
          {data.education.map(
            ({ title, name, number, industry, arrow, bgColor }, index) => {
              return (
                <CardInfo
                  title={title}
                  number={number}
                  industry={industry}
                  name={name}
                  arrow={arrow}
                  bgColor={bgColor}
                  key={index}
                />
              );
            }
          )}
        </section>

        <section className="section section3" id="section3">
          {data.experiance.map(
            ({ title, name, number, industry, arrow, bgColor }, index) => {
              return (
                <CardInfo
                  title={title}
                  number={number}
                  industry={industry}
                  name={name}
                  arrow={arrow}
                  bgColor={bgColor}
                  key={index}
                />
              );
            }
          )}
        </section>
        <section className="section section4" id="section4">
          <div className="hobby__card ">
            <div className="hobby__front">
              <Headset />
            </div>
            <div className="hobby__back ">
              <div className="hobby__tile">Music</div>
              <div className="hobby__content">
                <div className="hobby__description">
                  I love listen to music.I almost spent 4-5 hours for that
                </div>
              </div>
            </div>
          </div>
          <div className="hobby__card ">
            <div className="hobby__front">
              <FitnessCenter />
            </div>
            <div className="hobby__back middle">
              <div className="hobby__tile">Fitness</div>
              <div className="hobby__content">
                <div className="hobby__description">
                  I do some physical to be healthy
                </div>
              </div>
            </div>
          </div>
          <div className="hobby__card ">
            <div className="hobby__front">
              <Code />
            </div>
            <div className="hobby__back middle">
              <div className="hobby__tile">Coding</div>
              <div className="hobby__content">
                <div className="hobby__description">
                  I like coding challenges
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
