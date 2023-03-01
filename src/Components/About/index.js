import React from "react";
import "./about.css";

function About({ background }) {
  return (
    <div className={background} id="about">
      <h1>About</h1>
      <div className="container">
        <div className="description">
          <p>
            {" "}
            Recently completed an intensive 16 week bootcamp. The opportunity to
            work with new people on a weekly basis has
          </p>
          <p>
            greatly enhanced my pair programming skills and has helped me become
            more team-oriented.
          </p>
          <p>
            It has allowed me to learn from a diverse group of individuals and
            adapt to different communication and problem-solving styles,{" "}
          </p>
          <p>
            which has ultimately made me a more effective contributor to group
            projects.
          </p>
          {/* <p></p>
          <p></p> */}
          <p>
            I am now a full stack developer, that really enjoys building web
          </p>
          <p>applications, proficent in both the front and back-end.</p>
        </div>
        <div className="stack">
          <h2> Tech Stack:</h2>
          <ul className="tech-stack">
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
