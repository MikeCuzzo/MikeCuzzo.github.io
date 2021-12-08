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
        return <div>
            <h2>About Me</h2>
            <Loading />
        </div>
    }

    return <div className="container">
        <h2 className="mb-5">About Me</h2>
        <div className="row">
            <img src={account.avatar_url} alt="my-photo" className="col-3 rounded-circle" />
            <p className="col-8 align-middle">{account.bio}</p>
        </div>
    </div>
}