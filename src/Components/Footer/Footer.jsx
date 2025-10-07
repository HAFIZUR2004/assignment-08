import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import logopng from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logopng}
                alt="Hero IO Logo"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-2xl font-bold">HERO.IO</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading the way in cutting-edge technology and innovation.
              Experience the next generation of apps with us.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-600 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="hover:text-blue-600 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-sky-500 transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-black transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-700 transition" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Product Support</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Text */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">HERO.IO</span> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
