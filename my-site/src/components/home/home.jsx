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
            <p>
              A Frontend Developer focused on building Websites and Mobile
              Applications to improve everyday life
            </p>
          </div>
          <div id="home-button">
            <button onClick={() => window.location.replace("/#projects")}>
              Projects
            </button>
          </div>
        </div>
        <Socials />
        <div id="downarrow">
          <img src="https://images.squarespace-cdn.com/content/v1/60f36cf54ab5a4742928e58e/1626569961284-WCMK8IK4S3NENWFCYJ0E/war+on+sanity+arrow+.gif" />
        </div>
      </div>
    );
  }
}
