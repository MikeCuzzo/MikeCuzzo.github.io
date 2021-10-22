import React from "react";
import MyPhoto from './MyPhoto.png';
import './myHeader.css';

export default class MyHeader extends React.Component {
    render() {
        return (
            <div class="header">
            <img src={MyPhoto} alt="my-photo" class="my-photo"/>
            <h1>Michael Cuzzo - Software Developer</h1>
            <h2>About Me</h2>
            <p>I am a 4th year student studying Computer Science at Southern Methodist University. I am an aspiring
                front end
                software developer with experience in C++, Java, HTML, CSS, Angular, and more.
            </p>
        </div>
        );
    }
}