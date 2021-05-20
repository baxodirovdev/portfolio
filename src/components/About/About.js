import React from "react";
import { Scroll } from "../Scroll/Scroll";
import "./About.css";
import avatar from "../../assets/images/DSC_0029.jpg";

export const About = () => {
  return (
    <div className="about">
      {/* <Scroll /> */}
      <section class="cv">
        <div class="cv__header">
          <div class="cv__img">
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <h1>Akmal Baxodirov</h1>
            <p>Front-end developer</p>
          </div>
        </div>
        <h3 class="cv__title">Social Networks</h3>
        <ul class="cv__list">
          <li>
            LinkedIn -{" "}
            <a
              class="cv__link"
              href="https://www.linkedin.com/in/akmal-baxodirov-175166187/"
            >
              Akmal Baxodirov
            </a>
          </li>
          <li>
            Telegram -{" "}
            <a class="cv__link" href="https://t.me/baxodirov09">
              baxodirov09
            </a>
          </li>
          <li>
            Instagram -{" "}
            <a class="cv__link" href="https://www.instagram.com/baxodirov09/">
              baxodirov09
            </a>
          </li>
        </ul>
        <h3 class="cv__title">About Me</h3>
        <p class="cv__text">
          I am a front-end developer with a year of experience. I am a dedicated
          and hard-working person who believes in honesty and good working
          relation. I work to make a better web, one that is fast, easy to use,
          beautiful, accessible to all, and frustration-free.
        </p>
        <h3 class="cv__title">Skills</h3>
        <ul class="cv__list">
          <li>✔️ Html, CSS, Sass, CSS frameworks</li>
          <li>✔️ Javascript/ES5/ES6/ES7</li>
          <li>✔️ Git, Github, Gitlab, and others.</li>
          <li>✔️ React.js (Context Api, Hooks, React Router)</li>
          <li>✔️ Redux</li>
          <li>✔️ Firebase</li>
        </ul>

        <h3 class="cv__title">Have Experience</h3>
        <ul class="cv__list">
          <li>✔️ Typescript</li>
          <li>✔️ GraphQL</li>
          <li>✔️ Next.js</li>
          <li>✔️ Node.js</li>
          <li>✔️ Express.js</li>
        </ul>

        <h3 class="cv__title">Work Experiance</h3>
        <ul class="cv__list">
          <li>2020 July - November | Revolution team</li>
          <li>2020 October - Till now | Freelancer</li>
        </ul>
        <h3 class="cv__title">Languages</h3>
        <ul class="cv__list">
          <li>Uzbek - Native</li>
          <li>English - Intermidate +</li>
          <li>Russian - Fluent </li>
        </ul>
      </section>
    </div>
  );
};
