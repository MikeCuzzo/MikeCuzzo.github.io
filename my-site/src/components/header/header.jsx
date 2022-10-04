import React from "react";
import MyPhoto from "./MyPhoto.jpeg";
import "./Header.scss";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  handleLinkClick(area) {
    window.location.replace(area);
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <div id="header">
        <div id="header-content">
          <div id="header-logo" onClick={() => window.location.replace("")}>
            <div id="myImageDiv">
              <img src={MyPhoto} alt="MyPhoto" />
            </div>
            <h3>Michael Cuzzo</h3>
          </div>
          <div id="header-main">
            <ul id="header-links">
              <li onClick={() => this.handleLinkClick("")}>Home</li>
              <li onClick={() => this.handleLinkClick("/#about")}>About</li>
              <li onClick={() => this.handleLinkClick("/#projects")}>
                Projects
              </li>
              <li onClick={() => this.handleLinkClick("/#contact")}>Contact</li>
            </ul>
            <div id="header-menu">
              <img
                src={
                  this.state.showMenu
                    ? "https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
                    : "https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
                }
                alt="hamburger menu"
                id="header-menu-button"
                onClick={() =>
                  this.setState({ showMenu: !this.state.showMenu })
                }
              />
            </div>
          </div>
        </div>
        {this.state.showMenu && (
          <div id="header-menu-content">
            <ul>
              <li onClick={() => this.handleLinkClick("")}>Home</li>
              <li onClick={() => this.handleLinkClick("/#about")}>About</li>
              <li onClick={() => this.handleLinkClick("/#projects")}>
                Projects
              </li>
              <li onClick={() => this.handleLinkClick("/#contact")}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
