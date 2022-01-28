import React from "react";
import "components/body/ProjectCard/styles.scss";
import PreviewIcon from "@mui/icons-material/Preview";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-location">
          {project.location && (
            <a
              className="project-location-link"
              href={project.locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="location-link-button">
                <LocationOnIcon fontSize="small"/>
                {project.location}
              </div>
            </a>
          )}
        </div>

        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <PreviewIcon fontSize="small"/>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <GitHubIcon fontSize="small"/>
                GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <ul className="project-tags">
          {project.tags.map((tag) => {
            return <li className="tag">{tag}</li>;
          })}
        </ul>
      </div>
      <img src={project.image} className="project-photo" alt={`the project: ${project.id}`}/>
    </div>
  );
}

export default ProjectCard;
