import React from "react";
import Projectentry from "./Projectentry";
import projects from "../projects";

function createProject(project) {
  return (
    <Projectentry
      img={project.img}
      type={project.type}
      name={project.name}
      github={project.github}
      url={project.url}
      description={project.description}
    />
  );
}

function Project() {
  return <section class="section">{projects.map(createProject)}</section>;
}

export default Project;
