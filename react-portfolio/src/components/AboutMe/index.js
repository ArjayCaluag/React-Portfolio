import React from "react";
import "./style.css";
import linkedinpic from "../../assets/linkedinpic.jpg";
import githubicon from "../../assets/iconfinder_mark-github_298822.png";
import linkedinicon from "../../assets/iconfinder_51-linkedin_104452.png";

function AboutMeSec() {
  return (
    <section className="hero is-medium" id="about-me-sec">
      <h1 className="title is-1 has-text-centered has-text-white is-family-monospace mt-5">
        About Me
      </h1>
      {/* <!-- Hero content: will be in the middle --> */}
      <div className="hero-body">
        <div className="columns has-text-centered">
          <div className="column is-one-third" id="picture">
            <img src={linkedinpic} />
          </div>

          <div className="column is-three-fifths " id="about-me">
            <div className="column">
              <p className="has-text-centered has-text-white is-family-monospace">
                {" "}
                Up and coming aspiring full stack Web Developer. Currently
                enrolled into Berkeley's Full Stack Bootcamp. I'm looking for an
                opportunity to put my skill set to the test with a full-time web
                development position. Please view my skill set below!{" "}
              </p>

              <div className="column">
                <p> Please reach out to me for any possible opportunities!</p>
                <p className="has-text-white">arjaycaluag@gmail.com</p>
                <p className="has-text-white">650-922-9921</p>
                <br />

                <a href="https://github.com/ArjayCaluag/" target="_blank">
                  <img src={githubicon} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/"
                  target="_blank"
                >
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
