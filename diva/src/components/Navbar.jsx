import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  // State for the menu (initial value fetched from localStorage)
  const [menuOpen, setMenuOpen] = useState(
    () => localStorage.getItem("menuOpen") === "true"
  );

  // Persist menu state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("menuOpen", menuOpen);
  }, [menuOpen]);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-transparent text-gray-500 px-6 lg:px-16 py-6 flex items-center justify-between relative">
      {/* Logo */}
      <div
        className={`text-xl font-semibold logo ${
          menuOpen ? "text-white" : "text-black"
        }`}
      >
        davies<span className="text-purple-500 text-2xl">.</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex text-sm items-center space-x-8">
        {["about", "services", "projects", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="hover:text-purple-500 capitalize"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire Me Button */}
      <button className="hidden lg:block bg-purple-500 text-white text-sm px-4 py-2 rounded-full">
        Hire Me
      </button>

      {/* Hamburger Menu */}
      <div className="lg:hidden cursor-pointer z-50" onClick={toggleMenu}>
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5M3.75 15.75h16.5"
            />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 lg:hidden bg-purple-500 text-white flex flex-col items-center justify-center duration-500 ease-in-out ${
          menuOpen ? "menu-open" : "menu-close"
        }`}
      >
        <ul className="text-center space-y-6 text-xl font-semibold">
          {["about", "services", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={handleLinkClick}
                className="hover:underline capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
