import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg shadow-sm bg-white fixed-top px-lg-5 py-4"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase fs-6 fw-bold " href="#home">
          skrmgrm
        </a>
        <button
          className="btn navbar-btn d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="bi bi-list fs-1 text-primary"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="nav-link"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="stack"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Stack
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Work
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
