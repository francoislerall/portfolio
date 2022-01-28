import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "components/body/Experience/styles.scss";
import { ExperienceData } from "data/experience";

function Experience() {
  const experienceData = ExperienceData;

  return (
    <div className="experience">
      <Tabs>
        <TabList>
          {experienceData.map((experience) => {
            return (
              <Tab>
                <p>{experience.company}</p>
              </Tab>
            );
          })}
        </TabList>

        {experienceData.map((experience) => {
          return (
            <TabPanel>
              <div className="panel-content">
                <p>
                  <span className="experience-designation">
                    {experience.designation}
                  </span>
                  <a
                  className="company-link"
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {" "}@ {experience.company}
                  </a>
                </p>
                <p className="experience-dates">{ experience.dates }</p>
                <ul className="about-list">
                  {experience.about.map((item) => {
                    return <li className="about-item"><div>{item.info}</div></li>;
                  })}
                </ul>
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Experience;
