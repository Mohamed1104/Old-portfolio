import React from "react";
import "./contact.css";

function Contact({ background }) {
  return (
    <div className={background} id="contact">
      <h1> Contact Me</h1>
      <p> Get in touch with me through these socials 🙌</p>
      <div className="socials">
        <div className="item">
          {" "}
          <a href="https://github.com/Mohamed1104">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
              alt=""
            ></img>
          </a>
          <span> Github</span>
        </div>
        <div className="item">
          <a href="https://twitter.com/MoC0des">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
              alt=""
            ></img>
          </a>
          <span> Twitter</span>
        </div>
        <div className="item">
          <a href="https://www.linkedin.com/in/mohamed-abdi-b69428225/">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt=""
            ></img>
          </a>
          <span> Linekdin</span>
        </div>
        <div className="item">
          <a href="mailto:mohamed.abdi11@hotmail.co.uk">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/831/831408.png"
              alt=""
            ></img>
          </a>
          <span> Email</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
