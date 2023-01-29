import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { useState } from "react";

function App() {
  const [text, setText] = useState("🌚 Dark Mode");
  const [theme, setTheme] = useState("light");
  const [classButton, setClassButton] = useState("button-dark");
  const [background, setBackground] = useState("light-colour");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setText("🌞 Light Mode");
      setClassButton("button-light");
      setBackground("dark-colour");
    } else {
      setTheme("light");
      setText("🌚 Dark Mode");
      setClassButton("button-dark");
      setBackground("light-colour");
    }
  }
  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar text={text} toggle={toggleTheme} classButton={classButton} />
        <Home />
        <About background={background} />
        <Projects />
        <Contact background={background} />
      </div>
    </BrowserRouter>
  );
}

export default App;
