import React, { useState, useEffect } from "react";
import "./header.css";
import { MdClear } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { BsMoon } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";

function Header() {
  // Initial state for the theme, default to value in localStorage or "light"
  const [dark, setDark] = useState(() => localStorage.getItem("theme") || "light");
  const [visible, setVisible] = useState(false); // For menu visibility

  // Toggle visibility of the mobile menu
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    const newTheme = dark === "light" ? "dark" : "light";
    setDark(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  useEffect(()  => {
    // Apply the current theme by adding the class to body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(dark);
  }, [dark]); // Re-run this effect when `dark` changes

  // Load theme from localStorage on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme); // Set the saved theme if it exists
    }
  }, []);

  return (
    <header className="navbar center espace">
      <div className="div_veli"></div>

      {/* Menu toggle button */}
      <GrMenu className="menu GrMenu" onClick={toggleVisibility} />

      {/* Navigation links */}
      <nav>
        <ul className="navbar center">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Certification">Certification</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      {/* Responsive menu (modal) */}
      {visible && (
        <div className="fixed">
          <ul className="model">
            <MdClear className="menu2 MdClear" onClick={toggleVisibility} />
            <li><a href="#Home" onClick={toggleVisibility} >Home</a></li>
          <li><a href="#Projects" onClick={toggleVisibility} >Projects</a></li>
          <li><a href="#Certification" onClick={toggleVisibility} >Certification</a></li>
          <li><a href="#Contact" onClick={toggleVisibility} >Contact</a></li>
          </ul>
        </div>
      )}

      {

        dark==="dark"? <BsMoon className="BsMoon" onClick={toggleDarkMode} />
        :
        <RiSunLine className="RiSunLine" onClick={toggleDarkMode} />
      }
      
    </header>
  );
}

export default Header;
