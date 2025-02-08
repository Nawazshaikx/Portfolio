import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="" alt="" />
          <ul>
            <li>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/work-experience" className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
