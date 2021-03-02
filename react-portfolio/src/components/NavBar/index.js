import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import resume from "../../assets/Ron-ArjayCaluagResumeB.pdf";

function NavBar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      id="navbar1"
    >
      <div className="navbar-brand">
        <Link to="/" class="navbar-item has-text-white">
          Home
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-end">
          <a
            className="navbar-item has-text-white"
            href="https://github.com/ArjayCaluag"
            target="_blank"
          >
            Github
          </a>

          <a
            className="navbar-item has-text-white "
            href="https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/"
            target="_blank"
          >
            Linkedin
          </a>
          <a href={resume} target="_blank" className="navbar-item has-text-white">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
