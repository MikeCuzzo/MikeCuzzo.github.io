import React from "react";
import { Socials } from "./Socials/Socials";
import "./Home.scss";

export class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-content">
          <h1>Michael Cuzzo</h1>
          <div id="home-info">
            <p>Info</p>
          </div>
          <div id="home-button">
            <a>Button</a>
          </div>
        </div>
        <Socials />
      </div>
    );
  }
}
