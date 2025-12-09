import "./Navbar.scss";
import logo from "../../assets/brewtique.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} className="logo" />

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Menu
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
