import { ProjectsData } from "data/projects";
import React from "react";
import ProjectCard from "components/body/ProjectCard";

function Projects() {
  const projectsData = ProjectsData;

  return (
    <div className="projects">
      {projectsData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Projects;
