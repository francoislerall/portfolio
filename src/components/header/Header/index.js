import React, { useState } from "react";
import "components/header/Header/styles.scss";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WebMenu from "components/header/menu/WebMenu";
import MobileMenu from "components/header/menu/MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo-div">
        <img src={require("assets/icons/logo512.png")} className="logo" />
      </div>
      <div className="menu">
        <div className="web-menu">
          <WebMenu />
        </div>
        <div className="mobile-menu">
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <MenuOpenIcon fontSize="large" />
          </div>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
