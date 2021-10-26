import React from "react";
import './cards.css';
import graphImg from './icons/graph.png'
import searchImg from './icons/search.png'

export default class Cards extends React.Component {
    ProjectList(props) {
        const projects = props.projects;
        const listProjects = projects.map((project) =>
        <div className = "card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="icon"/>
                <div className="content">
                <h3 id="projectName">{project.projectName}</h3>
                <p>
                    {project.languages.map((language) =>
                    <span class="badge badge-pill badge-primary" id="language">{language}</span>)}
                </p>
                <p id="description">{project.description}</p>
                </div>
            </a>
        </div>
        );
        return (
            <div className="cards">{listProjects}</div>
     );
    }
    projects = [
        {
            link: "https://github.com/MikeCuzzo/Kruskals-Vs-Prims-MST",
            image: graphImg,
            projectName: "Kruskals vs Prims MST",
            languages: ["C++","Python"],
            description: "This program generates a graph and compares the timing between Kruskal's and Prim's MST algorithm"
        },
        {
            link: "https://github.com/MikeCuzzo/Grivan-Newman",
            image: graphImg,
            projectName: "Girvan Newman Algorithm",
            languages: ["C++"],
            description: "This program reads in a graph and uses the girvan newman algorithim to determine communities within the graph"
        },
        {
            link: "https://github.com/MikeCuzzo/Sorting-Algorithm-Analysis",
            image: graphImg,
            projectName: "Sorting Algorithm Analysis",
            languages: ["C++"],
            description: "This program generates a data sets with unique qualities and compares the timing of different sorting algorithms"
        },
        {
            link: "https://github.com/MikeCuzzo/Search-Engine",
            image: searchImg,
            projectName: "Search Engine",
            languages: ["C++"],
            description: "This program reads in a directory of files and the user is able to search for keywords and have the most relavent files returned to them"
        },
]
    render() {
        return (
            <div>
            <h2 class="projectsTitle">My Projects</h2>
            <this.ProjectList projects={this.projects}/>
            </div>
        );
    }
}