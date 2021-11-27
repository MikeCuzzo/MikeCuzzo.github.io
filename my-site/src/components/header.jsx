import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GithubRepos from "../api/githubRepos";
import Loading from './loading';

export const Header = props => {
    const [account, setAccount] = useState(undefined);
    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getOwner().then(x => setAccount(x));
    }, []);

    // if (!account) {
    //     return <Loading className="position-absolute top-50 bottom-50"/>
    // }

    return (
        <div className="header mt-5">
            <div className="headerText">
                <h1>Michael Cuzzo</h1>
            </div>
            <nav className="nav justify-content-center mt-4">
                <hr size="10"/>
                <NavLink to="/" className="nav-link active">
                    Home
                </NavLink>
                <NavLink to="bio" className="nav-link">
                    Bio
                </NavLink>
                <NavLink to="skills" className="nav-link">
                    Skills
                </NavLink>
                <NavLink to="projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="contact" className="nav-link">
                    Contact
                </NavLink>
                <hr/>
            </nav>
            {/* <img src={account.avatar_url} alt="my-photo" className="my-photo" /> */}
        </div>
    );
}