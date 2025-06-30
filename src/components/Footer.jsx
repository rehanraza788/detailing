import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* About */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-xl mb-3">About Us</h2>
          <p className="text-gray-400 text-sm">
            MetalWorks Detailing Solutions provides industry leading steel
            detailing services. MDS is an innovative Structural Steel Detailing
            company committed to providing quality steel detailing services to
            the commercial and industrial industry.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="font-bold text-xl mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="hover:text-white transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="hover:text-white transition">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/samples" className="hover:text-white transition">
                Samples
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="hover:text-white transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-xl mb-3">Address</h2>
          <p className="text-gray-400 text-sm">
            MetalWorks Detailing Solutions
            <br />
            New Delhi, India
            <br />
            Ph no. xxxxxxxxxx
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} MetalWorks Detailing Solutions. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
