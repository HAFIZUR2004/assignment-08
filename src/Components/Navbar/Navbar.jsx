import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { DiAppstore } from "react-icons/di";
import { GrInstall } from "react-icons/gr";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logopng from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-600 font-semibold"
      : "hover:text-purple-600";

  return (
    <nav className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)} // dropdown close on logo click
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img src={logopng} alt="HERO.IO Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold tracking-wide">HERO.IO</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 font-medium">
          <li>
            <Link to="/" className={`${isActive("/")} transition flex items-center gap-1`}>
              <IoIosHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className={`${isActive("/apps")} transition flex items-center gap-1`}>
              <DiAppstore /> Apps 
            </Link>
          </li>
          <li>
            <Link to="/installation" className={`${isActive("/installation")} transition flex items-center gap-1`}>
              <GrInstall /> Installation
            </Link>
          </li>
        </ul>

        {/* Contribute Button */}
        <a
          href="https://github.com/HAFIZUR2004"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
          style={{
            background: "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
          }}
        >
          <FaGithub className="text-2xl" />
          <span>Contribute</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
       <div className="md:hidden bg-gray-100 px-6 py-4 flex flex-col items-center space-y-4 text-center">
  <Link
    to="/"
    onClick={() => setIsOpen(false)}
    className={`${isActive("/")} flex items-center gap-2 text-gray-800 hover:text-purple-600 transition`}
  >
    <IoIosHome /> Home
  </Link>
  
  <Link
    to="/apps"
    onClick={() => setIsOpen(false)}
    className={`${isActive("/apps")} flex items-center gap-2 text-gray-800 hover:text-purple-600 transition`}
  >
    <DiAppstore /> Apps
  </Link>
  
  <Link
    to="/installation"
    onClick={() => setIsOpen(false)}
    className={`${isActive("/installation")} flex items-center gap-2 text-gray-800 hover:text-purple-600 transition`}
  >
    <GrInstall /> Installation
  </Link>

  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center mt-2 w-full text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
    style={{
      background: "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
    }}
  >
    <FaGithub className="mr-2" />
    Contribute
  </a>
</div>

      )}
    </nav>
  );
};

export default Navbar;
