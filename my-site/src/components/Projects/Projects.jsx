import React from "react";
import htvlogo from "./Assets/htvlogo.png";
import elydzlogo from "./Assets/elydzlogo.png";
import picklemalllogo from "./Assets/picklemalllogo.png";
import aylologo from "./Assets/aylologo.png";
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
      name: "Elydz Portfolio Website",
      description:
        "Eldyz, a rising music artist making waves in the industry. Immerse yourself in the unique style and artistry of this talented musician through their official website. Listen to their latest releases, and get to know the artist behind the music. Join the elydz community and stay up-to-date on all the latest news and releases from this exciting artist.",
      image: elydzlogo,
      link: "https://www.elydz.net/",
    },
    {
      name: "Pickle Mall",
      description:
        "The PickleMall website is designed to provide users with an effortless online experience, ensuring easy access to our cutting-edge indoor pickleball facilities. By allowing players to book courts, view schedules, and stay up-to-date on the latest events and promotions, our website is the go-to digital platform for pickleball enthusiasts. Connect with fellow players and secure your spot on the court today with the PickleMall website – your one-stop destination for all things pickleball.",
      image: picklemalllogo,
      link: "https://thepicklemall.com/",
    },
    {
      name: "Ryan Dylan Selkirk Portfolio Website",
      description:
        "Ryan Dylan Selkirk, also known as Aylo—a visionary music video director who transforms auditory art into mesmerizing visual experiences. With a distinct knack for animation and an eye for aesthetic nuance, Aylo's work captures the essence of music in every frame. Explore the site to view a curated selection of projects, and journey through a landscape where sound meets vision.",
      image: aylologo,
      link: "https://www.ryandylanselkirk.com/",
    },
  ];
  render() {
    return (
      <div id="projects" className="section">
        <div className="main-container">
          <div className="heading">
            <h1 className="section-header">Projects</h1>
            <p className="section-subheader">
              On this page, you will discover a variety of personal and client
              projects that showcase my creative abilities and collaborative
              efforts with other talented individuals.
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
                      rel="noreferrer"
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
