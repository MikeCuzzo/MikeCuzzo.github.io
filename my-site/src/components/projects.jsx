import React, { useEffect, useState } from "react";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const Projects = props => {
    const [repo, setRepo] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getRepos().then(x => setRepo(x));
    }, []);

    if (!repo) {
        return <Loading />
    }
    else { console.log(repo); }

    return <div className="container">
        <h1>My Projects</h1>
        <div className="row justify-content-evenly">
            {
                repo.map((project) => <div className="card col-lg-4 m-4" key={project.id}>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <div className="card-body">
                            <h3 className="card-title">{project.name}</h3>
                            <span className="badge rounded-pill bg-primary">{project.language}</span>
                            <p className="card-text">{project.description}</p>
                        </div>
                    </a>
                </div>
                )
            }
        </div>
    </div>
}