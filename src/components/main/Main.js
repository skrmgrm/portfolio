import React from "react";
import { Link } from "react-scroll";

import photo from "../../assets/profile.png";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

const Main = () => {
  return (
    <main id="home" className="container row mx-auto">
      <div className="col-lg-6 text-center text-lg-end pe-lg-5">
        <img src={photo} alt="profile" className="w-75" />
      </div>

      <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
        <h1 className="display-4 fw-bold mt-4">Joshua</h1>
        <p className=" mb-0 text-center text-lg-start lh-lg">
          I'm an aspiring <span id="software-engineer">Software Engineer</span>{" "}
          based in the Philippines. I have passion for design and web
          development.
        </p>

        <div className="d-flex social-icons gap-4">
          <div className="social-icon">
            <a
              href="https://web.facebook.com/skrmgrm/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://github.com/skrmgrm/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/skrmgrm/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://twitter.com/skrmgrm/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={70}
          duration={100}
          className="btn mt-4 px-4 py-3 text-white fw-bold text-uppercase cta-btn"
        >
          <i className="bi bi-send-fill "></i> send me a message
        </Link>
      </div>
    </main>
  );
};

export default Main;
