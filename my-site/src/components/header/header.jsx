import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './header.scss';
import translation from './translation';

const Header = props => {

    const [language, setLanguage] = useState(props.lang);

    useEffect(() => {
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);


    return (
        <div className="header mt-5" id="header">
            <h1 className="fw-bold">Michael Cuzzo</h1>
            <nav className="nav justify-content-center mt-5 mb-5 flex-column flex-sm-row"
                id="navBar">
                <NavLink to="/"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>{text.home}</h3>
                </NavLink>
                <NavLink to="bio"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>{text.bio}</h3>
                </NavLink>
                <NavLink to="skills"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>{text.skills}</h3>
                </NavLink>
                <NavLink to="projects"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>{text.projects}</h3>
                </NavLink>
                <NavLink to="contact"
                    className={(navData) =>
                        navData.isActive ? "nav-link nav-link-focus" : "nav-link"}>
                    <h3>{text.contact}</h3>
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;