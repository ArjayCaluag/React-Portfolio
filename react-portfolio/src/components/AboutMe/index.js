import React from "react";
import "./style.css";
import linkedinpic from "../../assets/linkedinpic.jpg"
import githubicon from "../../assets/iconfinder_mark-github_298822.png"
import linkedinicon from "../../assets/iconfinder_51-linkedin_104452.png"

function AboutMeSec() {
  return (
    <section class="hero is-medium" id="about-me-sec">
      <h1 class="title is-1 has-text-centered has-text-white is-family-monospace mt-5">
        About Me
      </h1>
      {/* <!-- Hero content: will be in the middle --> */}
      <div class="hero-body">
        <div class="columns has-text-centered">
          <div class="column is-one-third" id="picture">
            <img src={linkedinpic}/>
          </div>

          <div class="column is-three-fifths " id="about-me">
            <div class="column">
              <p class="has-text-centered has-text-white is-family-monospace">
                {" "}
                Up and coming aspiring full stack Web Developer. Currently
                enrolled into Berkeley's Full Stack Bootcamp. I'm looking for an
                opportunity to put my skill set to the test with a full-time web
                development position.{" "}
              </p>

              <div class="column">
                <p> Please reach out to me for any possible opportunities!</p>
                <p class="has-text-white">arjaycaluag@gmail.com</p>
                <p class="has-text-white">650-922-9921</p>
                <br />

                <a href="https://github.com/ArjayCaluag/">
                  <img src={githubicon} />
                </a>

                <a href="https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/">
                  <img src={linkedinicon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSec;