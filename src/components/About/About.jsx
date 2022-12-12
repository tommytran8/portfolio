import React from "react";
import myImg from "../../assets/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif";
import altImg from "../../assets/dizzy-programmer-working-with-code-on-a-laptop.gif";
const About = () => {
  return (
    <div className="about">
      <div className="profile-container">
        <img src={myImg} alt={altImg} />
      </div>
      <section className="about-me">
        <h1>About me</h1>
        <p>
          I am a <b>Front-end Developer</b> with +4 years of experience in web
          development using modern front-end technologies such as React, Redux,
          React Router v5, HTML5, SCSS/SASS, JavaScript, ES6, TypeScript,
          Node.js, Bootstrap, Webpack, Babel, etc.
        </p>
      </section>
      <section className="technical-skills">
        <h1>Technical Skills</h1>
        <ul>
          <li>
            <b>Programming Languages:</b> JavaScript, TypeScript
          </li>
          <li>
            <b>Client-Side Development:</b> React, HTML/HTML5, CSS/CSS3,
            SCSS/SASS, Redux, MVC architecture, React Router
          </li>
          <li>
            <b>Server-Side Development:</b> MongoDB, Firebase
          </li>
          <li>
            <b>Testing Runners:</b> Jest, React Testing Library, Mocha
          </li>
          <li>
            <b>Version Control and Project Management:</b> Git, Github
          </li>
          <li>
            <b>Development Methodologies:</b> Agile/Scrum, Waterfall
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
