import React from "react";
import { NavLink } from "react-router-dom";

export const Header = props => {
    return (
        <div className="header mt-5">
            <h1 className="name">Michael Cuzzo</h1>
            <nav className="nav justify-content-center mt-4 mb-5">
                <hr size="10" />
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
                <hr />
            </nav>
            {/* <img src={account.avatar_url} alt="my-photo" className="my-photo" /> */}
        </div>
    );
}