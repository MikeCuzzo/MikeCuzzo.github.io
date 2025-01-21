import React from "react";
import htvlogo from "./Assets/htvlogo.png";
import elydzlogo from "./Assets/elydzlogo.png";
import picklemalllogo from "./Assets/picklemalllogo.png";
import aylologo from "./Assets/aylologo.png";
import sideeye from "./Assets/sideeye.png";
import gameonsportz from "./Assets/Gameonsportz.png";
import "./Projects.scss";

export class Projects extends React.Component {
  projects = [
    {
      name: "Side Eye Studios",
      description:
        "Welcome to Side Eye Studios, a leading studio specializing in 2D and 3D visual effects (VFX) and video editing. With a dedicated team of professionals, Side Eye is committed to bringing clients' creative visions to life with unparalleled expertise and innovation. From breathtaking special effects to stunning animations, the studio offers comprehensive services to enhance any project. Utilizing cutting-edge technology and a passion for storytelling, Side Eye transforms ideas into unforgettable cinematic experiences. Explore their portfolio and discover how your dreams can turn into reality!",
      image: sideeye,
      link: "https://www.side-eye.com/",
    },
    {
      name: "Gameonsportz",
      description:
        "Worked on developing a Fantasy Football website in collaboration with Gameonsportz. Join an NFL league, build and manage your team, and access features like live scoring, detailed stats, and comprehensive reports. Explore a variety of pools, compete with friends, and win exciting prizes.",
      image: gameonsportz,
      link: "https://gameonsportz.com/",
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
    {
      name: "Elydz Portfolio Website",
      description:
        "Eldyz, a rising music artist making waves in the industry. Immerse yourself in the unique style and artistry of this talented musician through their official website. Listen to their latest releases, and get to know the artist behind the music. Join the elydz community and stay up-to-date on all the latest news and releases from this exciting artist.",
      image: elydzlogo,
      link: "https://www.elydz.net/",
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
                      Live Link Unavailable
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
