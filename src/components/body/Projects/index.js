import { ProjectsData } from "data/projects";
import React from "react";
import ProjectCard from "components/body/ProjectCard";
import Separator from "components/common/Separator";

function Projects() {
  const projectsData = ProjectsData;

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {projectsData.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
