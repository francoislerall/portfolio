import React from "react";
import "components/body/Skills/styles.scss";
import Separator from "components/common/Separator";
import { SkillsData } from "data/skills";
import SkillCard from "../SkillCard";

function Skills() {
  const skillsData = SkillsData;

  return (
    <div className="skills">
        {skillsData.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Skills;
