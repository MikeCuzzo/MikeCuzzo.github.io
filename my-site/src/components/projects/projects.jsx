import React, { useEffect, useState } from "react";
import GithubRepos from "../../api/githubRepos";
import Loading from '../loading/loading';
import ProjectCard from "../projectcard/projectcard";

const Projects = props => {
    const [repo, setRepo] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getRepos().then(x => setRepo(x));
    }, []);

    if (!repo) {
        return <div>
            <h2 id="tabHeader">My Projects</h2>
            <Loading />
        </div>
    }
    else { console.log(repo); }

    return <div className="container">
        <h2 className="mb-5" id="tabHeader">My Projects</h2>
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