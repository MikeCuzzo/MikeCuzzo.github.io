import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./EmailForm.scss";

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== ""
    ) {
      emailjs
        .sendForm(
          "service_368jgcc",
          "template_yxqezvq",
          form.current,
          "EUOUzo1H70vVktLdO"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent");
          },
          (error) => {
            console.log(error.text);
            alert("Error sending message");
          }
        );
      document.getElementById("contact-form").reset();
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div id="contact-form-container">
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form-field">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            placeholder="Enter Your Name"
            id="name"
            name="name"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            placeholder="Enter Your Email"
            id="email"
            name="email"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="message">Message</label>
          <textarea
            required
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            id="message"
            name="message"
          />
        </div>
        <input className="button" type="Submit" value="Submit" />
      </form>
    </div>
  );
};
