import React from "react";
import './mySkills.css';
import C from './icons/C.png';
import Cpp from './icons/C++.png';
import Java from './icons/Java.png'
import HTML from './icons/HTML.png'
import CSS from './icons/CSS.png'
import Javascript from './icons/Javascript.png'
import ReactLogo from './icons/React.png'
import Angular from './icons/Angular.png'

export default class MySkills extends React.Component {
    SkillsList(props) {
        const skills = props.skills;
        const listSkills = skills.map((skill) =>
        <li className="skills"><img src={skill.photo}/><h3>{skill.name}</h3></li>
        );
        return (
            <div id="skillsTable">
                <ul>{listSkills}</ul>
            </div>
        );
    }
    skills = [
        { 
            name: "C",
            photo: C
        },
        {
            name: "C++",
            photo: Cpp
        },
        {
            name: "Java",
            photo: Java
        },
        {
            name: "HTML",
            photo: HTML
        },
        {
            name: "CSS",
            photo: CSS
        },
        {
            name: "Javascript",
            photo: Javascript
        },
        {
            name: "React",
            photo: ReactLogo
        },
        {
            name: "Angular",
            photo: Angular
        }   
    ]
    render() {
        return (
            <div class="mySkills">
                <h2>My Skills</h2>
                <this.SkillsList skills={this.skills}/>
            </div>
        )
    }
}