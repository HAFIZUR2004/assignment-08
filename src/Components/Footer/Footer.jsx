import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import logopng from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

        
          <div className="md:w-1/3">
            <LogoSection />
          </div>

         
          <div className="flex flex-wrap gap-10">
            <FooterLinks title="Services" links={['Product Support','Order Tracking','Shipping & Delivery','Returns']} />
            <FooterLinks title="Company" links={['About Us','Careers','Contact']} />
            <FooterLinks title="Legal" links={['Terms of Service','Privacy Policy','Cookie Policy']} />
          </div>

        </div>

        
        <hr className="my-8 border-gray-300" />

       
        <div className="text-center text-gray-500 text-sm">
          © {currentYear} <span className="font-semibold">HERO.IO</span> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};


const LogoSection = () => (
  <>
    <div className="flex items-center gap-3 mb-3">
      <img src={logopng} alt="Hero IO Logo" className="w-10 h-10 rounded-full" />
      <h2 className="text-2xl font-bold">HERO.IO</h2>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      Leading the way in cutting-edge technology and innovation.
      Experience the next generation of apps with us.
    </p>

    <div className="flex gap-4 mt-4 text-gray-600 text-xl">
      <SocialIcon href="https://facebook.com" icon={<FaFacebook />} color="hover:text-blue-600" />
      <SocialIcon href="https://twitter.com" icon={<FaTwitter />} color="hover:text-sky-500" />
      <SocialIcon href="https://github.com" icon={<FaGithub />} color="hover:text-black" />
      <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} color="hover:text-blue-700" />
    </div>
  </>
);


const SocialIcon = ({ href, icon, color }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`transition ${color}`}>
    {icon}
  </a>
);


const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-lg mb-3">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {links.map((link, index) => (
        <li key={index}><a href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default Footer;
