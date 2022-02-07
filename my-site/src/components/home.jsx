import React from "react";
import OOResume from '../Resumes/OO-Resume.pdf'
import WDResume from '../Resumes/WD-Resume.pdf'

export const Home = props => {
    var displayOO = false;
    var displayWD = false;

    function renderOO() {
        displayOO = true;
        displayWD = false;
    };

    function renderWD() {
        displayOO = false;
        displayWD = true;
    };

    return (
        <div className="container">
            <h1 className="mb-5" id="tabHeader">Welcome to My Website!</h1>
            <h5>
                Here you can get an idea of who I am,
                see what technical skills I possess,
                see what projects I have worked on,
                and provide links to contact me.
            </h5>
            <h3 className="mt-5 mb-3">Checkout My Resumes</h3>
            <div id="resume-buttons" className="d-flex justify-content-around w-50 mx-auto">
                <button className="badge btn-primary" onClick={renderOO}>Object Oriented</button>
                <button className="badge btn-primary" onClick={renderWD}>Web Developement</button>
            </div>
            <iframe src={OOResume} className="w-100 bg-none"></iframe>
            <iframe src={WDResume} className="w-100 bg-none"></iframe>
        </div>
    )
}