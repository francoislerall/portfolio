import React from "react";
import Contact from "components/body/Contact";
import Experience from "components/body/Experience";
import Projects from "components/body/Projects";
import Education from "components/body/Education";
import "components/body/Body/styles.scss";
import Separator from "components/common/Separator";

function Body() {
  return (
    <div className="body">
      <ol className="section-list">
        <Separator />
        <section id="education">
        <li className="section-item">
          <label className="section-title">Education</label>
        </li>
          <Education />
        </section>
        <Separator />
        <section className="section-experience" id="experience">
        <li className="section-item">
          <label className="section-title">Experience</label>
        </li>
          <Experience />
        </section>
        <Separator />
        <section id="projects">
        <li className="section-item">
          <label className="section-title">Projects</label>
        </li>
          <Projects />
        </section>
        <Separator />
        <section id="contact">
        <li className="section-item">
          <label className="section-title">Contact</label>
        </li>
          <Contact />
        </section>
      </ol>
    </div>
  );
}

export default Body;
