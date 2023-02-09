import React, {useState} from "react";
import data from "../data";
import "./projects.css";

function Projects() {
  console.log(data);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleImageClick = (project) => {
    setSelectedProject(project);
    console.log(selectedProject)
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="container2">
        {data.map((project) => (
          <div className="apps">
            <h3>{project.name}</h3>
              <img src={project.image} alt="" onClick={() => handleImageClick(project)} />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h3>{selectedProject.name}</h3>
            <p><b>Description:</b> {selectedProject.description}</p>
            <div className="Headings">
              <h4>Github Repo</h4>
              <h4>Deployed Site</h4>
            </div>

            <div className="Links">
            <a href={selectedProject.repo}>
              {" "}
              <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="github"/> 
            </a>
            <a href={selectedProject.url}>
              {" "}
              <img src="https://cdn-icons-png.flaticon.com/512/6649/6649582.png" alt="Deployed Site"/> 
            </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
