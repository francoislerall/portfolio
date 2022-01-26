import React from "react";
import "components/body/Experience/styles.scss";
import Separator from "components/common/Separator";
import { ExperienceData } from "data/experience";
import ExperienceCard from "components/body/ExperienceCard";

function Experience() {
  const experienceData = ExperienceData;
  return (
    <div className="experience">
      <Separator />
      <label className="section-title">Experience</label>
      <div className="experience-list">
        {experienceData.map((item) => {
          return <ExperienceCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
