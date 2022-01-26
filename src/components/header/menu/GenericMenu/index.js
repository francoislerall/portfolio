import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LaptopIcon from '@mui/icons-material/Laptop';
import PaletteIcon from '@mui/icons-material/Palette';
import WorkIcon from '@mui/icons-material/Work';

function GenericMenu({theme}) {
  return (
    <div className={theme.menu}>
      <div className={theme.option}>
        <a href="#projects">
          <PaletteIcon className={theme.optionIcon} />
          Projects
        </a>
      </div>
      <div className={theme.option}>
        <a href="#skills">
          <LaptopIcon className={theme.optionIcon} />
          Skills
        </a>
      </div>
      <div className={theme.option}>
        <a href="#experience">
          <WorkIcon className={theme.optionIcon} />
          Experience
        </a>
      </div>
      <div className={theme.option}>
        <a href="#contact">
          <ContactPageIcon className={theme.optionIcon} />
          Contact
        </a>
      </div>
    </div>
  );
}

export default GenericMenu;
