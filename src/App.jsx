import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className='main'>
      <img
        src="https://raphaelenciso.com/heroIcons.svg"
        alt=""
        className="bg"
      ></img>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <footer>
        <p>Copyright © 2024 Jay Cee Macaraig. | All Right Reserved.</p>
    </footer>
    </div>

  );
};

export default App;
