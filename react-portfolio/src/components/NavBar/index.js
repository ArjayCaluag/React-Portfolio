import React from "react";
import "./style.css";
import {Link} from "react-router-dom"
import resume from "../../assets/Ron-ArjayCaluagBerResume.pdf"

function NavBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation" id="navbar1">
                <div class="navbar-brand">
                <Link to ="/" class="navbar-item has-text-white">
                           Home
                        </Link>


                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item has-text-white" href="https://github.com/ArjayCaluag">
                            Github
                        </a>

                        <a class="navbar-item has-text-white"
                            href="https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/">
                            Linkedin
                        </a>
                        <Link to = {resume} target = "_blank" class="navbar-item has-text-white">
                            Resume
                            </Link>
                    </div>
                </div>
            </nav>
  );
}

export default NavBar;
