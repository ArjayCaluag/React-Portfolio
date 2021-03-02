import React from "react";
import projects from "../../assets/projects.json";
import './style.css'


const Project = () => {
  return (
    <section className="hero-is-medium" id="Projects">
      <h1
        className="title is-1 has-text-centered has-text-black is-family-monospace"
        id="project-title"
      >
        Projects
      </h1>
      <br />
      <div className="container project-container">
        {projects.map((project) => {
          return (
            <div className="columns">
              <div className="card column is-half is-offset-one-quarter">
                {/* <!-- Project card 1 --> */}
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>{project.name}</span>
                    </p>
                  </header>
                  <div className="card-content" id="projectCard">
                    <figure className="image is-4by3">
                      <img src= {project.image} alt={project.name} />
                    </figure>
                  </div>
                  <footer className="card-footer">
                    <a
                      href= {project.deployed}
                      className="card-footer-item"
                    >
                      Deployed Site
                    </a>
                    <a
                      href={project.repo}
                      className="card-footer-item"
                    >
                      Github Repo
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Project;
