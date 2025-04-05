import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navigation.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu when an item is clicked
  };

  return (
    <nav className="navbar">
      <div className="nav-sub-parent">
        {/* Desktop Navigation */}
        <div className="nav-links">
          <p className="pointer" onClick={() => scrollToSection("hero")}>Home</p>
          <p className="pointer" onClick={() => scrollToSection("about")}>About</p>
          <p className="pointer" onClick={() => scrollToSection("projects")}>Projects</p>
          <p className="pointer" onClick={() => scrollToSection("contact")}>Contact</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
            <IoMdMenu style={{ fontSize: "25px" }}/>
          </button>
        </div>
      </div>

      {/* Overlay Navigation Menu */}
      {isMenuOpen && (
        <div className="overlay-nav">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <RxCross2 style={{ fontSize: "25px" }}/>
          </button>
          <div className="overlay-menu">
            <p className="pointer" onClick={() => scrollToSection("hero")}>Home</p>
            <p className="pointer" onClick={() => scrollToSection("about")}>About</p>
            <p className="pointer" onClick={() => scrollToSection("projects")}>Projects</p>
            <p className="pointer" onClick={() => scrollToSection("contact")}>Contact</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
