const translation = (lang) => {
    const english = {
        about: "About Me",

        paragraph1: `I am a 4th-year student studying Computer Science at Southern Methodist University.
        I am an aspiring front-end software developer.`,

        paragraph2: `My passion for front-development stems from the joy of creating what the users will
        see in their software. I feel a connection with the end users, and I like to put myself
        in their shoes and pretend like I am them when I navigate my program.`
    }

    const french = {
        about: "À Propos de Moi",

        paragraph1: `Je suis un étudiant en 
        4ème année en informatique à Southern Methodist University.`,

        paragraph2: `Mon passe-temps pour le développement 
        front-end est de créer ce que les utilisateurs.`
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;