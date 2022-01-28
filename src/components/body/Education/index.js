import React from 'react';
import "components/body/Education/styles.scss";
import { EducationData } from 'data/education';
import EducationCard from 'components/body/EducationCard';

function Education() {
    const educationData = EducationData;

    return (
      <div className="education">
        {educationData.map((education) => {
          return <EducationCard education={education} />;
        })}
      </div>
    );}

export default Education;
