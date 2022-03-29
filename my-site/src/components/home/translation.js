const translation = (lang) => {
    const english = {
        welcome: "Welcome to My Website",
        desc: `Here you can get an idea of who I am, 
        see what technical skills I possess, see what projects I have worked on, 
        and provide links to contact me.`,
        checkout: "Checkout My Resumes",
    }

    const french = {
        welcome: "Bienvenue sur Mon Site",
        desc: `Ici vous pouvez voir une idée de qui je suis, 
        voir quels sont mes compétences techniques, 
        voir quels sont les projets que j'ai travaillés sur, 
        et fournir des liens pour me contacter.`,
        checkout: "Voir Mes Résumés",
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;