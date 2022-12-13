import React from "react";
import htvlogo from "./Assets/htvlogo.png";
import tinyworldlogo from "./Assets/tinyworldlogo.png";
import "./Projects.scss";

export class Projects extends React.Component {
  projects = [
    {
      name: "Head to Vegas",
      description:
        "Head to Vegas was created to assist in the planning and booking of trips to Las Vegas. This is achieved by means of aggregating, saving and sharing of amenities essential to a trip to Las Vegas such as flights, hotels, events and reservations.",
      image: htvlogo,
      link: "https://www.headtovegas.com/",
    },
    {
      name: "Tiny World",
      description:
        "This website is the home for the Tiny World NFT project. This Website is intended for users to gain information about the project, the lore and they will be able to mint items from this collection into their Ethereum wallets.",
      image: tinyworldlogo,
      link: "https://www.tinyworld.me",
    },
  ];
  render() {
    return (
      <div id="projects" className="section">
        <div className="main-container">
          <div className="heading">
            <h1 className="section-header">Projects</h1>
            <p className="section-subheader">
              Here you will find some of the personal and clients projects that
              I created
            </p>
          </div>
          <div id="projects-container">
            {this.projects.map((project) => (
              <div className="project-item" key={project.name}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-info">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  {project.link === "" ? (
                    <button className="disabled-button">
                      Live Link Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      className="live-link"
                    >
                      <button className="button">Live Link</button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
