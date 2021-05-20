import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import amazon from "../../assets/images/amazon.jpg";
import github from "../../assets/images/github.jpg";
import telegram from "../../assets/images/telegram.jpeg";
import tiktok from "../../assets/images/tiktok.jpg";
import netflix from "../../assets/images/netflix.png";
import instagram from "../../assets/images/instagram.jpg";
import messenger from "../../assets/images/Facebookmessenger.jpg";
import todo from "../../assets/images/todo.png";
import shivaki from "../../assets/images/shivaki.jpg";
import pizzeria from "../../assets/images/pizzeria.jpg";
import cramer from "../../assets/images/cramer.jpg";
import exchange from "../../assets/images/Exchange_Rates.png";
import piano from "../../assets/images/Снимок экрана 2021-05-20 121341.png";
import storeCrm from "../../assets/images/storecrm.png";

import "./Work.css";
export const Work = () => {
  useEffect(() => {
    setHighlightWidth();
    // eslint-disable-next-line
  }, []);

  const highlight = useRef(null);

  const data = [
    {
      title: "Store CRM",
      technologies: "React js/Typescript/Redux/Ant-Design/Firebase",
      filter: "2",
      link: "https://storecrm-3fe74.web.app/",
      img: storeCrm,
    },
    {
      title: "Piano",
      technologies: "Javascript",
      filter: "2",
      link: "https://baxodirovdev-virtual-piano.netlify.app/",
      img: piano,
    },
    {
      title: "Currency Calculator",
      technologies: "React js",
      filter: "1",
      link: "https://currency-calc-baxodirovdev.netlify.app/",
      img: exchange,
    },
    {
      title: "Amazon Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://amz-clone-baxodirovdev.web.app/",
      img: amazon,
    },
    {
      title: "GitHub Searcher",
      technologies: "React js",
      filter: "1",
      link: "https://githubfinder19990609.netlify.app/",
      img: github,
    },
    {
      title: "Telegram Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://telegram-clone-baxodirov09.web.app/",
      img: telegram,
    },
    {
      title: "TikTok Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://tiktok-clone-baxodirov09.web.app/",
      img: tiktok,
    },
    {
      title: "Netflix Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://netflix-clone-baxodirovdev.web.app/",
      img: netflix,
    },
    {
      title: "Instagram Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://instagram-clone-baxodirovdev.web.app/",
      img: instagram,
    },
    {
      title: "Facebook messanger Clone",
      technologies: "React js / Firebase / Material-ui",
      filter: "1",
      link: "https://facebook-messanger-clone-c31d3.web.app/",
      img: messenger,
    },
    {
      title: "Todo list ",
      technologies: "React js",
      filter: "1",
      link: "https://todolist19990609.netlify.app/",
      img: todo,
    },
    {
      title: "Shivaki Catalog",
      technologies: "Html / Css / JS",
      filter: "2",
      link: "https://github.com/baxodirov09/Shivaki-catalog",
      img: shivaki,
    },
    {
      title: "Pizzeria",
      technologies: "Html / Css",
      filter: "2",
      link: "https://github.com/baxodirov09/Pizzeria",
      img: pizzeria,
    },
    {
      title: "Cramer  Kreasselt",
      technologies: "Html / Css",
      filter: "2",
      link: "https://github.com/baxodirov09/CramerKreasselt",
      img: cramer,
    },
  ];

  const [classFilter, setClassfilter] = useState("0");

  function addClass(target) {
    target.classList.add("active");
  }

  const selectItem = (event) => {
    const target = event.target;
    const items = document.querySelectorAll(".work__selectorItem");
    const parent = document.querySelector(".work__selector");
    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    items.forEach((el) => el.classList.remove("active"));

    highlight.current.style.left = `${targetRect.left - parentRect.left}px`;

    addClass(target);
    setHighlightWidth(target);
  };

  function setHighlightWidth(target) {
    const itemTarget = target
      ? target
      : document.querySelector(".work__selectorItem");

    const rect = itemTarget.getBoundingClientRect();

    addClass(itemTarget);

    highlight.current.style.width = `${rect.width}px`;
  }

  return (
    <div className="work">
      <div className="work__projects">
        <div className="work__selector" self="size-x1" layout="row center-left">
          <div ref={highlight} className="work__highlight"></div>
          <div
            className="work__selectorItem active"
            onClick={(event) => {
              setClassfilter("0");
              selectItem(event);
            }}
          >
            All
          </div>
          <div
            className="work__selectorItem"
            onClick={(event) => {
              setClassfilter("1");
              selectItem(event);
            }}
          >
            React
          </div>
          <div
            className="work__selectorItem"
            onClick={(event) => {
              setClassfilter("2");
              selectItem(event);
            }}
          >
            Other
          </div>
        </div>
        <div className="work__projectsList">
          {data.map(({ title, technologies, link, img, filter }, index) => {
            return (
              <ProjectCard
                title={title}
                technologies={technologies}
                link={link}
                key={index}
                image={img}
                filter={filter}
                classFilter={classFilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
