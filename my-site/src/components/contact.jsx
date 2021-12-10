import React, { useRef } from "react";
import emailjs from 'emailjs-com';

export const Contact = props => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_8u8gfoi', 'template_yxqezvq', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <h2 className="mb-5">Contact Me</h2>
            <div>
                <div className="col-7 container bg-light border text-start p-3 mb-5">
                    <h5 className="mb-3">Send Me an Email</h5>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label"
                                htmlFor="user_name">Name</label>
                            <input type="text"
                                name="user_name"
                                id="user_name"
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"
                                htmlFor="user_email">Email</label>
                            <input type="email"
                                name="user_email"
                                id="user_email"
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"
                                htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control" />
                        </div>
                        <input type="submit"
                            value="Send"
                            className="btn btn-primary mb-4" />
                    </form>
                </div>
                <div>
                    <p>Connect with me</p>
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