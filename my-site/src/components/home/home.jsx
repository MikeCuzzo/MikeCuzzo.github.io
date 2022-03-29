import React, { useEffect, useState } from "react";
import OOResume from '../../Resumes/OO-Resume.pdf';
import WDResume from '../../Resumes/WD-Resume.pdf';
import './home.scss';
import translation from './translation';

const Home = props => {
    const [toDisplay, setDisplay] = useState("");
    const [language, setLanguage] = useState(props.lang);

    useEffect(() => {
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    return (
        <div className="container" id="home">
            <h1 className="mb-5" id="tabHeader">{text.welcome}</h1>
            <h5>{text.desc}</h5>
            <h3 className="mt-5 mb-5">{text.resumes}</h3>
            <div id="resume-buttons" className="d-flex justify-content-around w-50 mx-auto">
                <button className="badge btn-primary" onClick={() => setDisplay("OO")}>Object Oriented</button>
                <button className="badge btn-primary" onClick={() => setDisplay("WD")}>Web Developement</button>
            </div>
            {toDisplay === "OO" && <iframe src={OOResume} className="mt-5 w-100" />}
            {toDisplay === "WD" && <iframe src={WDResume} className="mt-5 w-100" />}
        </div>
    )
}

export default Home;