import React from "react";
import "./Contact.scss";
import { EmailForm } from "./EmailForm/EmailForm";

export class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="section">
        <div className="main-container">
          <div className="heading">
            <h1 className="section-header">Contact</h1>
            <p className="section-subheader">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <EmailForm />
        </div>
      </div>
    );
  }
}
