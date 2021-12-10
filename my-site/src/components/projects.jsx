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
        return <div>
            <h2>My Projects</h2>
            <Loading />
        </div>
    }
    else { console.log(repo); }

    return <div className="container">
        <h2 className="mb-5">My Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                repo.map((project) => <div className="col">
                    <div className="card" key={project.id}>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title">{project.name}</h3>
                                <span className="badge rounded-pill bg-primary mb-2">{project.language}</span>
                                <p className="card-text align-middle">{project.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
                )
            }
        </div>
    </div>
}