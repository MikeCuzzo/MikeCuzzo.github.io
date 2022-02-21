import React, { useEffect, useState } from "react";
import OOResume from '../Resumes/OO-Resume.pdf';
import WDResume from '../Resumes/WD-Resume.pdf';

export const Home = props => {
    const [toDisplay, setDisplay] = useState("");

    return (
        <div className="container">
            <h1 className="mb-5" id="tabHeader">Welcome to My Website!</h1>
            <h5>
                Here you can get an idea of who I am,
                see what technical skills I possess,
                see what projects I have worked on,
                and provide links to contact me.
            </h5>
            <h3 className="mt-5 mb-5">Checkout My Resumes</h3>
            <div id="resume-buttons" className="d-flex justify-content-around w-50 mx-auto">
                <button className="badge btn-primary" onClick={() => setDisplay("OO")}>Object Oriented</button>
                <button className="badge btn-primary" onClick={() => setDisplay("WD")}>Web Developement</button>
            </div>
            {toDisplay === "OO" && <iframe src={OOResume} className="mt-5 w-100" />}
            {toDisplay === "WD" && <iframe src={WDResume} className="mt-5 w-100" />}
        </div>
    )
}