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
        {/* <TypeIt> Hi 👋, </TypeIt>
        <TypeIt>
          {" "}
          I am <span>Mohamed</span>{" "}
        </TypeIt>
        <TypeIt>
          {" "}
          <span>Abdi</span> and this
        </TypeIt>
        <TypeIt>is my portfolio... </TypeIt> */}
        <h1> Hi 👋,</h1>
        <h1>
          I am <span>Mohamed</span>{" "}
        </h1>
        <h1>
          <span>Abdi</span> and this
        </h1>
        <h1> is my portfolio...</h1>
      </div>
      <div className="icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2409/2409387.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
