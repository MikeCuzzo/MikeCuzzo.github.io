const translation = (lang) => {
    const english = {
        about: "My Skills"
    }

    const french = {
        about: "Mes Compétences"
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;