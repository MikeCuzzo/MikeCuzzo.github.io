import React, { useEffect, useState } from "react";
import './selectLanguage.scss';
import translation from './translation';

const SelectLanguage = props => {
    const [language, setLanguage] = useState(props.lang);
    const {handleLanguageChange} = props;

    useEffect(() => {
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    return (
        <div id="selectLanguage" className="mt-5">
            <p>{text.select}</p>
            {/* English */}
            <span onClick={() => handleLanguageChange("en")}>
                <img
                    src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                    className="language-icon"
                    alt="flag_uk" />
            </span>
            {/* French */}
            <span onClick={() => handleLanguageChange("fr")}>
                <img
                    src="https://flagicons.lipis.dev/flags/4x3/fr.svg"
                    className="language-icon"
                    alt="flag_fr" />
            </span>
        </div>
    );
}

export default SelectLanguage;