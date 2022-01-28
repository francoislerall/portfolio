import React, { useState } from "react";
import "components/body/About/styles.scss";
import SocialContact from "components/common/SocialContact";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <TextLoop children={["SOFTWARE", "ELECTRONIC", "ROBOTIC"]} /> ENGINEER
        </div>
        <div className="info-name">François Le Rall</div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
