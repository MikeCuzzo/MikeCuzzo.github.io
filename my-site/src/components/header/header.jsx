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
          <div id="header-logo" onClick={() => window.location.replace("")}>
            <img src={MyPhoto} />
            <h3>Michael Cuzzo</h3>
          </div>
          <div id="header-main">
            <ul id="header-links">
              <li onClick={() => window.location.replace("")}>Home</li>
              <li onClick={() => window.location.replace("/#about")}>About</li>
              <li onClick={() => window.location.replace("/#projects")}>
                Projects
              </li>
              <li onClick={() => window.location.replace("/#contact")}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
