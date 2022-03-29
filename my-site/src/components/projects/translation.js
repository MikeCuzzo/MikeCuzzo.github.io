const translation = (lang) => {
    const english = {
        about: "My Projects"
    }

    const french = {
        about: "Mes Projets"
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;