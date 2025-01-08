import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Importing Link from react-scroll

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const links = [
    { to: "hero", label: "Resume" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          className="text-white font-bold text-xl cursor-pointer"
          smooth={true}
          duration={500}
        >
          My Portfolio
        </Link>

        {/* Hamburger Button */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          id="mobile-menu"
          className={`absolute left-0 w-full bg-gray-900 text-white lg:static lg:flex lg:space-x-6 lg:bg-transparent lg:w-auto lg:items-center lg:p-0 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "flex flex-col items-center top-full"
              : "hidden lg:flex"
          }`}
          role="menu"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to} // Using `to` instead of `href`
              smooth={true}
              duration={500} // Set scroll duration
              offset={-70} // Adjust scroll offset to account for fixed navbar
              className="py-4 px-6 text-gray-300 hover:text-white transition-colors w-full text-center lg:w-auto cursor-pointer"
              onClick={closeMenu}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
