import React, { useEffect, useState } from "react";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const Bio = props => {
    const [account, setAccount] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getOwner().then(x => setAccount(x));
    }, []);

    if (!account) {
        return <Loading/>
    }

    return <div className="container">
        <h1>About Me</h1>
        <p>{account.bio}</p>
    </div>
}