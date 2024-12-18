import React, { useState } from "react";
import classNames from "classnames";
import projects from "./ProjectData";
import "../styles/projectMenu.css";

const ProjectMenu = () => {
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3 className="project">{project.title}</h3>
        <img src={project.image} alt={project.title} className="projecimg" />
        <div className="project">{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  const projectItems = [
    "PROJECT ONE",
    "PROJECT TWO",
    "PROJECT THREE",
    "PROJECT FOUR",
    "PROJECT FIVE",
    "PROJECT SIX",
    "PROJECT SEVEN",
    "PROJECT EIGHT",
  ];

  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames("project-item", {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
};

export default ProjectMenu;
