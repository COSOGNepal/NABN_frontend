import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span className="org-name">NAGN</span>
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/team">TEAM</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/kishorisanjal">CONNECT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
