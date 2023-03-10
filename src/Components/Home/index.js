import React from "react";
import "./home.css";
import img from "../../Images/picture.jpg";
import TypeIt from "typeit-react";

function Home() {
  return (
    <div className="Home">
      <div className="pics">
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="bio">
        <h1> Hi 👋,</h1>
        <h1>
          I'm <span>Mohamed Abdi</span>{" "}
        </h1>
        <h1>and this is my portfolio...</h1>
        <h1 className="Type">
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Full Stack Developer")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Front End")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Back End")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Team Worker")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Creative");

              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default Home;
