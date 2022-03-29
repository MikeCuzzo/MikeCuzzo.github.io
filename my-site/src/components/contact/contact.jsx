import React, { useRef, useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import './contact.scss';
import translation from "./translation";

const Contact = props => {
    const [language, setLanguage] = useState(props.lang);

    useEffect(() => {
        setLanguage(props.lang);
    }, [props.lang]);

    const text = translation(language);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '') {
            emailjs.sendForm('service_8u8gfoi', 'template_yxqezvq', form.current, 'user_1IgsCanixBcsEdhU89UAZ')
                .then((result) => {
                    console.log(result.text);
                    alert("Message sent");
                }, (error) => {
                    console.log(error.text);
                    alert("Error sending message");
                });
            document.getElementById("contact-form").reset();
        } else {
            alert("All fields are required");
        }

    };

    return (
        <div className="container">
            <h2 className="mb-5" id="tabHeader">{text.about}</h2>
            <div>
                <div className="col-10 col-lg-7 container bg-light border text-start p-3 mb-5"
                    id="contact-container">
                    <h5 className="mb-3">{text.sendMe}</h5>
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                        <div className="mb-3">
                            <label className="form-label"
                                htmlFor="user_name">{text.name}</label>
                            <input type="text"
                                name="user_name"
                                id="user_name"
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"
                                htmlFor="user_email">{text.email}</label>
                            <input type="email"
                                name="user_email"
                                id="user_email"
                                className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label"
                                htmlFor="message">{text.message}</label>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control" />
                        </div>
                        <input type="submit"
                            value={text.send}
                            className="btn btn-primary mb-2"
                            id="sendEmail" />
                    </form>
                </div>
                <div>
                    <p id="socials-header">{text.connect}</p>
                    <a href="https://www.linkedin.com/in/michael-cuzzo-24823117b?trk=profile-badge">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            className="skill-icon"
                            alt="linked-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;