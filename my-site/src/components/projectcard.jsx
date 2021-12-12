import React, { useEffect, useState } from "react";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const ProjectCard = props => {
    const [project, setProject] = useState(props.project);
    const [languages, setLanguages] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        // setProject(props.project);
        githubRepos.getLanguages(project.name).then(x => setLanguages(x));
    }, []);

    const varToString = varObj => Object.keys(varObj).slice(0,4)

    if (!languages) {
        return <div>
            <h2>My Projects</h2>
            <Loading />
        </div>
    }

    else{console.log(languages)}

    return <div className="col">
        <div className="card" key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                <div className="card-body">
                    <h3 className="card-title">{project.name}</h3>
                    <span className="badge rounded-pill bg-primary mb-2 mx-1">{project.language}</span>
                    {/* {
                        varToString(languages).map((language) =>
                            <span className="badge rounded-pill bg-primary mb-2 mx-1">{language}</span>
                        )
                    } */}
                    <p className="card-text align-middle">{project.description}</p>
                </div>
            </a>
        </div>
    </div>

}