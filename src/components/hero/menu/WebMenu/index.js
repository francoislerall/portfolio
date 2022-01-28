import React from "react";
import "components/hero/menu/WebMenu/styles.scss";
import MenuResumeDownloadButton from "../MenuResumeDownloadButton";

function WebMenu() {
  return (
    <div className="web">
      <ol className="web-menu-list">
        <li className="web-menu-item">
          <a href="#education">
            <span className="menu-label">Education</span>
          </a>
        </li>
        <li className="web-menu-item">
          <a href="#experience">
            <span className="menu-label">Experience</span>
          </a>
        </li>
        <li className="web-menu-item">
          <a href="#projects">
            <span className="menu-label">Projects</span>
          </a>
        </li>
        <li className="web-menu-item">
          <a href="#contact">
            <span className="menu-label">Contact</span>
          </a>
        </li>
      </ol>
      <div className="web-menu-resume">
        <MenuResumeDownloadButton />
      </div>
    </div>
  );
}

export default WebMenu;
