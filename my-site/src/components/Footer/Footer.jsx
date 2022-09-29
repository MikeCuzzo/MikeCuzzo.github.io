import React from "react";
import "./Footer.scss";

export class Footer extends React.Component {
  socials = [
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png",
      url: "https://github.com/MikeCuzzo",
    },
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png",
      url: "https://www.linkedin.com/in/michael-cuzzo/",
    },
  ];

  render() {
    return (
      <div id="footer">
        <div class="main-container">
          <div id="footer-upper-content">
            <div id="footer-social">
              <h1>Social</h1>
              <div id="list-socials">
                {this.socials.map((social) => (
                  <div id="footer-social-frame">
                    <a href={social.url} target="_blank">
                      <img src={social.icon} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div id="footer-name">
              <h1>Michael Cuzzo</h1>
              <p>
                A Frontend Developer focused on building Websites and Mobile
                Applications to improve everyday life
              </p>
            </div>
          </div>
          <div id="footer-lower-content">
            <p>© Copyright 2022. Made by Michael Cuzzo</p>
          </div>
        </div>
      </div>
    );
  }
}
