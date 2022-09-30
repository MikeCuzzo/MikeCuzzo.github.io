import React from "react";
import "./Contact.scss";

export class Contact extends React.Component {
  render() {
    return (
      <div id="contact" class="section">
        <div class="main-container">
          <div class="heading">
            <h1 class="section-header">Contact</h1>
            <p class="section-subheader">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div id="contact-form-container">
            <form id="contact-form">
              <div class="contact-form-field">
                <label for="name">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                />
              </div>
              <div class="contact-form-field">
                <label for="email">Email</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                />
              </div>
              <div class="contact-form-field">
                <label for="message">Message</label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                  id="message"
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
