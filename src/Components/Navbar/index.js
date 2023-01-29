import React from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar({ text, toggle, classButton }) {
  return (
    <>
      <nav className="Navbar">
        <div className="logo">
          <span>MA</span>
        </div>
        <div className="links">
          <ul className="nav-links">
            <li>
              <button className={classButton} onClick={toggle}>
                {text}
              </button>
            </li>
            <li>
              <Link to="#about" smooth>
                {" "}
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" smooth>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
