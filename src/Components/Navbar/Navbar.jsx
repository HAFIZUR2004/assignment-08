// Navbar.jsx
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import logopng from "../../assets/logo.png"
import { Link } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            src={logopng} // তোমার লোগো ইমেজ রাখো (public/logo.png)
            alt="HERO.IO Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">HERO.IO</span>
        </div>

        {/* Middle: Nav Links */}
        <ul className="hidden md:flex space-x-10 font-medium">
          <li>
            <a href="/" className="hover:text-purple-600 transition">Home</a>
          </li>
          <li>
            <Link to="apps" className="hover:text-purple-600 transition">Apps</Link>
          </li>

          <li>
            <Link to="/installation" className="hover:text-purple-600 transition">Installation</Link>
          </li>
        </ul>

        {/* Right: Contribute Button */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
          style={{
            background:
              "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
          }}
        >
          <FaGithub className="text-2xl" />
          <span>Contribute</span>
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-4 text-center animate-fadeIn">
          <a href="/" className="block hover:text-purple-600 transition">Home</a>
          <a href="#apps" className="block hover:text-purple-600 transition">Apps</a>
          <a href="#installation" className="block hover:text-purple-600 transition">Installation</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
