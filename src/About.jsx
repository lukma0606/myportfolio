import React from "react";
import Skills from "./Skills";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
   <>
    <Fade direction='up' triggerOnce delay={200}>
    <section id="about" className="section centered-section">
      <h2 className="text-center">
        <span className="sub-heading-text">About me</span>
      </h2>
      <p className="text-center nested-sub-heading">Know Me More</p>
      <p className="para-text">
        I am a React.js developer with 2.5 years of experience in building
        dynamic, responsive, and high-performance web applications. I specialize
        in developing mobile-friendly websites and optimizing user experiences.
        My expertise includes React hooks, state management (Redux Toolkit,
        Context API), component-driven architecture, and integrating REST APIs.
        I am passionate about writing clean, maintainable code and continuously
        improving performance and accessibility.
      </p>
    </section>
    </Fade>
    <Fade direction='up' triggerOnce delay={200}>
    <section className="skill-section">
   <Skills/>
    </section>
    </Fade>

    <div className="resume-btn-parent mb-common">
    <a href="/resume.pdf"  download="lukman_Resume.pdf">
        <button className="resume-btn pointer">Download Resume</button>
      </a>
      </div>
      
    </>
  );
};

export default About;
