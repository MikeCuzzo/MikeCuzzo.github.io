import React from "react";
import "./About.scss";

export class About extends React.Component {
  skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Angular",
    "React Native",
    "Swift",
    "SwiftUI",
    "GIT",
    "Agile Development",
  ];

  render() {
    return (
      <div id="about">
        <div class="main-container">
          <div>
            <h1 class="section-header">About Me</h1>
            <p class="section-subheader">
              Here you will find more information about me, what I do, and my
              current skills programming and technology
            </p>
          </div>
          <div id="about-content">
            <div id="about-content-me">
              <h3 class="about-content-title">About Me</h3>
              <div>
                <p class="about-me-content">
                  I am a <strong>Frontend Developer </strong> focused on
                  building Websites and Mobile Applications to improve everyday
                  life. Check out some of my work in the
                  <strong> Projects </strong> section.
                </p>
              </div>
            </div>
            <div id="about-content-skills">
              <h3 class="about-content-title">My Skills</h3>
              <div id="skills">
                {this.skills.map((skill) => (
                  <div class="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
