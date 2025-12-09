import { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/brewtique.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e6d8ca] py-2 top-0 z-50 font-causten">
      <div className="container mx-auto px-8 flex justify-between items-center bg-transparent">
        {/* Logo */}
        <div className="w-40 cursor-pointer">
          <img
            src={logo}
            alt="Brewtique Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-dark font-medium text-lg">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-dark hover:text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-dark/10 px-8 pb-4 shadow-lg animate-fade-in-down">
          <ul className="flex flex-col gap-4 mt-4 text-gray-dark font-medium text-lg">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
