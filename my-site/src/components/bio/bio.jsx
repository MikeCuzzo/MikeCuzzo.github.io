import React, { useEffect, useState } from "react";
import GithubRepos from '../../api/githubRepos';
import Loading from '../loading/loading';
import './bio.scss';
import translation from "./translation";

const Bio = (props) => {
    const [account, setAccount] = useState(undefined);
    const [language, setLanguage] = useState(props.lang);

    const githubRepos = new GithubRepos();

    useEffect(() => {
        githubRepos.getOwner().then(x => setAccount(x));
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    if (!account) {
        return <div>
            <h2 className="mb-5" id="tabHeader">{text.about}</h2>
            <Loading />
        </div>
    }

    return <div className="container">
        <h2 className="mb-5" id="tabHeader">{text.about}</h2>
        <div className="row" id="bioDiv">
            <img src={account.avatar_url} alt="my-photo" className="col-lg-3 mb-4 w-25" id="myPhoto" />
            <div id="bio-text" className="col">
                <p className="col-12 col-lg-8 text-start">
                    {text.paragraph1}
                </p>

                <p className="col-12 col-lg-8 text-start">
                    {text.paragraph2}
                </p>
            </div>
        </div>
    </div>
}

export default Bio;