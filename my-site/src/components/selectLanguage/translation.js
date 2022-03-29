const translation = (lang) => {
    const english = {
        select: "Select a Language",
    }

    const french = {
        select: "Sélectionnez une langue",
    }

    if (lang === "fr") {
        return french;
    } else {
        return english;
    }
}

export default translation;