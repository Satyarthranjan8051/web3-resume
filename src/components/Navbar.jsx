import React, { useState } from "react";
import { FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">ResumeChain</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#">Software</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Submit</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Create Account</a></li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-6 text-lg md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#">Software</a>
        <a href="#">Pricing</a>
        <a href="#">Submit</a>
        <a href="#">Sign In</a>
        <a href="#">Create Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
