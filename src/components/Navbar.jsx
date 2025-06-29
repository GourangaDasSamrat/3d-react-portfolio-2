import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header flex items-center justify-between">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>
      {/* Desktop nav */}
      <nav className="hidden sm:flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
      {/* Hamburger icon for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-black rounded"></span>
      </button>
      {/* Mobile menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
