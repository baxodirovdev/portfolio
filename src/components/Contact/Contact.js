import React, { useRef } from "react";
import "./Contact.scss";
import { Instagram, LinkedIn, Telegram } from "@material-ui/icons";
import me from "../../assets/images/me3.jpg";
import samurai from '../../assets/images/samuraiContact.png'

export const Contact = () => {
  const ButtonRef = useRef(null);
  const TitleRef = useRef(null);
  const navRef = useRef(null);

  const toggleHandler = () => {
    ButtonRef.current.classList.toggle("active");
    TitleRef.current.classList.toggle("active");
    navRef.current.classList.toggle("active");
  };

  return (
    <div className="contact-area">
      <div className="contact">
        <main>
          <section className="contact__section">
            <div className="content">
              <img src={me} alt="me" />

              <aside>
                <h1>Akmal Baxodirov</h1>
                <p>Hi, I'm Akmal and I'm a Front-end developer.</p>
              </aside>

              <button ref={ButtonRef} onClick={toggleHandler}>
                <span>Contact Me</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  {" "}
                  <g className="nc-icon-wrapper" fill="#444444">
                    {" "}
                    <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>{" "}
                  </g>{" "}
                </svg>
              </button>
            </div>

            <div ref={TitleRef} className="title">
              <p>Contact Me</p>
            </div>
          </section>
        </main>

        <nav ref={navRef}>
          <a
            href="https://www.linkedin.com/in/akmal-baxodirov-175166187/"
            target="_blank"
            rel="noreferrer"
            className="linkedIn"
          >
            <div className="icon">
              <LinkedIn />
            </div>

            <div className="content">
              <h1>LinkedIn</h1>
              <span>Akmal Baxodirov</span>
            </div>

            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              {" "}
              <g className="nc-icon-wrapper" fill="#444444">
                {" "}
                <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
              </g>{" "}
            </svg>
          </a>

          <a
            href="https://www.instagram.com/baxodirovdev/"
            className="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <Instagram />
            </div>

            <div className="content">
              <h1>Instagram</h1>
              <span>@baxodirovdev</span>
            </div>

            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              {" "}
              <g className="nc-icon-wrapper" fill="#444444">
                {" "}
                <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
              </g>{" "}
            </svg>
          </a>

          <a
            href="https://t.me/baxodirov09"
            target="_blank"
            rel="noreferrer"
            className="telegram"
          >
            <div className="icon">
              <Telegram />
            </div>

            <div className="content">
              <h1>Telegram</h1>
              <span>@baxodirov09</span>
            </div>

            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              {" "}
              <g className="nc-icon-wrapper" fill="#444444">
                {" "}
                <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
              </g>{" "}
            </svg>
          </a>
        </nav>
      </div>
      <img className='contact__samurai' src={samurai} alt="samurai"/>
    </div>
  );
};
