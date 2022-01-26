import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import GenericMenu from "components/header/menu/GenericMenu";
import "components/header/menu/MobileMenu/styles.scss";


function MobileMenu({isOpen, setIsOpen}) {
  const theme = {
    menu: "mobile-options",
    option: "mobile-option",
    optionIcon: "mobile-option-icon",
  };

  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <CloseIcon fontSize="large" />
    </div>
    <GenericMenu theme={theme} />
  </div>
  );
}

export default MobileMenu;
