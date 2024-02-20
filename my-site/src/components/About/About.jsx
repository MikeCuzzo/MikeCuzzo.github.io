import React from "react";
import "./About.scss";

export class About extends React.Component {
  skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "React Native",
    "Swift",
    "SwiftUI",
    "Java",
    "Spring Boot",
    "Python",
    "Amazon Web Services",
    "GIT",
    "Agile Development",
  ];

  render() {
    return (
      <div id="about" className="section">
        <div className="main-container">
          <div className="heading">
            <h1 className="section-header">About Me</h1>
            <p className="section-subheader">
              Here you will find more information about me, what I do, and my
              current skills with programming and technology.
            </p>
          </div>
          <div id="about-content">
            <div id="about-content-me">
              <h3 className="about-content-title">About Me</h3>
              <div>
                <p className="about-me-content">
                  I am a <strong>Software Developer </strong> specializing in
                  building applications with a strong emphasis on professional
                  UI/UX design, bringing a meticulous approach to creating
                  seamless and user-friendly digital experiences. Check out some
                  of my work in the <strong>Projects</strong> section.
                </p>
                <p className="about-me-content">
                  I'm open to <strong>project</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don't hesitate to{" "}
                  <strong> contact</strong> me.
                </p>
                <button
                  className="button"
                  id="contact-me-button"
                  onClick={() => window.location.replace("/#contact")}
                >
                  Contact
                </button>
              </div>
            </div>
            <div id="about-content-skills">
              <h3 className="about-content-title">My Skills</h3>
              <div id="skills">
                {this.skills.map((skill) => (
                  <div className="skill-item" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
