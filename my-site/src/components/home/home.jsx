import React from "react";
import { Socials } from "./Socials/Socials";
import downarrow from "./Assets/downarrow.gif";
import "./Home.scss";

export class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-content">
          <h1>Michael Cuzzo</h1>
          <div id="home-info">
            <p>
              A Software Developer specializing in building applications with a
              strong emphasis on professional UI/UX design, bringing a
              meticulous approach to creating seamless and user-friendly digital
              experiences.
            </p>
          </div>
          <div id="home-button">
            <button
              className="button"
              onClick={() => window.location.replace("/#projects")}
            >
              Projects
            </button>
          </div>
        </div>
        <Socials />
        <div id="downarrow">
          <button onClick={() => window.location.replace("/#about")}>
            <img src={downarrow} alt="downarrow" />
          </button>
        </div>
      </div>
    );
  }
}
