import React from "react";
import './footer.css';
import linkedin from './linkedin-icon.png'
import email from './email-icon.png'

export default class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
            <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/michael-cuzzo-24823117b/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" class="footerIcon"/>
            </a>
            <a href="mailto:mcuzzo71@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="email" class="footerIcon"/>
            </a>
        </div>
        );
    }
}