import React from "react";
import "./contact.css";

function Contact({ background }) {
  return (
    <div className={background} id="contact">
      <h1> Contact Me</h1>
      <p> Get in touch with me through these socials 🙌</p>
      <div className="socials">
        <a href="https://github.com/Mohamed1104">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
            alt=""
          ></img>
        </a>

        <a href="https://twitter.com/MoC0des">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
            alt=""
          ></img>
        </a>

        <a href="https://www.linkedin.com/in/mohamed-abdi-b69428225/">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt=""
          ></img>
        </a>
      

      <a href="mailto:mohamed.abdi11@hotmail.co.uk">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/831/831408.png"
          alt=""
        ></img>
      </a>
      </div>
      <div className="social-media">
        <p> Github</p>
        <p> Twitter</p>
        <p> Linkedin</p>
        <p> Email</p>
      </div>
    </div>
  );
}

export default Contact;
