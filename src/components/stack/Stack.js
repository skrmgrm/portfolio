import React from "react";

import html from "../../assets/icons/html3.png";
import css from "../../assets/icons/css3.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import git from "../../assets/icons/git.png";
import bootstrap from "../../assets/icons/bootstrap.png";

const Stack = () => {
  return (
    <div className="container-fluid stack">
      <div
        className="container tool-icons d-flex 
      flex-column flex-md-row
      justify-content-center align-items-center gap-4"
      >
        <div className="tool-icon">
          <img id="html" src={html} alt="html" />
        </div>
        <div className="tool-icon ">
          <img id="css" src={css} alt="css" />
        </div>
        <div className="tool-icon">
          <img id="javascript" src={javascript} alt="javascript" />
        </div>
        <div className="tool-icon">
          <img id="react" src={react} alt="react" />
        </div>
        <div className="tool-icon">
          <img id="sass" src={sass} alt="sass" />
        </div>
        <div className="tool-icon">
          <img id="bootstrap" src={bootstrap} alt="bootstrap" />
        </div>
        <div className="tool-icon">
          <img id="git" src={git} alt="git" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
