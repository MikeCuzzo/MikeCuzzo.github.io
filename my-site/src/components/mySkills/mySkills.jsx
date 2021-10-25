import React from "react";
import './mySkills.css';

export default class MySkills extends React.Component {
    SkillsList(props) {
        const skills = props.skills;
        const listSkills = skills.map((skill) =>
        <li>{skill}</li>
        );
        return (
            <div id="skillsTable">
                <ul>{listSkills}</ul>
            </div>
        );
    }
    skills = [
        "C","C++","Java","HTML","CSS","Javascript","React","Angular"
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