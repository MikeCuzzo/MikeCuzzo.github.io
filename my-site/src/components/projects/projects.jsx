import React, { useEffect, useState } from "react";
import GithubRepos from "../../api/githubRepos";
import Loading from '../loading/loading';
import ProjectCard from "../projectcard/projectcard";
import translation from "./translation";

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
        <h2 className="mb-5" id="tabHeader">{text.about}</h2>
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