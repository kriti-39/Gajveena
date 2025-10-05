import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-60 py-6 text-white mt-[5%] border-t border-white w-full overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Creator Section for Desktop and Mobile */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Column: Logo, Name, Contact, Address */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            {/* Logo (Visible only on desktop) */}
            <img
              src="src/assets/debjit-log-45.png"
              alt="Logo"
              className="w-18 h-auto mb-2 hidden md:block mx-2 pt-2"
            />
            <p className="text-lg font-semibold px-2">Contact</p>
            <p className="text-lg px-2">+1234567890</p>
          </div>

          {/* Right Column: Links and Social Media */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 md:gap-12">
            {/* Links Column */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a href="/" className="text-[17px] hover:text-yellow-100">Home</a>
              <a href="/about" className="text-[17px] hover:text-yellow-100">History</a>
              <a href="/creator" className="text-[17px] hover:text-yellow-100">Creator</a>
            </div>

            {/* Social Media Column */}
            <div className="flex flex-col items-center md:items-start space-y-2 mt-4 md:mt-0">
              <a href="https://instagram.com" className="flex items-center space-x-2 text-[17px] hover:text-yellow-100">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" className="flex items-center space-x-2 text-[17px] hover:text-yellow-100">
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a href="https://youtube.com" className="flex items-center space-x-2 text-[17px] hover:text-yellow-100">
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-white opacity-50 my-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
