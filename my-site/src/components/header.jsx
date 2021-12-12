import React from "react";
import { NavLink } from "react-router-dom";

export const Header = props => {
    return (
        <div className="header mt-5" id="header">
            <h1 className="fw-bold">Michael Cuzzo</h1>
            <nav className="nav justify-content-center mt-5 mb-5 flex-column flex-sm-row"
            id="navBar">
                <NavLink to="/"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="bio"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>Bio</h3>
                </NavLink>
                <NavLink to="skills"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>Skills</h3>
                </NavLink>
                <NavLink to="projects"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>Projects</h3>
                </NavLink>
                <NavLink to="contact"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>Contact</h3>
                </NavLink>
            </nav>
        </div>
    );
}