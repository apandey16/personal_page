import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import "./stylesheet_home.css";

const links = () => {
  return (
    <div className="links">
      <a
        href="https://linkedin.com/in/anshpandey10"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/apandey16" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="#contactMe"
        onClick={() =>
          document
            .getElementById("contactMe")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default links;
