import React from "react";

import html from "../../assets/icons/html3.png";
import css from "../../assets/icons/css3.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import git from "../../assets/icons/git.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import photoshop from "../../assets/icons/photoshop.png";
import illustrator from "../../assets/icons/illustrator.png";

const Stack = () => {
  return (
    <div
      id="stack"
      className="container-fluid stack d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center mb-5">
        <h1 className="text-white text-uppercase fw-bold fs-3">What I Use</h1>
        <p className="text-white fw-lighter mt-4">
          These are the tools that I am familiar with and currently on my
          arsenal.
        </p>
      </div>
      <div className="container tool-icons row d-flex justify-content-center">
        <div className="tool-icon col-1">
          <img id="html" src={html} alt="html" />
        </div>
        <div className="tool-icon col-1 ">
          <img id="css" src={css} alt="css" />
        </div>
        <div className="tool-icon col-1">
          <img id="javascript" src={javascript} alt="javascript" />
        </div>
        <div className="tool-icon col-1">
          <img id="react" src={react} alt="react" />
        </div>
        <div className="tool-icon col-1">
          <img id="sass" src={sass} alt="sass" />
        </div>
        <div className="tool-icon col-1">
          <img id="bootstrap" src={bootstrap} alt="bootstrap" />
        </div>
        <div className="tool-icon col-1">
          <img id="git" src={git} alt="git" />
        </div>
        <div className="tool-icon col-1">
          <img id="photoshop" src={photoshop} alt="photoshop" />
        </div>
        <div className="tool-icon col-1">
          <img id="illustrator" src={illustrator} alt="illustrator" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
