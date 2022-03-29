import React, { useState, useEffect } from "react";
import './skills.scss';
import translation from "./translation";

const Skills = props => {
    const [language, setLanguage] = useState(props.lang);

    useEffect(() => {
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    const MySkills = [
        // skill, iconUrl(from https://devicon.dev/)
        { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "AngularJs", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Sass", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]

    MySkills.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="container">
            <h2 className="mb-5" id="tabHeader">{text.about}</h2>
            <div className="row flex-row">
                {
                    MySkills.map((skill) =>
                        <div className="card col-4 col-lg-2 m-3 p-3">
                            <img src={skill.iconUrl} alt={skill.name} className="skill-icon card-img-top mb-2" />
                            <p className="card-title">{skill.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Skills;