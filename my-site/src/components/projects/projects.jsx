import React, { useEffect, useState } from "react";
import GithubRepos from "../../api/githubRepos";
import Loading from '../loading/loading';
import ProjectCard from "../projectcard/projectcard";
import translation from "./translation";
import './projects.scss';

const Projects = props => {
    const [repo, setRepo] = useState(undefined);
    const [language, setLanguage] = useState(props.lang);

    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getRepos().then(x => setRepo(x));
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    if (!repo) {
        return <div>
            <h2 id="tabHeader">{text.about}</h2>
            <Loading />
        </div>
    }

    return <div className="container">
        <h2 className="mb-4" id="tabHeader">{text.about}</h2>
        <p id="source">Source</p>
        <a href="https://github.com/MikeCuzzo">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                id="github-icon"
                className="mb-5" />
        </a>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                repo.map((project) =>
                    <ProjectCard project={project} />
                )
            }
        </div>
    </div>
}

export default Projects;