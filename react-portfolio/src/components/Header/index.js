import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import resume from "../../assets/Ron-ArjayCaluagResumeB.pdf";

function Header() {
  return (
    <section className="hero is-fullheight is-dark" id="content1">
      <div className="hero-head"></div>

      {/* // <!-- Hero content: will be in the middle --> */}

      <div className="hero-body" id="content1">
        <div className="container has-text-centered ">
          <div className="column is-one-third" id="intro">
            <h2 className="subtitle has-text-black">Online Portfolio</h2>
            <h1 className="title has-text-black">RON-ARJAY CALUAG</h1>
            <h2 className="has-text-black"> Full Stack Web Developer</h2>

            <Link to="/aboutme"  className="button mt-4">
              About Me{" "}
            </Link>

            <br />
            <Link to="/projects"  className="button mt-4">
              Projects{" "}
            </Link>

            <a href={resume} target="_blank" className="button mt-4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
