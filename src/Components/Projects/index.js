import React from "react";
import data from "../data";
import "./projects.css";

function Projects() {
  console.log(data);
  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="container2">
        {data.map((project) => (
          <div className="apps">
            <h3>{project.name}</h3>
            <a href={project.url}>
              {" "}
              <img src={project.image} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
