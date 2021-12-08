import React, { useEffect, useState } from "react";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const Skills = props => {
    const [repo, setRepo] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getRepos().then(x => setRepo(x));
    }, []);

    if (!repo) {
        return <div>
            <h2>My Skills</h2>
            <Loading />
        </div>
    }
    return (
        <div>
            <h2>My Skills</h2>
        </div>
    )
}