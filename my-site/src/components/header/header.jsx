import React from "react";
import MyPhoto from "./MyPhoto.jpeg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./Header.scss";

export class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header-content">
          <div id="header-logo">
            <img src={MyPhoto} />
            <a href="/">
              <h3>Michael Cuzzo</h3>
            </a>
          </div>
          <div id="header-main">
            <ul id="header-links">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
