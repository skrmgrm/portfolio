import React from "react";

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
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stack">
                Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
