const translation = (lang) => {
    const english = {
        about: "Contact Me",
        sendMe: "Send Me and Email",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        connect: "Connect with Me"
    }

    const french = {
        about: "Me Contactez",
        sendMe: "Envoyez-moi un Email",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        connect: "Connectez avec Moi"
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;