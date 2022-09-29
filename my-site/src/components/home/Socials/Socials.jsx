import React from "react";
import "./Socials.scss";

export class Socials extends React.Component {
  socials = [
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg",
      url: "https://github.com/MikeCuzzo",
    },
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg",
      url: "https://www.linkedin.com/in/michael-cuzzo/",
    },
  ];

  render() {
    return (
      <div id="socials">
        {this.socials.map((social) => (
          <div id="social-frame">
            <a href={social.url} target="_blank">
              <img src={social.icon} />
            </a>
          </div>
        ))}
      </div>
    );
  }
}
