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
            <img src={account.avatar_url} alt="my-photo" className="col-lg-3 mb-4 w-25" id="myPhoto" />
            <div id="bio-text" className="col">
                <p className="col-12 col-lg-8 text-start">
                    I am a 4th-year student studying Computer Science at Southern Methodist University.
                    I am an aspiring front-end software developer.
                </p>

                <p className="col-12 col-lg-8 text-start">
                    My passion for front-development stems from the joy of creating what the users will
                    see in their software. I feel a connection with the end users, and I like to put myself
                    in their shoes and pretend like I am them when I navigate my program.
                </p>
            </div>
        </div>
    </div>
}