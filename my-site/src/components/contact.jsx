import React from "react";

export const Contact = props => {
    return (
        <div className="container">
            <h2>Contact Me</h2>
            <div className="row justify-content-evenly">
                <div className="col-3">
                    <p>Connect with me on linkedin</p>
                    <a href="https://www.linkedin.com/in/michael-cuzzo-24823117b/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" id="linkedin-icon" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="mailto:mcuzzo71@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email Me
                    </a>
                </div>
            </div>
        </div>
    );
}