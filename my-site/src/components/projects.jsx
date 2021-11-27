import React, { useEffect, useState } from "react";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const Projects = props => {
    const [repo, setRepo] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getRepos().then(x => setRepo(x));
    }, []);

    if(!repo) {
        return <Loading/>
    }

    return <div className="container">
        {
            repo.map((project) => <div className="card">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                    <div className="card-body">
                        <h3 className="card-title">{project.name}</h3>
                        <p>
                            <span className="badge badge-pill badge-primary">{project.language}</span>
                        </p>
                        <p className="card-text">{project.description}</p>
                    </div>
                </a>
            </div>
            )
        }
    </div>
}