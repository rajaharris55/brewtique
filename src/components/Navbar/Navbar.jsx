import "./Navbar.scss";
import logo from "../../assets/brewtique.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/menu" className="nav-link" onClick={() => setOpen(false)}>
            Menu
          </Link>
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
