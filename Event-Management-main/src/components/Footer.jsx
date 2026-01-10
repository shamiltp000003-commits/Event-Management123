import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="w-full bg-gradient-to-b from-[#0C0321] to-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
         <h2 className="text-2xl mb-4 font-cursive">
  Wedding Bliss
</h2>
          <p className="text-sm leading-relaxed">
            Make your weddings memorable with premium event management text, 
            professional service providers, and seamless booking experience.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-lg hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="text-lg hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="text-lg hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-cursive">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="flex items-center space-x-3 mb-3">
            <FaPhone />
            <p className="text-sm">+91 98765 43210</p>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <FaEnvelope />
            <p className="text-sm">support@weddingbliss.com</p>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <FaMapMarkerAlt />
            <p className="text-sm">Kochi, Kerala, India</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3B1A7A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
          WeddingBliss © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
