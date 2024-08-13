import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

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
        href="https://instagram.com/steelstine"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="#home/email"
        onClick={() =>
          (window.location.href = "mailto:ansh.pandey1234@gmail.com")
        }
      >
        <MdEmail />
      </a>
      <a
        href="#contactMe"
        onClick={() =>
          document
            .getElementById("contactMe")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <MdKeyboardArrowDown />
      </a>
    </div>
  );
};

export default links;
