import React, { useState } from "react";
import "components/hero/Hero/styles.scss";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WebMenu from "components/hero/menu/WebMenu";
import MobileMenu from "components/hero/menu/MobileMenu";
import About from "components/body/About";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="hero-style">
      <div className="header">
        <div className="logo-div">
          <img src={require("assets/icons/logo512.png")} className="logo" alt="logo of the website" />
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
      <div id="about">
        <About />
      </div>
    </section>
  );
}

export default Hero;
