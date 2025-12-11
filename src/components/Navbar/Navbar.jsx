import "./Navbar.scss";
import logo from "../../assets/brewtique.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} className="logo" />

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#" className="nav-link" onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href="#" className="nav-link" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={scrollToContact}>
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
