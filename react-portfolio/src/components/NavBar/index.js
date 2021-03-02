import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation" id="navbar1">
                <div class="navbar-brand">
                    <h1 class="mt-3 has-text-white ml-5">Connect with me!</h1>


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
                        <a class="navbar-item has-text-white" href="../../assets/Ron-ArjayCaluagBerResume.pdf">
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
  );
}

export default NavBar;
