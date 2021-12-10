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
            <h2 className="mb-5">About Me</h2>
            <Loading />
        </div>
    }

    return <div className="container">
        <h2 className="mb-5" id="tabHeader">About Me</h2>
        <div className="row" id="bioDiv">
            <img src={account.avatar_url} alt="my-photo" className="col-lg-3" id="myPhoto"/>
            <p className="col-12 col-lg-8 text-start" id="bio">{account.bio}</p>
        </div>
    </div>
}