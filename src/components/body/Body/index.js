import React from "react";
import About from "components/body/About";
import Contact from "components/body/Contact";
import Experience from "components/body/Experience";
import Projects from "components/body/Projects";
import Skills from "components/body/Skills";
import "components/body/Body/styles.scss";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
