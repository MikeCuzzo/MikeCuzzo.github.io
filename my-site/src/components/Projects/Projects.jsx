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
      link: "",
    },
    {
      name: "Tiny World",
      description:
        "This Tiny World is the home website for the associated NFT project. This Website intends users to gain information about the project, the lore and we able to mint these NFTs into their Ethereum wallets.",
      image: tinyworldlogo,
      link: "",
    },
  ];
  render() {
    return (
      <div id="projects" class="section">
        <div class="main-container">
          <div class="heading">
            <h1 class="section-header">Projects</h1>
            <p class="section-subheader">
              Here you will find some of the personal and clients projects that
              I created
            </p>
          </div>
          <div id="projects-container">
            {this.projects.map((project) => (
              <div class="project-item">
                <img
                  src={project.image}
                  alt={project.name}
                  class="project-image"
                />
                <div class="project-info">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  {project.link == "" ? (
                    <button className="disabled-button">
                      Live Link Coming Soon
                    </button>
                  ) : (
                    <button>Live Link</button>
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
