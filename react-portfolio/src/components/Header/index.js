import React from "react";
import "./style.css";
import {Link} from "react-router-dom"
// import NavBar from "./components/NavBar"

function Header() {
  return (
    <section class="hero is-fullheight is-dark" id="content1">
      <div class="hero-head">
      

      </div>

      {/* // <!-- Hero content: will be in the middle --> */}

      <div class="hero-body" id="content1">
        <div class="container has-text-centered ">
          <div class="column is-one-third" id="intro">
            <h2 class="subtitle has-text-black">Online Portfolio</h2>
            <h1 class="title has-text-black">RON-ARJAY CALUAG</h1>
            <h2 class="has-text-black"> Full Stack Web Developer</h2>

            <Link to = "/aboutme" class="button mt-4">
              About Me </Link>
            
            <br />
            <Link to = "/projects" class="button mt-4">
              Projects </Link>
            
            <a href="../..assets/Ron-ArjayCaluagBerResume.pdf" class="button mt-4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
