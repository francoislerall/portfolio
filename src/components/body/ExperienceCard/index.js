import React from "react";
import "components/body/ExperienceCard/styles.scss";

function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <div className="experience-logo">{item.companyLogo}</div>
      <div className="experience-info">
        <label className="company-name">
          {item.company} {item.location}
        </label>
        <div className="experience-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="experience-about">
          <p>{item.about}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
