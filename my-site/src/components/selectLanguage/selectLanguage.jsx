import React, { useEffect, useState } from "react";
import './selectLanguage.scss';

const SelectLanguage = props => {
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    }

    return (
        <div id="selectLanguage" className="mt-5">
            {/* English */}
            <img 
            src="https://flagicons.lipis.dev/flags/4x3/gb.svg" 
            className="language-icon" 
            onClick={() => handleLanguageChange("en")}/>
            {/* French */}
            <img 
            src="https://flagicons.lipis.dev/flags/4x3/fr.svg" 
            className="language-icon"
            oncClick={() => handleLanguageChange("fr")} />
        </div>
    );
}

export default SelectLanguage;