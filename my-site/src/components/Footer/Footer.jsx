import React from "react";
import "./Footer.scss";

export class Footer extends React.Component {
  socials = [
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png",
      url: "https://www.linkedin.com/in/michael-cuzzo/",
    },
    {
      icon: "https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png",
      url: "https://github.com/MikeCuzzo",
    },
  ];

  render() {
    return (
      <div id="footer">
        <div className="main-container">
          <div id="footer-upper-content">
            <div id="footer-social">
              <h1>Social</h1>
              <div id="list-socials">
                {this.socials.map((social) => (
                  <div id="footer-social-frame" key={social.url}>
                    <a href={social.url} target="_blank" rel="noreferrer">
                      <img src={social.icon} alt={social.url} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div id="footer-name">
              <h1>Michael Cuzzo</h1>
              <p>
                A Software Developer specializing in building applications with
                a strong emphasis on professional UI/UX design, bringing a
                meticulous approach to creating seamless and user-friendly
                digital experiences.
              </p>
            </div>
          </div>
          <div id="footer-lower-content">
            <p>© Copyright 2024. Made by Michael Cuzzo</p>
          </div>
        </div>
      </div>
    );
  }
}
