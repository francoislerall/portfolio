import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "components/hero/menu/MobileMenu/styles.scss";
import MenuResumeDownloadButton from "components/hero/menu/MenuResumeDownloadButton";

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <aside className="mobile-menu-pannel">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <CloseIcon fontSize="large" />
      </div>
      <div className="mobile">
        <ol className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a href="#education">
              <span className="menu-label">Education</span>
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#experience">
              <span className="menu-label">Experience</span>
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#projects">
              <span className="menu-label">Projects</span>
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#contact">
              <span className="menu-label">Contact</span>
            </a>
          </li>
        </ol>
        <div>
          <MenuResumeDownloadButton />
        </div>
      </div>
    </aside>
  );
}

export default MobileMenu;
