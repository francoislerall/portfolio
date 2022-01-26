import React from "react";
import "components/body/About/styles.scss";
import SocialContact from "components/common/SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, I am
          <br /> <span className="info-name">François Le Rall</span>,
          <br /> I am a software engineer!
        </div>
        <div className="about-photo">
          <img
            src={require("assets/profile.jpg")}
            className="profile-picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
