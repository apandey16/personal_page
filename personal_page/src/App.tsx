import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/nav/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
