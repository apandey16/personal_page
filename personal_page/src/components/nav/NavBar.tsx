import React from "react";
import "./stylesheet.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { FaGears } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaGears />
      </a>
      <a
        href="#workExperience"
        onClick={() => setActiveNav("#workExperience")}
        className={activeNav === "#workExperience" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#myprojects"
        onClick={() => setActiveNav("#myprojects")}
        className={activeNav === "#myprojects" ? "active" : ""}
      >
        <GoChecklist />
      </a>
      <a
        href="#contactMe"
        onClick={() => setActiveNav("#contactMe")}
        className={activeNav === "#contactMe" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default NavBar;
