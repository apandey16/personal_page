import React from "react";
import "./stylesheet_home.css";
import profilePic from "../../assets/me.jpg";
import Links from "./links";

function Home() {
  return (
    <section id="home">
      <div className="container">
        <Links />
        <img src={profilePic} alt="main pic" />

        <div className="textBox">
          <h1>I am Ansh Pandey.</h1>
          <h1>A Software Developer</h1>
          <h2>Based in California.</h2>
          <p>
            Welcome to my personal website! <br />
            I am currently a student at California Polytechinic State University
            in SLO studying Computer Science and Entrepunership. <br />
            Additionally, I am a Jr Developer at Amazon. I am also interested in
            working on projects and collaborating with others. Feel free to
            reach out to me!
          </p>
        </div>
      </div>
    </section>
  );
}
export default Home;
