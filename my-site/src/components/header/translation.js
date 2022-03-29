const translation = (lang) => {
    const english = {
        home: "Home",
        bio: "Bio",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    }

    const french = {
        home: "Accueil",
        bio: "Bio",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;